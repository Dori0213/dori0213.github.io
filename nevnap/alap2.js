
function nevnap_datum(){

    var datum=document.getElementById("bevitel1").value ;
    

    fetch("https://api.nevnapok.eu/nap/"+datum)
    .then(x => x.json())
    .then(y => megjelenit1(y,datum));

    
    
}


function megjelenit1(adatok,datum){
    console.log(adatok[datum]);
    var sz='';
    for (elem of adatok[datum]){
        sz+='<p class="arnyekolt">'+elem+'</p>';
    }
    document.getElementById("nevnap1").innerHTML=sz;
}

function nevnap_nev(){
    var nev=document.getElementById("bevitel2").value;
    fetch("https://api.nevnapok.eu/nev/"+nev)
    .then(x => x.json())
    .then(y => megjelenit1(y,nev));
}

function megjelenit2(adatok,nev){
    console.log(adatok[nev]);
    var sz1='';
    for (elem of adatok[nev]){
        sz1+='<p class="arnyekolt1">'+elem+'</p>';
    }
    document.getElementById("nevnap2").innerHTML=sz1;
}




