import styles from "./SignIn.module.css";
import { useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";
import { Context } from "../../ContextProvider";
import { signInWithEmailAndPassword } from "firebase/auth";

export const SignIn = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const { setUsername } = useContext(Context);

  const onLogin = async (
    event: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    await signInWithEmailAndPassword(auth, login, password);
    const user = { login, password };
    setUsername(login);
    navigate("/home");
  };

  return (
    <>
      <div className={styles.container}>
        <p className={styles.header}>
          Proszę zaloguj się żeby korzystać z aplikacji
        </p>
        <form className={styles.form}>
          <div className={styles.inputs}>
            <input
              type="text"
              name="login"
              placeholder="Type login"
              onChange={(event) => setLogin(event.target.value)}
            />
            <input
              type="password"
              name="Password"
              placeholder="Type password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="button" onClick={onLogin}>
            Zaloguj
          </button>
          {/* <button
            type="button"
            onClick={() => {
              navigate("/registration");
            }}
          >
            Przejdź do rejestracji
          </button> */}
        </form>
      </div>
    </>
  );
};
