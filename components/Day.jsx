import Image from 'next/image'
import { Check } from '../function/check'
import { changeSpeed } from '../function/changeSpeed'
import { ImArrowDown, ImArrowUp } from "react-icons/im";



export const Day = ({ data }) => {
    return (
        <div className='flex mt-[50px] p-[20px] bg-red-500 items-stretch  gap-[110px]  w-[60%] m-auto'>

            <div className='flex flex-col items-center justify-center bg-amber-900 gap-[20px]'>
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

            <div className='flex flex-col items-center gap-[10px] bg-green-500 '>
                <p className='font-sans text-white font-black text-6xl'>{Math.trunc(data.main.temp)}&deg;C</p>
                <div className='flex justify-center items-center gap-[5px]'>
                    <ImArrowDown size={25} color='blue' />
                    <p className='font-sans text-white text-2xl'>{Math.trunc(data.main.temp_max)}&deg;C</p>
                    <ImArrowUp size={25} color='yellow' />
                    <p className='font-sans text-white text-2xl'>{Math.trunc(data.main.temp_min)}&deg;C</p>
                </div>
                <div className='flex justify-between items-center w-full bg-slate-300 grow'>
                    <div className="flex flex-col items-start justify-start  ">
                        <Image
                            src="/weather/wind.png"
                            alt="logo"
                            width={50}
                            height={50}
                        />
                        <p className='font-sans text-white text-2xl'>{changeSpeed(data.wind.speed)}</p>

                    </div>
                    <div className="flex flex-col items-start justify-start  ">
                        <Image
                            src="/weather/p_rain.png"
                            alt="logo"
                            width={50}
                            height={50}
                        />
                        <p className='font-sans text-white text-2xl'>{data.main.temp_max}</p>

                    </div>
                </div>

            </div>

            <div className='ml-auto bg-yellow-400 flex items-center'>
                <p>|</p>
            </div>

        </div >


    )
}