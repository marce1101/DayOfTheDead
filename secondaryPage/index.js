/* var dispDiv = document.getElementById("display");

function make10Snow(){
    makeItSnow();
    makeItSnow();
    makeItSnow();
    makeItSnow();
    makeItSnow();
    makeItSnow();
    makeItSnow();
    makeItSnow();
    makeItSnow();
    makeItSnow();
}

function makeItSnow(){
    var snow = document.createElement("img");
    var mleft = Math.round(Math.random()*100);
    var mdim = Math.round(Math.random()*40)+10;
    
    snow.src = "snow.svg";
    snow.className = "snows";
    snow.style.left = mleft + "%";
    snow.style.width = mdim + "px";
    snow.style.height = mdim + "px";
    
    dispDiv.appendChild(snow);
    
    if(mdim > 40){
        snow.style.transition = "top 5s";
        snow.style.opacity = "0.9";
    } else if(mdim > 30){
        snow .style.transition = "top 6s";
        snow.style.opacity = "0.7";
    } else if(mdim > 20){
        snow.style.transition = "top 7s";
        snow.style.opacity = "0.5";
    } else {
        snow.style.transition = "top 8s";
        snow.style.opacity = "0.3";
    }
    
    setTimeout(function(){
        snow.style.top = "150%";
        setTimeout(function(){
            dispDiv.removeChild(snow);
        }, 10000);
    }, 10);
}
var timer = null;
document.getElementById("start").addEventListener("click", function(){
   //document.getElementById("Snow").style.top = "100%";
    //document.getElementById("snow2").style.top = "100%"; 
    
    timer = setInterval(make10Snow, 100);
    
});

document.getElementById("stop").addEventListener("click", function(){
    clearInterval(timer);
});

document.getElementById("freq").addEventListener("change",function(){
   clearInterval(timer);
    var mnum = document.getElementById("freq").value;
    mnum = parseInt(mnum) * 100;
    var spd = 1000 - mnum;
    timer = setInterval(make10Snow, spd);
});

*/


function hide() {
    var flower = document.getElementById("flower");
    if (flower.style.display === "none") {
        flower.style.display = "block";
    } else {
        flower.style.display = "none";
    }
}


document.getElementById("ofrenda").addEventListener("click",function(){
     var fact = document.getElementById("fact8")
      if (fact.style.display === "block") {
        fact.style.display = "none";
    } else {
        fact.style.display = "block";
    }
    });


document.getElementById("tequila").addEventListener("click",function(){
     var fact = document.getElementById("fact7")
      if (fact.style.display === "block") {
        fact.style.display = "none";
    } else {
        fact.style.display = "block";
    }
    });

document.getElementById("skull").addEventListener("click",function(){
     var fact = document.getElementById("fact5")
      if (fact.style.display === "block") {
        fact.style.display = "none";
    } else {
        fact.style.display = "block";
    }
    });

document.getElementById("skeleton").addEventListener("click",function(){
     var fact = document.getElementById("fact2")
      if (fact.style.display === "block") {
        fact.style.display = "none";
    } else {
        fact.style.display = "block";
    }
    });

document.getElementById("butterfly").addEventListener("click",function(){
     var fact = document.getElementById("fact10")
      if (fact.style.display === "block") {
        fact.style.display = "none";
    } else {
        fact.style.display = "block";
    }
    });

document.getElementById("panDeLosMuertos").addEventListener("click",function(){
     var fact = document.getElementById("fact6")
      if (fact.style.display === "block") {
        fact.style.display = "none";
    } else {
        fact.style.display = "block";
    }
    });

