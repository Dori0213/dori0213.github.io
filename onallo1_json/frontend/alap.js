fetch("https://raw.githubusercontent.com/Laboratoria/LIM011-data-lovers/master/src/data/potter/potter.json")
.then(x => x.json())
.then(y => megjelenit(y));


function megjelenit(adatok){
    console.log(adatok);


    var sz="";
    for (elem of adatok){
        sz+='<tr>';
        sz+='<td>'+elem.name+'</td>';
        sz+="<td target='_blank' href='"+elem.image+"'><img src='"+elem.image+"' class='kep_meret'></td>";
        sz+='</tr>';

    }
    document.getElementById("tablazat").innerHTML=sz;


    
}