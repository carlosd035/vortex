import axios from 'axios';
import { useState } from 'react';
import Spinner from './Spinner';
import { Day } from './Day';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Next } from './Next';
/* import { useMouse } from '../function/useMouse'; */



export const Tempo = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(false);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`;

    const fetchWeather = (e) => {
        e.preventDefault();
        setLoading(true);

        axios.get(url).then((response) => {
            setWeather(response.data);
        });
        setCity('');
        setLoading(false);
    };


    if (loading) {
        return <Spinner />
    }
    else {
        return (
            <div className='flex flex-col p-[50px]'>
                <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 px-4 text-white z-10'>
                    <form
                        onSubmit={fetchWeather}
                        className='flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl'>
                        <div>
                            <input
                                onChange={(e) => setCity(e.target.value)}
                                className='bg-transparent border-none text-white focus:outline-none text-2xl'
                                type='text'
                                placeholder='Search city'
                            />
                        </div>
                        <button onClick={fetchWeather}>
                            <FaMagnifyingGlass />
                        </button>
                    </form>
                </div>
                {weather.main && <Day data={weather} />}

                {weather.main && <Next city={weather.name}/>}
            </div>
        )
    }

}

