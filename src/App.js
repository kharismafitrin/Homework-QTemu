import logo from "./logo.svg";
// import './App.css';
import MainContentComponent from "./components/templates/MainContentComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/templates/HeaderFunctionComponent";
function App() {
  return (
    <div>
      <HeaderComponent />
      <MainContentComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
