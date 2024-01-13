import axios from 'axios';
import { useEffect, useState } from 'react';
/* import { BsSearch } from 'react-icons/bs';
*/
function useMouse() {
    const [cursor, setCursor] = useState({ x: null, y: null });

    useEffect(() => {
        function handler(e) {
            setCursor({ x: e.clientX, y: e.clientY });
        }

        document.addEventListener('mousemove', handler);

        return () => {
            document.removeEventListener('mousemove', handler);
        };
    }, []); // Empty dependency array to ensure the effect runs only once when the component mounts

    return cursor;
}

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
