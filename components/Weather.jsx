import axios from 'axios';
import { useEffect, useState } from 'react';
/* import { BsSearch } from 'react-icons/bs';
*/
import { useMouse } from '../function/useMouse';
/*   relative path -----function/useMouse.jsx */

export const Weather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(false);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=${process.env.NEXT_PUBLIC_API_KEY}`;

    const fetchWeather = (e) => {
        getCursor();
        e.preventDefault();
        setLoading(true);

        axios.get(url).then((response) => {
            setWeather(response.data);
            console.log(response.data);
        });
        setCity('');
        setLoading(false);
    };

    const{ x, y } = useMouse();








return (
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
            </button>
        </form>
        <p>{x}-----{y}</p>
   </div>
)
}
