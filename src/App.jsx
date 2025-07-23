import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Title } from "./components/Title";
import { Calc } from "./components/Calc";

export function App() {
  return (
    <>
      <Header />
      <Main>
        <Title text="Labas rytas!!!" desc="" />
        <div>🟨🟩🟥</div>

        <Calc a={7} b={5} />
        <Calc a={55} b={77} />
        <Calc a={-12} b={-57} />

        <Title text="Apie mus" />
        <Title text="Paslaugos" desc="Teikiamu paslaugu aprasymas" />
        <Title text="Kontaktai" desc="Pasiekiami tik prisijungusiems vartotojams👀" />
      </Main>
      <Footer />
    </>
  );
}

