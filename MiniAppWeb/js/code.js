//Una forma de interactuar con el HTML es a través de clicar "botones" que llaman a funciones en su attributo onclick="-----"
//Estas son las funciones que son llamadas de esa forma

function PonerElContenidoDeGatos() {
    const contenedorPrincipal = document.querySelector("#contenedor_principal");
    contenedorPrincipal.innerHTML =
        "<h2>El contenido de gatos</h2>" +
        "<p>Un montón de texto sobre gatos.... asdkfasjf kas dfkjasd kaslkf aslk flaflaf laksj flkas</p>" +
        '<a href="https://es.wikipedia.org/wiki/Felis_silvestris_catus" target="_blank">https://es.wikipedia.org/wiki/Felis_silvestris_catus</a>';
    const contenedorSecundario = document.querySelector("aside");
    contenedorSecundario.innerHTML =
        '<p><a href="https://commons.wikimedia.org/wiki/File:Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg#/media/File:Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg">' +
        '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/1200px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg" alt="Orange tabby cat sitting on fallen leaves-Hisashi-01A.jpg"></a>' +
        '<br> <a href="https://creativecommons.org/licenses/by-sa/2.0" title="Creative Commons Attribution-Share Alike 2.0">CC BY-SA 2.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=8313371">Link</a></p>';
}

function PonerElContenidoDeJirafas() {
    const contenedorPrincipal = document.querySelector("#contenedor_principal");
    contenedorPrincipal.innerHTML =
        "<h2>El contenido de jirafas</h2>" +
        "<p>Un montón de texto sobre jirafas....,zmxnc,nzcn cbxmvzb ,mn zmvb mzxcbm,zxbc m mcznbv mnjzbxcjvhbjzhxbc vjhzjhxcvb </p>" +
        '<a href="https://es.wikipedia.org/wiki/Giraffa_camelopardalis" target="_blank">https://es.wikipedia.org/wiki/Giraffa_camelopardalis</a>';
    const contenedorSecundario = document.querySelector("aside");
    contenedorSecundario.innerHTML =
        '<p><a href="https://commons.wikimedia.org/wiki/File:Giraffa_camelopardalis_angolensis.jpg#/media/Archivo:Giraffa_camelopardalis_angolensis.jpg"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Giraffa_camelopardalis_angolensis.jpg/1200px-Giraffa_camelopardalis_angolensis.jpg" alt="Giraffa camelopardalis angolensis.jpg"></a><br>De © Hans Hillewaert, <a href="https://creativecommons.org/licenses/by-sa/4.0" title="Creative Commons Attribution-Share Alike 4.0">CC BY-SA 4.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=2429667">Enlace</a></p>';
}

//Otra forma de interactuar con el HTML es a través de responder a eventos
