import './assets/styles/App.css'

import Navbar from './components/Navbar'
import TopAdvert from './components/TopAdvert'
import Footer from './components/Footer'
import CardTop from './components/CardTop';
import CardTwo from './components/CardTwo';

function App() {
  return (
    <div>
      <TopAdvert />
      <Navbar />
      <CardTop />
      <CardTwo />
      <Footer />

    </div>
  );
}

export default App;
