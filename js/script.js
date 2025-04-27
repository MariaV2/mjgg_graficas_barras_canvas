//Capturando el objeto Canvas
const canvas = document.getElementById("barChart");
const ctx = canvas.getContext("2d");

//Datos o Valores de la Grafica
const labels = ["Baloncesto","Beisbol","Futbol"];
const values = [300,200,400];
const colors = ["#E74C3C","#3498DB","#E67E22"];

const chartWidth = canvas.width - 100; //area horizontal utilizable del grafico
const chartHeight = canvas.height - 100; //area vertical utilizable del grafico
const barWidth = 50; //ancho de cada barra
const gap = (chartWidth -labels.length * barWidth) / (labels.length + 1); //Espacio entre barras
const maxValue = 500; //Valor maximo del eje Y
const numSteps = 5; //Cantidad de divisiones del eje Y
const stepValue = maxValue/numSteps;


//FUNCION PARA DIBUJAR LA CUADRICULA
function drawGrid(){
    ctx.strokeStyle = "#CCC";
    ctx.lineWidth = 1;

    for(let i = 0; i<= numSteps; i++){
        const y = canvas.height - 50 - (i * chartHeight/numSteps); //Altura de cada linea del eje Y
        ctx.beginPath();
        ctx.moveTo(50,y);
        ctx.lineTo(canvas.width - 50, y); //Posicion de la linea de la cuadricula
        ctx.stroke();

        ctx.fillStyle = "#000";
        ctx.font = "12px Arial";
        ctx.fillText(stepValue * i,20, y+5) // Se coloca una etiqueta en el eje Y en la posicion indicada
    }

    ctx.beginPath();
    ctx.moveTo(50,50); //inicia eje Y
    ctx.lineTo(50,canvas.height -50);
    ctx.moveTo(50,canvas.height -50); //inicia eje X
    ctx.lineTo(canvas.width -50, canvas.height -50);
    ctx.strokeStyle = "#000";
    ctx.stroke();
}

function drawBars(){
    for(let i=0;i<labels.length; i++){
        const x = 50 + gap * (i + 1) + barWidth * i; //Posicion inicial de la barra en eje X
        const barHeight = (values[i]/maxValue) * chartHeight; //altura proporcional de la barra
        const y = canvas.height - 50 - barHeight; // (Altura) Posicion Y de la barra

        ctx.fillStyle = colors[i];
        ctx.fillRect(x,y,barWidth,barHeight); //se dibuja el rectangulo de la barra
        
        ctx.fillStyle = "#000";
        ctx.font = "12px Arial";
        ctx.fillText(values[i],x + barWidth/4, y -10); //se coloc el valor de la barra sobre ella

        ctx.fillText(labels[i],x +barWidth/4, canvas.height -30); //se coloca el nombre de la barra
    }
}

function drawTitle(){
   ctx.font = "16px Arial";
   ctx.fillStyle = "#000";
   ctx.fillText("Unidades vendidas en categorías deportivas", canvas.width/2 - 150 , 20); //se coloca el titulo

}

drawGrid();
drawBars();
drawTitle();