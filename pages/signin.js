/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Router from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/signin.module.scss";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import LoginInput from "../components/Inputs/LoginInput";
import CircledIconBtn from "../components/Buttons/CircledIconBtn";
import { getProviders, signIn } from "next-auth/react";
import axios from "axios";
import DotLoader from "../components/Loaders/DotLoader";

const initialValues = {
  login_email: "",
  login_password: "",
  full_name: "",
  email: "",
  password: "",
  confirm_password: "",
  success: "",
  error: "",
  login_error: "",
};

const Signin = ({ providers }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(initialValues);

  const {
    login_email,
    login_password,
    name,
    email,
    password,
    confirm_password,
    success,
    error,
    login_error,
  } = user;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginValidation = Yup.object({
    login_email: Yup.string()
      .required("Email address is Required")
      .email("Please Enter a valid email address"),
    login_password: Yup.string().required("Please Enter a Password"),
  });

  const registerValidation = Yup.object({
    name: Yup.string()
      .required("What's is your name?")
      .min(2, "First name must be 2 and 16 characters")
      .max(16, "First name must be 2 and 16 characters")
      .matches(/^[aA-zZ]/, "Numbers and Special characters are not allowed."),
    email: Yup.string()
      .required(
        "You'll need this when you login and if you ever need to reset your password."
      )
      .email("Please Enter a valid email address"),
    password: Yup.string()
      .required(
        "Enter a combination of at least six numbers,letters and punctuation marks(such as ! and &)"
      )
      .min(6, "Password must be atleast 6 characters")
      .max(36, "Password can't be more than 36 characters"),
    confirm_password: Yup.string()
      .required("Confirm Your Password")
      .oneOf([Yup.ref("password")], "Password must match"),
  });

  const signUp = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("/api/auth/signup", {
        name,
        email,
        password,
      });
      setUser({ ...user, error: "", success: data.message });
      setLoading(false);
      setTimeout(async () => {
        let options = {
          redirect: false,
          email: email,
          password: password,
        };
        const res = await signIn("credentials", options);
        Router.push("/");
      }, 2000);
    } catch (error) {
      setLoading(false);
      setUser({ ...user, success: "", error: error.response.data.message });
      console.log(error);
    }
  };

  const signInHandler = async () => {
    setLoading(true);
    let options = {
      redirect: false,
      email: login_email,
      password: login_password,
    };
    const res = await signIn("credentials", options);
    setUser({ ...user, success: "", error: "" });
    setLoading(false);
    if (res?.error) {
      setLoading(false);
      setUser({ ...user, login_error: res?.error });
    } else {
      return Router.push("/");
    }
  };

  return (
    <>
      {loading && <DotLoader loading={loading} />}
      <Header />
      <div className={styles.login}>
        <div className={styles.login__container}>
          <div className={styles.login__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              We'd be happy to join us ! <Link href="/">Go store</Link>
            </span>
          </div>
          <div className={styles.login__form}>
            <h1>Sign in</h1>
            <p>Get access to one of the best Eshopping service in the world</p>
            <Formik
              enableReinitialize
              validationSchema={loginValidation}
              initialValues={{ login_email, login_password }}
              onSubmit={() => signInHandler()}
            >
              {(form) => (
                <Form>
                  <LoginInput
                    type="text"
                    name="login_email"
                    icon="email"
                    placeholder="Enter Your Email Address"
                    onChange={handleChange}
                  />
                  <LoginInput
                    type="password"
                    name="login_password"
                    icon="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                  <CircledIconBtn type="submit" text="Sign in" />
                  {login_error && (
                    <span className={styles.error}>{login_error}</span>
                  )}
                  <div className={styles.forgot}>
                    <Link href="/forgot">Forgot Password ?</Link>
                  </div>
                </Form>
              )}
            </Formik>
            <div className={styles.login__socials}>
              <span className={styles.or}>Or continue with</span>
              <div className={styles.login__socials_wrap}>
                {providers.map((provider, i) => (
                  <div key={provider.name}>
                    <button
                      className={styles.social__btn}
                      onClick={() => signIn(provider.id)}
                    >
                      <img src={`../images/${provider.name}.png`} alt="" />
                      Sign in with {provider.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.login__container}>
          <div className={styles.login__form}>
            <h1>Sign Up</h1>
            <p>Get access to one of the best Eshopping service in the world</p>
            <Formik
              enableReinitialize
              validationSchema={registerValidation}
              initialValues={{ email, name, password, confirm_password }}
              onSubmit={() => signUp()}
            >
              {(form) => (
                <Form>
                  <LoginInput
                    type="text"
                    name="name"
                    icon="user"
                    placeholder="Full Name"
                    onChange={handleChange}
                  />
                  <LoginInput
                    type="text"
                    name="email"
                    icon="email"
                    placeholder="Email Address"
                    onChange={handleChange}
                  />
                  <LoginInput
                    type="password"
                    name="password"
                    icon="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />

                  <LoginInput
                    type="password"
                    name="confirm_password"
                    icon="password"
                    placeholder="Re-type Password"
                    onChange={handleChange}
                  />
                  <CircledIconBtn type="submit" text="Sign Up" />
                </Form>
              )}
            </Formik>
            <div>
              {success && <span className={styles.success}>{success}</span>}
              {error && <span className={styles.error}>{error}</span>}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  const providers = Object.values(await getProviders());
  return {
    props: {
      providers,
    },
  };
}

export default Signin;
