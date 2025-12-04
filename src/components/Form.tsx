import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useTodo } from "../context/TodoContext";
import styles from "../styles/Form.module.css";
import type { FormTypes } from "../types/form";

function Form() {
  const { postData } = useTodo();

  const {
    register,
    handleSubmit,
    setFocus,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormTypes>({ mode: "onTouched" });

  useEffect(() => {
    setFocus("title");
  }, [setFocus]);

  const onSubmit = async (data: FormTypes): Promise<void> => {
    await postData(data.title, data.body);
    reset();
    setFocus("title");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.form__inner_wrapper}>
        <label htmlFor="title" className={styles.form__title__label}>
          Заголовок
        </label>
        <input
          {...register("title", {
            required: "Заголовок обязателен",
            maxLength: {
              value: 32,
              message: "Максимальная длина заголовка 32 символа",
            },
          })}
          id="title"
          type="text"
          className={styles.form__title__input}
        />
        {typeof errors.title?.message === "string" && (
          <p className={styles.form__title__error}>{errors.title.message}</p>
        )}
        <label htmlFor="body" className={styles.form__body__label}>
          Текст задания
        </label>
        <input
          {...register("body", {
            required: "Текст задания обязателен",
            maxLength: {
              value: 52,
              message: "Максимальная длина текста задания 52 символа",
            },
          })}
          id="body"
          type="text"
          className={styles.form__body__input}
        />
        {typeof errors.body?.message === "string" && (
          <p className={styles.form__body__error}>{errors.body.message}</p>
        )}
        <button
          disabled={!isValid || isSubmitting}
          type="submit"
          className={styles.form__submit}
        >
          {isSubmitting ? "Отправляется..." : "Отправить"}
        </button>
      </div>
    </form>
  );
}

export default Form;
