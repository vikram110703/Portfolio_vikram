import { Navbar } from "./components/NavBar/Navbar";
import { Intro } from "./components/Intro";
import { Skills } from "./components/Skills/Skills";
import { Works } from "./components/Works/Works";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { ParticleComponent } from './ParticleComponent'



function App() {

  return (

    <div className="App"  >

      {ParticleComponent()}
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;
