
function turnOn(){

    let lampOn = document.getElementById("lamp");
    lampOn.setAttribute("src", "./images/lampon.jpg");

    let h1 = document.getElementsByTagName("h1")[0];
    h1.innerHTML = "Desligue a lâmpada.";

    let bttoff = document.getElementsByTagName("button")[0];
    bttoff.innerHTML = "Desligar";

    console.log("ta funcionando?");

    let button = document.getElementsByTagName("button")[0];
    button.setAttribute("onclick", "turnOff()");
   
}

function turnOff(){


    let lampOff = document.getElementById("lamp");
    lampOff.setAttribute("src", "./images/lampoff.jpg");

    let h1 = document.getElementsByTagName("h1")[0];
    h1.innerHTML = "Ligue a lâmpada.";

    let btton = document.getElementsByTagName("button")[0];
    btton.innerHTML = "Ligar";

    console.log("e isso aqui? ta funcionando?");

    let button = document.getElementsByTagName("button")[0];
    button.setAttribute("onclick", "turnOn()");    

} 


function brokenLamp(){

    let brokenLamp = document.getElementById("lamp");
    brokenLamp.setAttribute("src", "./images/brokenlamp.jpg");

    let button = document.getElementsByTagName("button")[0];
    button.style.display = "none";

    let h1 = document.getElementsByTagName("h1")[0];
    h1.innerHTML = "Ops...";
   
     
}