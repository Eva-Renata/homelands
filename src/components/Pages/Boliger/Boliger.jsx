import { Layout } from "../../App/Layout";
import styles from "./Boliger.module.scss";

export const Boliger = () => {
  return (
    <Layout
      title="Boliger"
      description="Boliger til salg"
      className={styles.boligerwrapper}
    >
      <h1>Boliger til salg</h1>
    </Layout>
  );
};
