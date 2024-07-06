"use client";

import styles from "./AlertForm.module.scss";

import { X } from "lucide-react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { setShowAlert } from "@/redux/slices/alertSlice";

import { useEffect, useRef, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import { FormValues, formSchema } from "@/formSchema";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { sendFormToTelegram } from "@/utils/sendFormToTelegram";

export default function AlertForm() {
  const dispatch = useAppDispatch();
  const { showAlert } = useAppSelector((state) => state.alert);
  const alertRef = useRef(null);

  const handleCloseForm = (state: boolean) => {
    dispatch(setShowAlert(state));
  };

  const [msgType, setMsgType] = useState<"viber" | "подзвонити">("подзвонити");

  const { register, handleSubmit, reset, formState } = useForm<FormValues>({
    defaultValues: {
      name: "",
      phone: "",
    },
    resolver: zodResolver(formSchema),
  });

  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    let string = `Проект: Dimed Web \nІм'я: ${data.name} \nНомер телефону: ${data.phone} \nТип зв'язку: ${msgType}`;
    sendFormToTelegram(string);
    toast.success("Повідомлення успішно відправлене!", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    reset();
    dispatch(setShowAlert(false));
  };

  useEffect(() => {
    if (errors.phone) {
      toast.error(errors.phone?.message, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [errors]);

  return (
    <>
      <section
        ref={alertRef}
        className={`${styles.root} ${showAlert ? styles.show_alert : ""}`}
      >
        <X
          className={styles.close_span}
          size={40}
          onClick={() => handleCloseForm(false)}
        />
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h2>Записатись на прийом</h2>
          <input
            type="text"
            placeholder="Ім'я"
            autoComplete="off"
            required
            id="name"
            {...register("name")}
          />
          <input
            type="text"
            placeholder="+380(__)___-__-__"
            autoComplete="off"
            required
            id="phone"
            {...register("phone")}
          />
          <div className={styles.radio_block}>
            <p className={styles.label}>Як з вами краще зв'язатись?</p>
            <div className={styles.radio_btns}>
              <div className={styles.radio_input}>
                <input
                  type="radio"
                  onChange={() => setMsgType("viber")}
                  checked={msgType === "viber"}
                  id="viber-alert"
                />
                <label htmlFor="viber-alert">Напишіть мені у Viber</label>
              </div>
              <div className={styles.radio_input}>
                <input
                  type="radio"
                  onChange={() => setMsgType("подзвонити")}
                  checked={msgType === "подзвонити"}
                  id="podzvoni-alert"
                />
                <label htmlFor="podzvoni-alert">Подзвоніть мені</label>
              </div>
            </div>
          </div>
          <button type="submit">Записатись на прийом</button>
        </form>
      </section>
      <div
        className={`${styles.overlay} ${showAlert ? styles.show_alert : ""}`}
      />
    </>
  );
}
