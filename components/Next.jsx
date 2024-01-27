import { useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { forecast_2 } from '../function/forecast_2';
import axios from "axios";
import { useState } from "react";
import { ForecastItem } from "./ForecastItem";


export const Next = ({ city }) => {

    const [Forecast, setForecast] = useState({
        medias_temp: [],
        icon_2: [],
    }); /* use for save data after function 'forcast' */

    const dias = [];
    const day_week = new Date();
    let day1 = day_week.getDay();

    for (let i = 0; i < 4; i++) {
        if (day1 === 6) {
            dias.push(6)
            day1 = 0;
        }
        else {
            dias.push(day1);
            day1++;
        }
    }



    useEffect(() => {
        const fetchData = async () => {
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`;
            try {
                const response = await axios.get(url);
                const forcastData = await forecast_2(response.data); // Wait for the promise to resolve
                setForecast(forcastData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();

    }, [city]);


    return (
        <div className='w-[70%]  mt-[150px] m-auto'>
            <div className="flex gap-4 justify-start items-center">
                <FaCalendarAlt
                    color="white"
                    size={20}
                />
                <p className='text-white font-mono text-xl'>4-DAY FORECASTS</p>
            </div>
            <div className="flex  py-8  justify-between items-center h-[300px]">
                {Forecast.medias_temp.map((item, index) => (
                    <ForecastItem key={index} data={item} icon={Forecast.icon_2[index]} semana={dias[index]} />
                ))}
            </div>
        </div>
    )
}
