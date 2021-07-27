import { Navbar } from './components/Navbar';
import { Divisor } from './components/Divisor';
import { Header, HowWeWork, Materials, Assign, Footer, Rights } from './sections';

function App() {
  return (
      <div className="App">
        <Navbar/>
        <Header/>
        <Divisor/>
        <HowWeWork/>
        <Divisor/>
        <Materials/>
        <Divisor/>
        <Assign/>
        <Divisor/>
        <Footer/>
        <Rights/>
      </div>
  );
}

export default App;
