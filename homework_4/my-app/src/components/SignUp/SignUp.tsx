import styles from "./SignUp.module.css";
import { useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";
import { Context } from "../../ContextProvider";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// interface RegisterProps {
//   registerEmail: string;
//   registerPassword: string;
// }

export const SignUp = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const navigate = useNavigate();
  const { setUsername } = useContext(Context);

  const onRegister = async (
    event: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);

    await signInWithEmailAndPassword(auth, registerEmail, registerPassword);

    const user = { registerEmail, registerPassword };
    setUsername(registerEmail);
    navigate("/signin");
  };

  return (
    <div className={styles.container}>
      <p className={styles.header}>
        Proszę zarejestruj się, żeby korzystać z aplikacji
      </p>
      <form className={styles.form}>
        <div className={styles.inputs}>
          <input
            type="text"
            name="login"
            placeholder="Type login"
            onChange={(event) => setRegisterEmail(event.target.value)}
          />
          <input
            type="password"
            name="Password"
            placeholder="Type password"
            onChange={(event) => setRegisterPassword(event.target.value)}
          />
        </div>
        <button type="button" onClick={onRegister}>
          Zarejestruj
        </button>
      </form>
    </div>
  );
};
