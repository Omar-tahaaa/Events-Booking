import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Auth.module.css";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../../firebase.config";
import { ToastContainer, toast } from "react-toastify";
import { Formik, ErrorMessage, Field, Form } from "formik";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const submit = async (values) => {
    try {
      setIsLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      values.email = values.password = "";
      if (userCredential) {
        setErr("");
        navigate("/events");
      }
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        setErr("Invalid Credential");
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
          <span>Login</span>
        </div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validate={(values) => {
            const errors = {};
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
            return errors;
          }}
          onSubmit={(values) => {
            values && submit(values);
          }}
        >
          <Form className={styles.form}>
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
            {err && <p>{err}</p>}
            <div className={styles.pass}>
              <a>Forgot password?</a>
            </div>
            <div className={`${styles.row} ${styles.button}`}>
              <input
                type="submit"
                value={isLoading ? "Loginig" : "Login"}
                disabled={isLoading}
              />
            </div>
            {!isLoading && (
              <div className={styles.signupLink}>
                Not a member? <Link to="/signup">Signup now</Link>
              </div>
            )}
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Login;
