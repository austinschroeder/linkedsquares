import './assets/styles/App.css'

import Navbar from './components/Navbar'
import TopAdvert from './components/TopAdvert'
import Footer from './components/Footer'
import CardTop from './components/CardTop';
import CardTwo from './components/CardTwo';
import CardThree from './components/CardThree';

function App() {
  return (
    <div>
      <TopAdvert />
      <Navbar />
      <CardTop />
      <CardTwo />
      <CardThree />
      <Footer />

    </div>
  );
}

export default App;
