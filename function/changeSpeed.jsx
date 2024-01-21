export function changeSpeed(wind_speed) {
    const num = wind_speed * 3.6;
    return (
        (Math.round(num * 100) / 100).toFixed(2) 
    )
}

