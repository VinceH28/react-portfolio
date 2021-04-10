import React from 'react';
import About from './Components/about';
import Contact from './Components/contact';
import Navbar from './Components/navbar';
import Project from './Components/project';
import Form from './Components/form';
import Portfolio from './Components/portfolio';
import GlobalStyles from './styles/GlobalStyles';
import Footer from "./components/footer";


function App() {
  return (
    <div className="App container">
      < GlobalStyles />
      < Navbar />
      < About />
      < Form />
      < Project />
      < Portfolio />
      < Contact />
    </div>
  );
}

export default App;
