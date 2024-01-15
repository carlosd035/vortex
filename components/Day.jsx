import Image from 'next/image'
import { Check } from '../function/check'
import { ImArrowDown, ImArrowUp } from "react-icons/im";



export const Day = ({ data }) => {
    return (
        <div className='flex mt-[50px] p-[20px] bg-red-500 gap-[110px]  w-[60%] m-auto'>

            <div>
                <Image
                    src={Check(data.weather[0].icon)}
                    alt="logo"
                    width={200}
                    height={200}
                />
            </div>
            <ImArrowUp size={45} color='blue' />
            <ImArrowDown size={45} color='yellow' />
            <div>
                <p className='font-sans text-white font-black text-6xl'>{Math.trunc(data.main.temp)}&deg;C</p>
            </div>


            <p className='ml-auto'>|</p>

        </div >


    )
}