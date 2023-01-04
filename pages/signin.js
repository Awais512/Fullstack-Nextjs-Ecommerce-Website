/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
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

const initialValues = {
  login_email: "",
  login_password: "",
  full_name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Signin = ({ providers }) => {
  const [user, setUser] = useState(initialValues);

  const {
    login_email,
    login_password,
    name,
    email,
    password,
    confirm_password,
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

  console.log(user);

  return (
    <>
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
