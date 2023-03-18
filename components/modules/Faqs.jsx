import React from 'react'
import { Button } from '../styles/Button'
import { Container } from '../styles/Container'


const Faqs = () => {
  return (
   <Container className=''> 
         <div className=' lg:flex lg:px-10 justify-between '> 
           <div className='lg:w-[30%] w-fit mx-auto  lg:mx-0 text-center lg:text-start '> 
                <h1 className='font-bold text-2xl '> Frequently asked <br/> questions </h1>
                <p className='text-sm'> Can’t find the answer you’re looking for? Reach out to our customer support team. </p>
                <img  className='w-[10rem] mx-auto lg:mx-0 lg:mt-16 mt-8' src='./images/homepage/faqs.png' alt='faqs'/>
            </div>


            <div className=' lg:w-[35rem] w-fit mx-auto lg:mx-0 '> 
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
                </div>

                 <div className='mt-4'>
                    <h1 className='font-bold text-base'> What does Be-finance do? </h1>
                    <p className='text-sm'> I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. </p>
                </div>


            </div>
            
         </div>


         <div className='text-center font-bold text-3xl mt-20 mb-20'>
            <h1> Ready to dive in? </h1>
            <h1> Start with a plan today. </h1> 
            <Button className='w-fit mx-auto mt-8 py-2'> Get Started </Button>
        </div>
   </Container>
  )
}

export default Faqs