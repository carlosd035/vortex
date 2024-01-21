export function check_day(day) {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Verifica se day está dentro do intervalo de 0 a 6
    if (day >= 0 && day <= 6) {
        return daysOfWeek[day];
    } else {
        return 'Invalid day';
    }
}
