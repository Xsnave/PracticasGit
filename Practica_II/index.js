let dm = document;


function Load(){
//body
    dm.body.style.margin = "0"

//Contenedor
    let Bg = dm.getElementById("Contenedor");
    Bg.setAttribute('style','background-color: #DFDDDD');
    Bg.setAttribute('align','center');
    dm.body.style.paddingLeft = "34%";
    dm.body.style.paddingRight = "34%";
    Bg.style.paddingBottom = "30px";
    Bg.style.marginBottom = "0px";

//Imagen
    let Img = dm.createElement("img");
    Img.src = "ImagenC.jpg";
    Img.setAttribute('style','width: 350px')
    Img.style.paddingTop = "90px";
    dm.getElementById("Imagen").appendChild(Img);
    
//Subtitulo
    let SubE = dm.createElement("p"); 
    let SubC = dm.createTextNode("Cómo añadir un efecto a una imagen");

    SubE.appendChild(SubC);
    SubE.setAttribute('style','font-size: 28px');
    dm.getElementById("Subtitulo").appendChild(SubE);
    SubE.style.padding = "10px 0px 5px 0px";

//Texto  
    let TextE = dm.createElement("p"); 
    let texto1 = "Existen muchos plugin para insertar efectos especiales a la imagenes cuando se les pasa el cursor por encima."; 
    let texto2 = "Todos esos plugins añaden un montón de código a la pagina, que terminan afectando a la velocidad de la web en si.";
    let texto3 = "Si quieres utilizar muy poco codigo para asi optimizar la carga de tu web, nuestro script para generar un efecto de zoom es perfecto para ti";
    Texto = texto1 + ' ' + texto2 + ' ' + texto3;
    let TextC = dm.createTextNode(Texto);

    TextE.appendChild(TextC);
    TextE.setAttribute('align','center');
    TextE.setAttribute('style','font-size: 16px');
    TextE.style.textAlign = "left";
    TextE.style.padding = "4px 15px 50px 15px";
    TextE.style.fontFamily = "Arial, Helvetica, sans-serif";

    dm.getElementById("Texto").appendChild(TextE);

//boton
    let btn = dm.getElementById("btn");
    btn.innerHTML = "Leer M&aacute;s";
    //boton style
    btn.style.backgroundColor = "#E92A2A";
    btn.style.color = "white"; btn.style.fontWeight= "bold"; btn.style.fontSize = "16px";
    btn.style.borderStyle = "none"; btn.style.borderRadius = "0.5rem";
    btn.style.padding = "11px 22px 12px 22px"
}