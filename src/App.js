import Navbar from "./components/NavBar/navbar";
import Introduction from './components/Introduction/main';
import Skills from './components/Skills/skill';
import Works from './components/Works/work';
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Introduction/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
