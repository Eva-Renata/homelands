import { Layout } from "../../App/Layout";
import styles from "./Login.module.scss";

export const Login = () => {
  return (
    <Layout
      title="Login"
      description="Side til login, logout og administration"
      className={styles.loginwrapper}
    >
      <h1>Login</h1>
    </Layout>
  );
};
