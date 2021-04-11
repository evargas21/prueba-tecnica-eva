
document.getElementById("registrar").addEventListener("click", () => {

})

function saveData() {
    const motivo = document.getElementById('motivo').value
    const fechaInicio = document.getElementById('fechaInicio').value
    const fechaFin = document.getElementById('fechaFin').value
    const resDB = await fire.collection("incapacidad").add({
        motivo: motivo,
        fechaInicio: fechaInicio,
        fechaFin: fechaFin
    });
}
