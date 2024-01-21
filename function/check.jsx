export function Check(icon) {
    const sun = ["01d","01n"];
    const cloudy = ["02d","02n"];
    const cloud = ["03d","03n","04n","04d"];
    const rain = ["09d","09n","10d","10n"];
    const storm = ["11d","11n"];
    const snow = ["13d","13n"];
    
    
    if (sun.includes(icon)) {
        return "/weather/sun.png"
    }
    if (cloudy.includes(icon)) {
        return "/weather/cloudy.png"
    }
   if (cloud.includes(icon)) {
        return "/weather/cloud.png"
    }
    if (rain.includes(icon)) {
        return "/weather/rain.png"
    }
    if (storm.includes(icon)) {
        return "/weather/storm.png"
    }
    if (snow.includes(icon)) {
        return "/weather/snow.png"
    }
    else {
        return "/weather/cloud.png"
    }
}
