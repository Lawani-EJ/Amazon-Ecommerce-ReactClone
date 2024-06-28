import './App.css';
import Header from './components/Header';
import  Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Sliders from './components/Sliders';
import Sliders2 from './components/Sliders2';
import Cards2 from './components/cards2';


function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Carousel/>
      <Cards/>
      <Sliders/>
      <Sliders2/>
      <Cards2/>
    </div>
  );
}

export default App;
