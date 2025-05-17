import styles from "./Auth.module.css";

import { FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";

import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../../firebase.config";

import { toast, ToastContainer } from "react-toastify";

function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const submit = async (values) => {
    try {
      setIsLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      values.userName =
        values.email =
        values.password =
        values.confirmPassword =
          "";
      if (userCredential) {
        setErr("");
        navigate("/login");
      }
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErr("There already exists an account with the given email address");
      } else if (error.code === "auth/weak-password") {
        setErr("Password should be at least 6 characters");
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={styles.login}>
      <ToastContainer />
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <span>Signup</span>
        </div>
        <Formik
          initialValues={{
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.userName) {
              errors.userName = "Required";
            }

            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            if (!values.password) {
              errors.password = "Required";
            }
            if (!values.confirmPassword) {
              errors.confirmPassword = "Required";
            }
            if (values.password !== values.confirmPassword) {
              errors.confirmPassword = "password doesn't match";
            }
            return errors;
          }}
          onSubmit={(values) => {
            values && submit(values);
          }}
        >
          <Form className={styles.form}>
            <div className={styles.row}>
              <FaUser />
              <Field type="text" name="userName" placeholder="Username" />
            </div>
            <ErrorMessage name="userName" component="p" />
            <div className={styles.row}>
              <MdEmail />
              <Field type="text" name="email" placeholder="Email" />
            </div>
            <ErrorMessage name="email" component="p" />
            <div className={styles.row}>
              <FaLock />
              <Field type="password" name="password" placeholder="Password" />
            </div>
            <ErrorMessage name="password" component="p" />
            <div className={styles.row}>
              <FaLock />
              <Field
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
              />
            </div>
            <ErrorMessage name="confirmPassword" component="p" />
            {err && <p>{err}</p>}
            <div className={`${styles.row} ${styles.button}`}>
              <input
                type="submit"
                value={isLoading ? "siginig" : "SignUp"}
                disabled={isLoading}
              />
            </div>
            {!isLoading && (
              <div className={styles.signupLink}>
                Already have an account? <Link to="/Login">Login now</Link>
              </div>
            )}
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default SignUp;
