import Carousel from '../app/components/Carousel';
import Footer  from './components/Footer';
import Mosaique from './components/Mosaique';
import Question from './components/Question';
import Main from './components/Main';

export default function Home() {
  return (
    <main className="flex justify-center flex-col overflow-x-hidden">
      <Main />
      <Carousel />  
      <img src="./divider2.png" className='mx-auto my-12 w-full max-w-[800px] h-20 object-contain' alt="" />
      <Mosaique />
      <img src="./divider2.png" className='mx-auto my-12 w-full max-w-[800px] h-20 object-contain' alt="" />
      <Question/>
    
      <Footer />
    </main>
     
  )
}