import { Check } from "../function/check";
import Image from 'next/image';
import { check_day } from "@/function/check_day";

export const ForecastItem = ({ data, icon ,semana}) => {
 
  return (
    
      <div className='flex flex-col items-center justify-center  gap-[20px]  backdrop-brightness-125 bg-white/30 backdrop-opacity-0 h-full p-4  rounded-3xl '>
        <p className="font-sans text-white text-2xl">{check_day(semana)}</p>
        <Image
          src={Check(icon)}
          alt="logo"
          width={100}
          height={100}
        />
        <p className='font-sans text-white text-2xl'>{Math.trunc(data)}&deg;C</p>
      </div>
    
  );
};
