import Image from "next/image";

import styles from "./Disease.module.scss";

import Loader from "../Loader";

import { getDisease } from "@/controllers/disease";

type DiseaseProps = {
  id: string;
};

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

            {paragraphs !== undefined &&
              paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}

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
