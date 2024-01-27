import { changeSpeed } from "./changeSpeed";
import { request } from "./request";

export async function forecast_2(dataPromise) {
    try {
        // Aguarde a resolução da promessa
        const jsonData = await dataPromise;

        // Extrair arrays usando map

        const temperaturas = jsonData.list.map(previsao => previsao.main.temp);
        const icon = jsonData.list.map(previsao => previsao.weather[0].icon);

        const numeros = request() - 1; // comer no array no posicao numeros

        const medias_temp = [];
        const icon_2 = [];
        for (let i = numeros; i < temperaturas.length ; i += 8) {
            let grupo = temperaturas.slice(i, i + 8);
            let grupo_2 = icon.slice(i, i + 8);
    
            if (grupo.length<8){
                break
            }

            icon_2.push(grupo_2[5]); 
            medias_temp.push(grupo[5]);
            /*   let media = grupo.reduce((acc, val) => acc + val, 0) / grupo.length; */   /* dava a temperatura media dos request todos do dia  */

        }
        // Retornar os arrays resultantes
        return {
            medias_temp,
            icon_2,
        };

    } catch (error) {
        // Lidar com erros, se houver
        console.error("Erro ao processar dados:", error);
        throw error;
    }
}

