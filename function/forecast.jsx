import { changeSpeed } from "./changeSpeed";

export async function forecast(dataPromise) {
    try {
        // Aguarde a resolução da promessa
        const jsonData = await dataPromise;

        // Extrair arrays usando map
        const horas = jsonData.list.map(previsao => previsao.dt_txt);
        const temperaturas = jsonData.list.map(previsao => previsao.main.temp);
        const humidades = jsonData.list.map(previsao => previsao.main.humidity);
        const velocidadesDoVento = jsonData.list.map(previsao => previsao.wind.speed);


        // Exibir arrays resultantes no console
       /*  console.log("Horas:", horas);
        console.log("Temperaturas:", temperaturas);
        console.log("Humidades:", humidades);
        console.log("Velocidades do Vento:", velocidadesDoVento); */

        const horass = horas.map(item => {
            const um = item.split(' ');
            const dois = um[1].split(':');
            const tres = dois[0];
            return tres;
        });

     const vento =  velocidadesDoVento.map(item => {
            return changeSpeed(item);
        }); 

        // Retornar os arrays resultantes
        return {
            horass,
            temperaturas,
            humidades,
            vento,
        };
    } catch (error) {
        // Lidar com erros, se houver
        console.error("Erro ao processar dados:", error);
        throw error;
    }
}

