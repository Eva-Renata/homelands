import styles from "./App.module.scss";
import "./App.module.scss";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Partials/Header/Header";
import { Main } from "./components/Partials/Main/Main";
import { Footer } from "./components/Partials/Footer/Footer";

function App() {
  return (
    <div className={styles.appwrapper}>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
