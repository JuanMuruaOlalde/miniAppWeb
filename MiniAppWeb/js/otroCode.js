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
