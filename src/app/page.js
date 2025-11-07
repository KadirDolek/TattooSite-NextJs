import Carousel from '../app/components/Carousel';
import Footer  from './components/Footer';
import Mosaique from './components/Mosaique';
import Question from './components/Question';
import Main from './components/Main';

 


export default function Home() {
  return (
    <main className="flex justify-center flex-col">
      <Main />
      <Carousel />  
      {/* <img src="./divider.png" className=' mx-auto my-10' alt="" /> */}
      <Mosaique />
      <Question/>
      <Footer />
    </main>
     
  )
}