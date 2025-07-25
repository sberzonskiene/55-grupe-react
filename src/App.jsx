import { Main } from "./components/Main";
import { Title } from "./components/Title";
import { Calc } from "./components/Calc";

export function App() {
  return (
    <>
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
    </>
  );
}

//