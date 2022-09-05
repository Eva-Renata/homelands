import { Layout } from "../../App/Layout";
import styles from "./Forside.module.scss";

export const Forside = () => {
  return (
    <Layout
      title="Velkommen til Homelands"
      description="Homeland presenterer den bedste huse og lejligheder til dig"
      className={styles.forsidewrapper}
    >
      <h1>Forside</h1>
    </Layout>
  );
};
