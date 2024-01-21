import Image from 'next/image'
import { Check } from '../function/check'
import { changeSpeed } from '../function/changeSpeed'
import { ImArrowDown, ImArrowUp } from "react-icons/im";
import { Graph } from './Graph';



export const Day = ({ data }) => {
    return (
        <div className='flex mt-[50px] p-[20px]  gap-[110px]  w-[70%] m-auto '>

            <div className='flex flex-col items-center justify-center  gap-[20px]'>
                <Image
                    src={Check(data.weather[0].icon)}
                    alt="logo"
                    width={200}
                    height={200}
                />
                <div className='flex flex-col font-sans font-medium text-white text-2xl'>
                    <p className=''>Lat: <span className='font-normal'>{data.coord.lat}</span></p>
                    <p className=''>Lon: <span className='font-normal'>{data.coord.lon}</span></p>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center  '>
                <div className='flex flex-col grow gap-[20px] items-center justify-center '>
                    <p className='font-sans text-white font-black text-6xl'>{Math.trunc(data.main.temp)}&deg;C</p>
                    <div className='flex justify-center items-center gap-[5px]'>
                        <ImArrowUp size={25} color='yellow' />
                        <p className='font-sans text-white text-2xl'>{Math.trunc(data.main.temp_max)}&deg;C</p>
                        <ImArrowDown size={25} color='blue' />
                        <p className='font-sans text-white text-2xl'>{Math.trunc(data.main.temp_min)}&deg;C</p>
                    </div>
                </div>
                <div className='flex justify-between items-end w-full  mt-auto'>
                    <div className="flex flex-col items-center justify-start  ">
                        <Image
                            src="/weather/wind.png"
                            alt="logo"
                            width={50}
                            height={50}
                        />
                        <p className='font-sans text-white text-1xl'>{changeSpeed(data.wind.speed) + "km/h"}</p>

                    </div>
                    <div className="flex flex-col items-center justify-end">
                        <Image
                            src="/weather/p_rain.png"
                            alt="logo"
                            width={50}
                            height={50}
                        />
                        <p className='font-sans text-white text-1xl'>{data.main.humidity}%</p>

                    </div>
                </div>
            </div>
          
            <Graph dados={data} />
         
        </div >


    )
}