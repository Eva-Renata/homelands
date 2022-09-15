import styles from "./App.module.scss";
import "./App.module.scss";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Partials/Header/Header";
import { Main } from "./components/Partials/Main/Main";
import { Footer } from "./components/Partials/Footer/Footer";
import { AppRouter } from "./components/App/Router";
import { SearchWrapper } from "./components/Partials/Search/SearchData";

function App() {
  return (
    <div className={styles.appwrapper}>
      <BrowserRouter>
        <SearchWrapper>
          <Header />
          <Main>
            <AppRouter />
          </Main>
          <Footer />
        </SearchWrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
