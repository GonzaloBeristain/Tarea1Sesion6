let html = document.querySelector("html");
let tragos = document.getElementById("tragos");
let drinkName = [];
let drinkTotal = [];
let drinkAgregar = document.getElementById("drink");
let drinkPrice = document.getElementById("drinkPrice");
let foodName = [];
let foodTotal = [];
let foodAgregar = document.getElementById("food");
let foodPrice = document.getElementById("foodPrice");


//AGREGAR TRAGOS
let agregarMartini = () => {
    let drink1 = document.getElementById("drink1").checked;
    let martiniName = document.getElementById("martiniName").textContent;
    let martiniTotal = document.getElementById("martiniTotal").textContent;

    if (drink1 == true){
        drinkName.push(martiniName)
        drinkTotal.push(martiniTotal)
        drinkAgregar.innerText = `${drinkName.join('\n')}`;
        drinkPrice.innerText = `${drinkTotal.join('\n')}`;
    }
}

let agregarCappuccino = () => {
    let drink2 = document.getElementById("drink2").checked;
    let cappuccinoName = document.getElementById("cappuccinoName").textContent;
    let cappuccinoTotal = document.getElementById("cappuccinoTotal").textContent;

    if (drink2 == true){
        drinkName.push(cappuccinoName)
        drinkTotal.push(cappuccinoTotal)
        drinkAgregar.innerText = `${drinkName.join('\n')}`;
        drinkPrice.innerText = `${drinkTotal.join('\n')}`;
    }

}

let agregarLatte = () => {
    let drink3 = document.getElementById("drink3").checked;
    let lateName = document.getElementById("lateName").textContent;
    let lateTotal = document.getElementById("lateTotal").textContent;

    if (drink3 == true){
        drinkName.push(lateName)
        drinkTotal.push(lateTotal)
        drinkAgregar.innerText = `${drinkName.join('\n')}`;
        drinkPrice.innerText = `${drinkTotal.join('\n')}`;
    }

}

let agregarMojito = () => {
    let drink4 = document.getElementById("drink4").checked;
    let mojitoName = document.getElementById("mojitoName").textContent;
    let mojitoTotal = document.getElementById("mojitoTotal").textContent;

    if (drink4 == true){
        drinkName.push(mojitoName)
        drinkTotal.push(mojitoTotal)
        drinkAgregar.innerText = `${drinkName.join('\n')}`;
        drinkPrice.innerText = `${drinkTotal.join('\n')}`;
    } 
    console.log(drinkTotal)
}

//AGREGAR COMIDA
let agregarComida1 = () => {
    let comida1 = document.getElementById("meal1").checked;
    let comidaName1 = document.getElementById("comida1").textContent;
    let comidaTotal1 = document.getElementById("comida1Precio").textContent;

    if (comida1 == true){
        drinkName.push(comidaName1)
        drinkTotal.push(comidaTotal1)
        drinkAgregar.innerText = `${drinkName.join('\n')}`;
        drinkPrice.innerText = `${drinkTotal.join('\n')}`;
    }
}

let agregarComida2 = () => {
    let comida2 = document.getElementById("meal2").checked;
    let comidaName2 = document.getElementById("comida2").textContent;
    let comidaTotal2 = document.getElementById("comida2Precio").textContent;

    if (comida2 == true){
        drinkName.push(comidaName2)
        drinkTotal.push(comidaTotal2)
        drinkAgregar.innerText = `${drinkName.join('\n')}`;
        drinkPrice.innerText = `${drinkTotal.join('\n')}`;
    }
}

let agregarComida3 = () => {
    let comida3 = document.getElementById("meal3").checked;
    let comidaName3 = document.getElementById("comida3").textContent;
    let comidaTotal3 = document.getElementById("comida3Precio").textContent;

    if (comida3 == true){
        drinkName.push(comidaName3)
        drinkTotal.push(comidaTotal3)
        drinkAgregar.innerText = `${drinkName.join('\n')}`;
        drinkPrice.innerText = `${drinkTotal.join('\n')}`;
    }
    console.log(drinkTotal)
}

//TOTAL PEDIDO
let totalPedido = () => {
    let total = 0;

    for (let i = 0; i < drinkTotal.length; i++) {
        let num = Number(drinkTotal[i].replace("$", "").replace(/\./g, ""));
        total += num;
    }

    let formattedTotal = "$" + total.toLocaleString("es-CL", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

        document.getElementById("finalPrice").innerText = formattedTotal;
}

drink1.addEventListener("change", agregarMartini);
drink2.addEventListener("change", agregarCappuccino);
drink3.addEventListener("change", agregarLatte);
drink4.addEventListener("change", agregarMojito);
meal1.addEventListener("change", agregarComida1);
meal2.addEventListener("change", agregarComida2);
meal3.addEventListener("change", agregarComida3);
html.addEventListener("change", totalPedido);