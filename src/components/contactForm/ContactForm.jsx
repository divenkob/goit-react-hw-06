import {useId} from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import css from './contactForm.module.css';
import {nanoid} from 'nanoid'


export default function ContactForm({addContact}) {
    const nameId = useId();
    const numberId = useId();
    const PhoneSchema = Yup.object().shape({
      name: Yup.string()
        .min(3, "To short")
        .max(50, "To long")
        .required("Required"),
      number: Yup.string()
        .min(3, "To short")
        .max(50, "To long")
        .required("Required"),
    });
    const handleSubmit = (values, actions) => {
      addContact({
        id: nanoid(),
        name: values.name,
        number: values.number,
      });
      actions.resetForm();
    };
  
    return (
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={PhoneSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.formContainer}>
          <div className={css.form}>
            <label htmlFor={nameId}>Name</label>
            <Field type="text" name="name" id={nameId}/>
            <ErrorMessage name="name" component="span" />
          </div>
  
          <div className={css.form}>
            <label htmlFor={numberId}>Number</label>
            <Field type="tel" name="number" id={numberId} />
            <ErrorMessage name="number" component="span" />
          </div>
          <button className={css.formButton} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    );
}