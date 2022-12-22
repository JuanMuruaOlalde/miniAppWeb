window.addEventListener("load", () => {
    const formularioDeParalelepipedos = document.querySelector("#formularioDeParalelepipedos");
    formularioDeParalelepipedos.addEventListener("submit", (event) => {
        event.preventDefault();
        CalcularParalelepipedo();
    });

    const formularioDePizzas = document.querySelector("#formularioDePizzas");
    formularioDePizzas.addEventListener("submit", (event) => {
        event.preventDefault;
        ProcesarPizza();
    });

    // const formularioDeGeolocalizacionYMetereologia = document.querySelector("#formularioDeGeolocalizacionYMetereologia");
    // formularioDeGeolocalizacionYMetereologia.addEventListener("submit", (event) => {
    //     event.preventDefault;
    //     ObtenerCoordenadasYMetereologia();
    // });

    function CalcularParalelepipedo() {
        const datos = new FormData(formularioDeParalelepipedos);
        const unLado = Number(datos.get("unLado"));
        const otroLado = Number(datos.get("otroLado"));
        const perimetro = unLado * 2 + otroLado * 2;
        const area = unLado * otroLado;
        const contenedorRespuesta = document.querySelector("#respuestaParalelepipedo");
        contenedorRespuesta.textContent = "Perimetro = " + perimetro.toString() + "\n" + "Area = " + area.toString();
    }

    function ProcesarPizza() {
        const datos = new FormData(formularioDePizzas);
        var respuesta = [];
        respuesta.push("Se va a enviar una pizza");
        const base = datos.get("base");
        switch (base) {
            case "pastaFina":
                respuesta.push(" de pasta fina.");
                break;
            case "pastaNormal":
                respuesta.push(" de pasta normal.");
                break;
            case "conBordeQueso":
                respuesta.push(" de pasta normal con bordes rellenos de queso.");
                break;
        }
        var ingredientes = [];
        const jamonYork = document.querySelector("#jamonYork");
        if (jamonYork.checked) {
            ingredientes.push("jamón york");
        }
        const bacon = document.querySelector("#bacon");
        if (bacon.checked) {
            ingredientes.push("bacon crujiente");
        }
        const peperoni = document.querySelector("#peperoni");
        if (peperoni.checked) {
            ingredientes.push("peperoni");
        }
        const champiñon = document.querySelector("#champiñon");
        if (champiñon.checked) {
            ingredientes.push("champiñones");
        }
        const aceituna = document.querySelector("#aceituna");
        if (aceituna.checked) {
            ingredientes.push("aceitunas");
        }
        if (ingredientes.length > 0) {
            respuesta.push("\nCon los siguientes ingredientes:");
            for (const ingrediente of ingredientes) {
                respuesta.push("\n  : " + ingrediente);
            }
        }
        alert(respuesta.join(""));
    }
});

let CONFIGURACION;
fetch("./configuracion.json")
    .then((response) => {
        if (!response.ok) {
            alert("No se ha podido leer la configuracion:\n" + response.status + " " + response.statusText);
        }
        return response.json();
    })
    .then((jsonData) => {
        CONFIGURACION = jsonData;
    })
    .catch((error) => alert("Se ha producido un error al procesar la configuracion:\n" + error.message));

function ObtenerCoordenadasYMetereologia() {
    const poblacion = document.getElementById("poblacion").value;
    const codigoPais = document.getElementById("codigoPais").value;

    const urlParaGeocodificacion =
        "http://api.openweathermap.org/geo/1.0/direct" +
        "?q=" +
        poblacion +
        "," +
        codigoPais +
        "&appid=" +
        CONFIGURACION["weatherAPIkey"];
    fetch(urlParaGeocodificacion)
        .then((response) => {
            if (!response.ok) {
                alert(
                    "No se ha podido obtener datos de la API de geolocalización:\n" +
                        response.status +
                        " " +
                        response.statusText
                );
            }
            return response.json();
        })
        .then((jsonData) => {
            if (jsonData.length === 1) {
                const timestamp = new Date(Date.now());
                console.log(timestamp.toISOString(), "Se ha geolocalizado ", JSON.stringify(jsonData));
                const latitud = jsonData[0]["lat"];
                const longitud = jsonData[0]["lon"];
                ObtenerMetereologia(latitud, longitud);
            } else {
                document.getElementById("contenedorRespuestaAPI").innerHTML =
                    "<p>Los datos metereológicos solo se pueden consultar en una localización.</p>" +
                    "<p>Y no se ha obtenido una respuesta clara a la geolocalización de [" +
                    poblacion +
                    " , " +
                    codigoPais +
                    "]:</p>" +
                    "<p>" +
                    JSON.stringify(jsonData) +
                    "</p>";
            }
        })
        .catch((error) => alert("Se ha producido un error en la API de geolocalización:\n" + error.message));
}

function ObtenerMetereologia(latitud, longitud) {
    const urlParaMetereologia =
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
        latitud +
        "&lon=" +
        longitud +
        "&units=metric" +
        "&lang=es" +
        "&appid=" +
        CONFIGURACION["weatherAPIkey"];
    fetch(urlParaMetereologia)
        .then((response) => {
            if (!response.ok) {
                alert("No se ha podido obtener datos de la API metereologica:\n" + response.status + " " + response.statusText);
            }
            return response.json();
        })
        .then((jsonData) => {
            const temperaturaActual = jsonData["main"]["temp"];
            const humedadActual = jsonData["main"]["humidity"];
            const vientoVelocidad = jsonData["wind"]["speed"];
            const vientoDireccion = jsonData["wind"]["deg"];
            //Me salian valores raros en las horas de salida y puesta del Sol, asi es que no las uso.
            const salidaDelSol = new Date(jsonData["sys"]["sunrise"]);
            const puestaDelSol = new Date(jsonData["sys"]["sunset"]);
            const timestamp = new Date(Date.now());
            document.getElementById("contenedorRespuestaAPI").innerHTML =
                "<p>Geolocalización: latitud " +
                latitud +
                " , longitud " +
                longitud +
                "</p>" +
                "<p> Temperatura: " +
                temperaturaActual +
                "°C </p>" +
                "<p> Humedad: " +
                humedadActual +
                "% </p>" +
                "<p> Viento: " +
                vientoVelocidad +
                "m/s , soplando desde " +
                vientoDireccion +
                "°" +
                "</p>" +
                "<p><small>Consulta realizada el " +
                timestamp.toLocaleString() +
                "</small></p>";
        })
        .catch((error) => alert("Se ha producido un error en la API metereologica:\n" + error.message));
}
