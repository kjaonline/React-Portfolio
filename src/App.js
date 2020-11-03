import './main.scss'

import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'
import Container from './layout/container/Container'

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Container />
        <Footer />
    </div>
    </Router>
  );
}

export default App;
