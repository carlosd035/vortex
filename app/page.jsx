'use client'
import { Nav } from '@/components/Nav';
import { Fade } from "react-awesome-reveal";
import {Weather} from '@/components/Weather';


const page = () => {

  return (
    <>
      <div className=" bg-[url('/banner.png')] bg-no-repeat bg-cover bg-center h-[90vh] bg-fixed">
        <Nav />
        <Fade direction='right' triggerOnce="true">
          <div className='flex flex-col justify-center items-end gap-[40px] p-[50px] h-[70vh]'>
            <h1 className='font-sans text-white font-black text-8xl w-[42%]  text-end'>Climate at your Fingertips</h1>
            <p className='font-mono text-white text-2xl'>Plan your day with our weather forecast</p>
          </div>
        </Fade>
      </div>
      <div className ="bg-[url('/banner_weather.png')] bg-no-repeat bg-cover bg-center h-[90vh] bg-fixed">
        <Weather /> 
      </div>
    </>
  )
}
export default page