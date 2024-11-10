import './App.css';
import Navbar from './Component/Navbar';
import Landpg from './Component/Landpg';
import Marqi from './Component/Marqi';
import Aboute from './Component/Aboute';
import Eyes from './Component/Eyes';
import Feature from './Component/Feature';
import Cards from './Component/Cards';
import Footer from './Component/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import Fun from './Component/Fun';




function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
   
    <div className=" text-white bg-zinc-800">
       <Navbar/>
       <Landpg/>
       <Marqi/>
       <Aboute/>
       <Eyes/>
       <Feature/>
       <Cards/>
       <Footer/> 
       {/* <Fun/> */}
       

    </div>
     
  );
}

export default App;
