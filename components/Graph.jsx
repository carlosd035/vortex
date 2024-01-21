'use client';
import { useEffect, useState } from "react";
import { Chart } from "chart.js";
import axios from "axios";
import { request } from '../function/request';
import { forecast } from '../function/forecast';

export const Graph = ({ dados }) => {

  const [Temperature, setTemperature] = useState(true);
  const [Wind, setWind] = useState(false);       /* useState for buttons  */
  const [Humidity, setHumidity] = useState(false);
  const [Forecast, setForecast] = useState({
    horass: [],
    temperaturas: [],
    humidades: [],
    vento: [],

  }); /* use for save data after function 'forcast' */

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${dados.name}&units=metric&cnt=${request()}&appid=${process.env.NEXT_PUBLIC_API_KEY}`;

      try {
        const response = await axios.get(url);
        const forcastData = await forecast(response.data); // Wait for the promise to resolve
        setForecast(forcastData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

  }, [dados.name]);

  /* graph */



  useEffect(() => {

    const convertTo12HourFormat = (hour) => {
      const period = hour < 12 ? "AM" : "PM";
      return `${hour} ${period}`;
    };

    
    const ctx = document.getElementById('myChart').getContext('2d');
    if (window.myCharts !== undefined) {
      window.myCharts.destroy();
    }
    window.myCharts = new Chart(ctx, {
      type: 'line',
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              fontColor: "white",
              callback: function (value, index, values) {
                if (Temperature) {
                  return value + 'ºC';
                } else if (Humidity) {
                  return value + '%';
                } else if (Wind) {
                  return value + ' km/h';
                }
                return value;
              }
            }
          }],
          xAxes: [{
            ticks: {
              fontColor: "white",
              callback: function (value, index, values) {
                const hour = Forecast.horass[index];
                return convertTo12HourFormat(hour);
              }
            }
          }],
        },
        tooltips: {
          callbacks: {

            
            label: function (tooltipItem, data) {
              var label = data.datasets[tooltipItem.datasetIndex].label || '';
        
              if (label) {
                label += ': ';
              }
              label += Math.round(tooltipItem.yLabel * 100) / 100;
        
              // Append the appropriate unit to the tooltip value
              if (data.datasets[tooltipItem.datasetIndex].label === 'Temperature') {
                label += ' ºC';
              } else if (data.datasets[tooltipItem.datasetIndex].label === 'Humidity') {
                label += ' %';
              } else if (data.datasets[tooltipItem.datasetIndex].label === 'Wind') {
                label += ' km/h';
              }
              
              return label;
            }
          },
        },

      },
      data: {
        labels: Forecast.horass,
        datasets: [
          {
            data: Forecast.temperaturas,
            label: "Temperature",
            borderColor: "rgb(255, 205, 86)",
            backgroundColor: "rgb(255, 205, 86,0.5)",
            fill: true,
            hidden: !Temperature,
          },
          {
            data: Forecast.vento,
            label: "Wind",
            borderColor: "rgb(109, 253, 181)",
            backgroundColor: "rgb(109, 253, 181,0.5)",
            fill: true,
            hidden: !Wind,
          },
          {
            data: Forecast.humidades,
            label: "Humidity",
            borderColor: "rgb(75, 192, 192)",
            backgroundColor: "rgb(75, 192, 192,0.5)",
            fill: true,
            hidden: !Humidity,
          }
        ]
      },
    });
  }, [Temperature, Wind, Humidity, Forecast.horass, Forecast.temperaturas, Forecast.vento, Forecast.humidades]);



  /*  buttons */

  const toggleTemperature = () => {
    setTemperature(true);
    setWind(false);
    setHumidity(false);
  };

  const toggleWind = () => {
    setTemperature(false);
    setWind(true);
    setHumidity(false);
  };

  const toggleHumidity = () => {
    setTemperature(false);
    setWind(false);
    setHumidity(true);
  };

  return (
    <div className="flex gap-[50px] grow">
      <div className='border border-gray-200 rounded-xl h-fit w-full shadow-xl p-2 '>
        <canvas id='myChart'></canvas>
      </div>
      <div className="flex flex-col justify-center items-center gap-[5px]">
        <button className={`py-2 px-1  text-white hover:bg-zinc-500 rounded-lg w-full ${Temperature ? '  bg-zinc-500' : 'bg-neutral-700'}`} onClick={toggleTemperature}>
          Temperature
        </button>
        <button className={`py-2 px-1 700 text-white hover:bg-zinc-500 rounded-lg w-full ${Wind ? ' bg-zinc-500' : ' bg-neutral-700'}`} onClick={toggleWind}>
          Wind
        </button>
        <button className={`py-2 px-1 700 text-white hover:bg-zinc-500 rounded-lg w-full ${Humidity ? 'bg-zinc-500' : ' bg-neutral-700'}`} onClick={toggleHumidity}>
          Humidity
        </button>
      </div>
    </div>
  );
};
