/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Image from "next/image";
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
import facebook from "../public/images/facebook.png";
import google from "../public/images/google.png";
import auth0 from "../public/images/auth0.png";
import github from "../public/images/github.png";
import twitter from "../public/images/twitter (legacy).png";

const initialValues = {
  login_email: "",
  login_password: "",
};

const Signin = ({ providers }) => {
  console.log(providers);
  const [user, setUser] = useState(initialValues);

  const { login_email, login_password } = user;

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
