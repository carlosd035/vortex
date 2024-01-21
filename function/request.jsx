export function request() {
    const horas = ['3', '6', '9', '12', '15', '18', '21', '24'];
    const agora = new Date();
    var hora = agora.getHours();

    function hora_certa(horas, hora) {
        var minimum = 23;
        var final = null;
        horas.forEach(item => {
            if (Math.abs(item - hora) < minimum) {
                final = item;
                minimum = Math.abs(item - hora);
            }
        });
        return final;
    }
    var horas_retun = parseInt(hora_certa(horas, hora));

    var acc = 1;
    for (var i = 0; i < 8; i++) {
        horas_retun = horas_retun + 3;
        if (horas_retun <= 24) {
            acc = acc + 1;
        }
    }

    return acc;
}
