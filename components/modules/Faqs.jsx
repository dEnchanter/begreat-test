import React from 'react'
import FAQItem from './FAQItem'
import { Button } from '../styles/Button'
import { Container } from '../styles/Container'
import { useTheme } from "next-themes";
import { useRouter } from 'next/router';



const Faqs = () => {
  const { theme, setTheme } = useTheme();
  const router =useRouter();
  
    const faqs = [
    {
      question: 'What does Be-finance do?',
      answer: 'I dont know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat',
    },
    {
      question: 'How do you Pay for Pricing Plan?',
      answer: 'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
      question: 'How does Be-finance work?',
      answer: 'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },

    {
      question: 'How can I upgrade From my current plan?',
      answer: 'Because theyre so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat',
    },

];
  return (
       

   <div id='faqs'> 
     <img className='h-8 absolute mt-[23rem] lg:left-[23rem] 2xl:left-[45rem] hidden lg:flex'  src='./images/homepage/faqstar.png' alt=' ' />
       <div  className={theme=="light"?"bg-[#FFFCFB] lg:mt-162  pb-20":"faqbg lg:mt-16  pb-20"}> 
         <Container className=''> 
         <div className=' md:flex lg:px-10 justify-between pt-16  '> 
           <div className='md:w-[30%] w-fit mx-auto md:mt-4  text-center md:text-start '> 
                <h1 className='font-bold text-2xl '> Frequently asked <br/> Questions </h1>
                <p className='lg:text-sm text-base mt-2 sm:w-[70%] sm:mx-auto md:w-full lg:mx-0'> Can’t find the answer you’re looking for? Reach out to our customer support team. </p>
                <img  className='w-[10rem] mx-auto md:ml-6 md:mt-6 mt-8' src='./images/homepage/faqs.png' alt='faqs'/>
            </div>


            <div className=' md:w-[25rem] lg:w-[30rem] w-fit mx-auto  '> 
                {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}


            </div>
            
         </div>
       
       </Container>
    </div>

    {/* <div  className={theme=="light"?"bg-[#FEF3F2]":"worksbg mt-20"}>  */}
    <div className='divebg'>
        <Container> 
             <img className='h-[10rem] absolute mt-[2rem] lg:left-[10rem] 2xl:left-[20rem] hidden xl:flex' src='./images/homepage/bigether.png' alt=' ' />
             <img className='h-[10rem] absolute mt-[6rem] lg:right-[7rem] 2xl:right-[14rem] hidden xl:flex' src='./images/homepage/biglite.png' alt=' ' />
                  <div className='text-center text-gray-300 font-bold text-xl md:text-2xl pb-20 pt-14 mt-20 mb-20'>
            <h1> Ready to dive in? </h1>
            <h1> Start with a plan today. </h1> 
            <Button onClick={() => router.push("/register")} className='w-fit mx-auto hover:cursor-pointer mt-8 py-2 border-0 text-xs font-light text-white bg-gradient-to-r from-[#D32652] to-[#8466E1]'> Get Started </Button>
            </div>
        </Container>
    </div>
    </div>
  
  )
}

export default Faqs