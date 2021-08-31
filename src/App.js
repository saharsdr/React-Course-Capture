// Import GlobalStyle
import GlobalStyle from "./components/GlobalStyle";

// import "./css/style.css";
//  Import Pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
