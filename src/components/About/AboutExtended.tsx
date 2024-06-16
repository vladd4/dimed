"use client";

import Image from "next/image";

import styles from "./AboutExtended.module.scss";

import AboutImage from "@/../public/about-image.webp";
import AboutIcon1 from "@/../public/free-icon-knee-joint-2047496.png";
import AboutIcon2 from "@/../public/free-icon-spine-4885861.png";
import AboutIcon3 from "@/../public/free-icon-muscle-5877976 1.png";

import { useAppDispatch } from "@/hooks/redux-hooks";
import { setShowAlert } from "@/redux/slices/alertSlice";

export default function AboutExtended() {
  const dispatch = useAppDispatch();
  return (
    <section className={styles.root}>
      <article className={styles.image_block}>
        <Image alt="About Dimed" src={AboutImage} width={940} height={720} />
        <div className={styles.text_block}>
          <h2>Про нас</h2>
          <p>
            Центр вертебрології та реабілітації у Вінниці - “Dimed” радий
            представити вам нашу команду лікарів, фізичних терапевтів та
            масажистів, які нададуть ввесь спектр необхідної допомоги у
            відновленні здоровʼя.
          </p>
          <p>
            Наша команда надає ряд послуг, а саме консультації невролога,
            вертебролога, сучасні високоінтенсивні фізіотерапевтичні процедури,
            якісний лікувальний масаж, комплексну індивідуально підібрану
            лікувальну фізкультуру. Кожен пацієнт отримає індивідуальний план
            лікування. Наш заклад спеціалізується на захворюваннях
            опорно-рухового апарата - а саме: хребта, суглобів та мʼязів.
          </p>
          <p className={styles.highlite_p}>
            Довіряйте своє здоровʼя професіоналам центру “Dimed”!
          </p>
          <div className={styles.icons_block}>
            <h2>Лікуємо</h2>
            <div className={styles.icons_row}>
              <div className={styles.icons_item}>
                <Image alt="Суглоби" src={AboutIcon1} width={81} height={81} />
                <p>Суглоби</p>
              </div>
              <div className={styles.icons_item}>
                <Image alt="Хребет" src={AboutIcon2} width={81} height={81} />
                <p>Хребет</p>
              </div>
              <div className={styles.icons_item}>
                <Image alt="М'язи" src={AboutIcon3} width={81} height={81} />
                <p>М'язи</p>
              </div>
            </div>
          </div>
          <button id="alert-open" onClick={() => dispatch(setShowAlert(true))}>
            Записатись на прийом
          </button>
        </div>
      </article>
      <article className={styles.bottom_block}>
        <div>
          <h2>
            DIMED - центр, що спеціалізується на лікуванні хребта та суглобів.
          </h2>
          <p>
            Наші досвідчені фахівці використовують сучасні методики для
            забезпечення найкращих результатів. Ми прагнемо повернути пацієнтам
            повноцінне життя без болю.
          </p>
        </div>
        <div>
          <p>
            У нашому центрі кожному пацієнту приділяється індивідуальна увага.
            Ми ретельно обстежуємо кожного пацієнта, щоб визначити причину болю
            та запропонувати найбільш підходяще лікування. Наші методи включають
            як консервативні, так і інноваційні хірургічні підходи, що дозволяє
            нам ефективно боротися з різними захворюваннями хребта та суглобів.
            Ми завжди дбаємо про комфорт і безпеку наших пацієнтів, створюючи
            для них оптимальні умови для швидкого одужання.
          </p>
          <p>
            Наша команда складається з висококваліфікованих фахівців , які мають
            великицй досвід у лікуванні захворювань хребта та суглобів. Ми
            постійно вдосконалюємо наші знання та навички, беручи участь у
            різноманітних навчаннях та семінарах. Це дозволяє нам застосовувати
            найсучасніші методики лікування, які вже довели свою ефективність у
            всьому світі.
          </p>
        </div>
      </article>
    </section>
  );
}
