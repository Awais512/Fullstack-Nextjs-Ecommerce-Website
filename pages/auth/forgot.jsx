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
import axios from "axios";
import DotLoader from "../../components/Loaders/DotLoader";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const forgotHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("/api/auth/forgot", { email });
      setError("");
      setSuccess(data.message);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setSuccess("");
      setError(error.response.data.message);
    }
  };
  const emailValidation = Yup.object({
    email: Yup.string()
      .required(
        "You'll need this when you login and if you ever need to reset your password."
      )
      .email("Please Enter a valid email address"),
  });

  return (
    <>
      {loading && <DotLoader loading={loading} />}
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
                <CircledIconBtn type="submit" text="Send Link" />
                {error && <span className={styles.error}>{error}</span>}
                {success && <span className={styles.success}>{success}</span>}
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
