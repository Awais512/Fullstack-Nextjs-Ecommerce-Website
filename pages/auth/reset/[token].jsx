/* eslint-disable react/no-unescaped-entities */
import styles from "../../../styles/forgot.module.scss";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { BiLeftArrowAlt } from "react-icons/bi";
import CircledIconBtn from "../../../components/Buttons/CircledIconBtn";
import LoginInput from "../../../components/Inputs/LoginInput";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import DotLoader from "../../../components/Loaders/DotLoader";
import { signIn } from "next-auth/react";
import jwt from "jsonwebtoken";
import { RESET_TOKEN_SECRET } from "../../../constants";
import Router from "next/router";
import { getSession } from "next-auth/react";

const Reset = ({ user_id }) => {
  console.log(user_id);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const resetHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.put("/api/auth/reset", {
        user_id,
        password,
      });
      let options = {
        redirect: false,
        email: data.email,
        password: password,
      };
      await signIn("credentials", options);
      window.location.reload(true);
    } catch (error) {
      setLoading(false);
      setSuccess("");
      setError(error.response.data.message);
    }
  };
  const passwordValidation = Yup.object({
    password: Yup.string()
      .required("Please Enter a New Password")
      .min(6, "Password must be atleast 6 characters")
      .max(36, "Password can't be more than 36 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Your Password")
      .oneOf([Yup.ref("password")], "Password must match"),
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
              Reset Your Password ?{" "}
              <button className={styles.btn_outlined} onClick={() => signIn()}>
                Sign In
              </button>
            </span>
          </div>

          <Formik
            enableReinitialize
            validationSchema={passwordValidation}
            initialValues={{ password, confirmPassword }}
            onSubmit={() => resetHandler()}
          >
            {(form) => (
              <Form method="post" action="/api/auth/signin/email">
                <LoginInput
                  type="password"
                  name="password"
                  icon="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <LoginInput
                  type="password"
                  name="confirmPassword"
                  icon="password"
                  placeholder="Re-type Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <CircledIconBtn type="submit" text="Submit" />
                <div style={{ marginTop: "10px" }}>
                  {error && <span className={styles.error}>{error}</span>}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  const { query, req } = context;
  const session = await getSession({ req });
  if (session) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
  const token = query.token;
  const user_id = jwt.verify(token, RESET_TOKEN_SECRET);
  return {
    props: {
      user_id: user_id.id,
    },
  };
}

export default Reset;
