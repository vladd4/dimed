"use client";

import Image from "next/image";

import styles from "./Disease.module.scss";

import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { useEffect } from "react";
import { fetchDisease } from "@/redux/slices/diseaseSlice";

import Image1 from "@/../public/image 21.png";

type DiseaseProps = {
  id: string;
};

export default function DiseaseBlock({ id }: DiseaseProps) {
  const { status, disease } = useAppSelector((state) => state.disease);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDisease(id));
  }, [dispatch]);

  return (
    <section className={styles.root}>
      {status === "loaded" && disease !== null && disease.paragraph_1 === "" ? (
        <h2 className={styles.soon}>Опис захворювання скоро з'явиться...</h2>
      ) : (
        <>
          <div className={styles.top_block}>
            <div className={styles.text_block}>
              <h2>{id}</h2>
              <p>
                {status === "loaded" && disease !== null
                  ? disease.paragraph_1
                  : "Loading..."}
              </p>
            </div>
            <Image
              alt="Disease Block"
              src={
                status === "loaded" && disease !== null ? disease.image_1 : ""
              }
              width={900}
              height={600}
            />
          </div>
          <div className={styles.bottom_block}>
            <h2>Профілактика і лікування</h2>
            <p>
              {status === "loaded" && disease !== null
                ? disease.paragraph_2
                : "Loading..."}
            </p>
            {status === "loaded" && disease !== null && disease.image_2 && (
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
