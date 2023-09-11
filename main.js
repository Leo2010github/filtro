function preload(){
    
}
function setup(){
    lienzo = createCanvas(200, 200);
    lienzo.position(490, 740);
    camara = createCapture(VIDEO);
    camara.hide();
    filtro = "";
}
function draw(){
    image(camara, 0, 0, 200, 240);
    tint(filtro);
    filtro2 = document.getElementById("nombrefiltro2").value;
    if (filtro2 == "carita feliz") {
        fill("yellow");
        stroke("yellow");
        circle(60, 80, 20);
        circle(140, 80, 20);
        rect(70, 120, 70, 20);
        rect(50, 120, 20, 50);
        rect(130, 120, 20, 50);
        rect(60, 160, 80, 20);
        //carita feliz
    }
    if (filtro2 == "carita triste") {
        fill("blue");
        stroke("blue");
        circle(60, 80, 20);
        circle(140, 80, 20);
        rect(70, 120, 70, 20);
        rect(50, 120, 20, 50);
        rect(130, 120, 20, 50);
        //carita triste
    }
    if (filtro2 == "marco de puntos") {
        fill("blue");
        stroke("black");
        circle(10, 20, 20);
        circle(10, 60, 20);
        circle(10, 100, 20);
        circle(10, 140, 20);
        circle(10, 180, 20);
        fill("yellow");
        stroke("black");
        circle(190, 20, 20);
        circle(190, 60, 20);
        circle(190, 100, 20);
        circle(190, 140, 20);
        circle(190, 180, 20);
        fill("red");
        stroke("black");
        circle(40, 10, 20);
        circle(80, 10, 20);
        circle(120, 10, 20);
        circle(160, 10, 20);
        fill("green");
        stroke("black");
        circle(40, 190, 20);
        circle(80, 190, 20);
        circle(120, 190, 20);
        circle(160, 190, 20);
        //marco de puntos
    }
    if (filtro2 == "rayas") {
        fill("yellow");
        stroke("green");
        rect(0, 10, 200, 7);
        rect(0, 30, 200, 7);
        rect(0, 50, 200, 7);
        rect(0, 70, 200, 7);
        rect(0, 90, 200, 7);
        rect(0, 110, 200, 7);
        rect(0, 130, 200, 7);
        rect(0, 150, 200, 7);
        rect(0, 170, 200, 7);
        rect(0, 190, 200, 7);
        //rayas
    }
    }
function Filtro(){
    filtro = document.getElementById("colorFiltro").value;
}
var num = 0;
function Foto(){
    num = num + 1;
    foto = document.getElementById("nombrefoto").value;
    save(foto + num + ".png");
}