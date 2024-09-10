import logo from "./logo.svg";
// import './App.css';
import NavbarComponent from "./components/NavbarComponent";
import MainContentComponent from "./components/MainContentComponent";
import FooterComponent from "./components/FooterComponent";
import FormLogin from "./components/FormLoginComponent";
import PokemonComponent from "./components/PokemonComponent";
import CurrencyComponent from "./components/CurrencyComponent";
function App() {
  return (
    <div>
      <CurrencyComponent />
      <NavbarComponent />
      <MainContentComponent />
      <FooterComponent />
      <FormLogin />
      <PokemonComponent />
    </div>
  );
}

export default App;
