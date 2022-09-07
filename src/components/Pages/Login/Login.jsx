import { Layout } from "../../App/Layout";
import styles from "./Login.module.scss";
import { useForm } from "react-hook-form";
import { useAuth } from "../../App/Auth";
import axios from "axios";

export const Login = () => {
  // Destructer vars fra useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Destructer vars fra useAuth
  const { loginData, setLoginData } = useAuth();

  // Definerer funktion til at kalde api med form data
  const sendLoginRequest = async (data) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    const result = await axios.post(
      "https://api.mediehuset.net/token",
      formData
    );
    //console.log(result);
    handleSessionData(result.data);
  };

  // Definerer funktion til at håndtere form data til session storage
  const handleSessionData = (data) => {
    if (data) {
      sessionStorage.setItem("token", JSON.stringify(data));
      setLoginData(data);
    }
  };

  // Definerer funktion til log out
  const logOut = () => {
    sessionStorage.removeItem("token");
    setLoginData("");
  };

  return (
    <Layout
      title="Login"
      description="Side til login, logout og administration"
      className={styles.loginwrapper}
    >
      <section className={styles.Loginwrapper}>
        <h2>Login</h2>
        <p>Indtast dit brugernavn og adgangskode for at logge ind</p>

        {/* vis form kun hvis bruger er ikke logget ind */}
        {!loginData && !loginData.username ? (
          <form onSubmit={handleSubmit(sendLoginRequest)}>
            <input
              type="text"
              id="username"
              placeholder={"Brugernavn"}
              {...register("username", { required: true })}
            />

            {/* Vis hvis der er en fejl */}
            {errors.username && <span>Du skal indtaste dit brugernavn!</span>}

            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
              placeholder={"Adgangskode"}
            />
            {/* Vis meddelelse hvis der er en fejl */}
            {errors.password && <span>Du skal indtaste din adgangskode!</span>}
            <div className={styles.buttons}>
              <button>Login</button>
              <button>Annuller</button>
            </div>
          </form>
        ) : (
          // Vis logindata hvis bruger er logget ind
          <div className={styles.loginfeedback}>
            <p>Du er logget ind som {loginData.username}</p>
            <button onClick={logOut}>Log ud</button>
          </div>
        )}
      </section>
    </Layout>
  );
};
