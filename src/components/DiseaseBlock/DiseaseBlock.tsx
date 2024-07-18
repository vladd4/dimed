import Image from "next/image";

import styles from "./Disease.module.scss";

import Loader from "../Loader";

import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { Disease } from "@/app/types/general.types";

type DiseaseProps = {
  id: string;
};

async function getDisease(id: string) {
  const docRef = doc(db, "disease-page", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();

    const disease: Disease = {
      paragraph_1: data.paragraph_1,
      paragraph_2: data.paragraph_2,
      image_1: data.image_1,
      image_2: data.image_2,
    };

    return disease;
  } else {
    throw new Error(`Document with ID ${id} does not exist`);
  }
}

export default async function DiseaseBlock({ id }: DiseaseProps) {
  const disease = await getDisease(id);

  const paragraphs = disease?.paragraph_2.split("/n");
  const paragraphs_1 = disease?.paragraph_1.split("/n");

  return disease === undefined ? (
    <Loader />
  ) : (
    <section className={styles.root}>
      {disease !== undefined && disease.paragraph_1 === "" ? (
        <h2 className={styles.soon}>Опис захворювання скоро з'явиться...</h2>
      ) : (
        <>
          <div className={styles.top_block}>
            <div className={styles.text_block}>
              <h2>{id}</h2>
              {paragraphs_1 !== undefined &&
                paragraphs_1.map((paragraph, index) => (
                  <p
                    key={index}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
            </div>
            {disease !== undefined && (
              <Image
                alt="Disease Block"
                src={disease.image_1}
                width={900}
                height={600}
              />
            )}
          </div>
          <div className={styles.bottom_block}>
            <h2>Профілактика і лікування</h2>
            <p>
              {paragraphs !== undefined &&
                paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
            </p>
            {disease !== undefined && disease.image_2 && (
              <Image
                alt="Disease Block 2"
                src={disease.image_2}
                width={900}
                height={520}
              />
            )}
          </div>
        </>
      )}
    </section>
  );
}
