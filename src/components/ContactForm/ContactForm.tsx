"use client";

import styles from "./Form.module.scss";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import { FormValues, formSchema } from "@/formSchema";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useEffect, useState } from "react";

import { sendFormToTelegram } from "@/utils/sendFormToTelegram";

export default function ContactForm() {
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
    <section className={styles.root}>
      <ToastContainer />
      <h2>Зворотній зв'язок</h2>
      <p>
        Залиште дані для запису та ми звʼяжемося з Вами протягом найближчого
        часу!
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.input_block}>
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
        </div>
        <div className={styles.buttons_block}>
          <h2>Як з вами краще зв’язатись?</h2>
          <div className={styles.radio_btns}>
            <div className={styles.radio_input}>
              <input
                type="radio"
                onChange={() => setMsgType("viber")}
                checked={msgType === "viber"}
                id="viber"
              />
              <label htmlFor="viber">Напишіть мені у Viber</label>
            </div>
            <div className={styles.radio_input}>
              <input
                type="radio"
                onChange={() => setMsgType("подзвонити")}
                checked={msgType === "подзвонити"}
                id="podzvoni"
              />
              <label htmlFor="podzvoni">Подзвоніть мені</label>
            </div>
          </div>
          <button type="submit">Залишити заявку</button>
        </div>
      </form>
    </section>
  );
}
