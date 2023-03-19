import React from 'react'
import FAQItem from './FAQItem'
import { Button } from '../styles/Button'
import { Container } from '../styles/Container'


const Faqs = () => {
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
   <Container className=''> 
         <div className=' md:flex lg:px-10 justify-between '> 
           <div className='md:w-[30%] w-fit mx-auto md:mt-4  text-center  '> 
                <h1 className='font-bold text-2xl '> Frequently asked <br/> Questions </h1>
                <p className='lg:text-sm text-base mt-2 sm:w-[70%] sm:mx-auto md:w-full lg:mx-0'> Can’t find the answer you’re looking for? Reach out to our customer support team. </p>
                <img  className='w-[10rem] mx-auto  md:mt-6 mt-8' src='./images/homepage/faqs.png' alt='faqs'/>
            </div>


            <div className=' md:w-[25rem] lg:w-[30rem] w-fit mx-auto  '> 
                {/* <div className='mt-4'>
                    <h1 className='font-bold text-base'> What does Be-finance do? </h1>
                    <p className='text-sm'> I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. </p>
                </div>

                 <div className='mt-4'>
                    <h1 className='font-bold text-base'> What does Be-finance do? </h1>
                    <p className='text-sm'> I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. </p>
                </div>

                 <div className='mt-4'>
                    <h1 className='font-bold text-base'> What does Be-finance do? </h1>
                    <p className='text-sm'> I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. </p>
                </div>

                 <div className='mt-4'>
                    <h1 className='font-bold text-base'> What does Be-finance do? </h1>
                    <p className='text-sm'> I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. </p>
                </div> */}

                {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}


            </div>
            
         </div>

 <img className='h-16 absolute mt-[3rem] lg:left-[16rem] 2xl:left-[30rem]'  src='./images/homepage/litecoin.png' alt=''/>
  <img className='h-20 absolute mt-[5rem] lg:right-[15rem] 2xl:right-[30rem] hidden lg:flex'  src='./images/homepage/red.png' alt=' ' />
   <img className='h-20 absolute mt-[10rem] lg:left-[25rem] 2xl:left-[38rem] hidden lg:flex'  src='./images/homepage/green.png' alt=' ' />
         <div className='text-center font-bold text-xl md:text-2xl  mt-20 mb-20'>
            <h1> Ready to dive in? </h1>
            <h1> Start with a plan today. </h1> 
            <Button className='w-fit mx-auto mt-8 py-2'> Get Started </Button>
        </div>
   </Container>
  )
}

export default Faqs