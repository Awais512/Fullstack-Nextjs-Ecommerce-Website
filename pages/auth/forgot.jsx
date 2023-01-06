/* eslint-disable react/no-unescaped-entities */
import styles from "../../styles/forgot.module.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";
import CircledIconBtn from "../../components/Buttons/CircledIconBtn";
import LoginInput from "../../components/Inputs/LoginInput";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const forgotHandler = () => {};
  const emailValidation = Yup.object({
    email: Yup.string()
      .required(
        "You'll need this when you login and if you ever need to reset your password."
      )
      .email("Please Enter a valid email address"),
  });

  return (
    <>
      <Header />
      <div className={styles.forgot}>
        <div>
          <div className={styles.forgot__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              Forgot Your Password ? <Link href="/">Login Instead</Link>
            </span>
          </div>

          <Formik
            enableReinitialize
            validationSchema={emailValidation}
            initialValues={{ email }}
            onSubmit={() => forgotHandler()}
          >
            {(form) => (
              <Form method="post" action="/api/auth/signin/email">
                <LoginInput
                  type="text"
                  name="email"
                  icon="email"
                  placeholder="Enter Your Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <CircledIconBtn type="submit" text="Sign in" />
                {error && <span className={styles.error}>{error}</span>}
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Forgot;
