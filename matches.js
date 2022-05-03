// write js code here corresponding to matches.html
var matchArr=JSON.parse(localStorage.getItem("schedule"))

showData(matchArr)
var favouriteArr= JSON.parse(localStorage.getItem("favourites"))||[]

function showData(matchArr){
 matchArr.forEach( function(ele) {
     var tr= document.createElement("tr");
    var td1= document.createElement("td");
      td1.innerText=ele.matchNumber
    var td2= document.createElement("td");
        td2.innerText=ele.teamA
    var td3= document.createElement("td");
        td3.innerText=ele.teamB
    var td4= document.createElement("td");
td4.innerText=ele.date
    var td5= document.createElement("td");
td5.innerText=ele.venue
var td6=document.createElement("td");
td6.innerText="Favourite";
td6.style.color= "blue"
td6.style.cursor="pointer"
td6.addEventListener("click",function(){
  favouriteFun(ele)
});

    tr.append(td1,td2,td3,td4,td5,td6)
    document.querySelector("tbody").append(tr);
 });
}
 function favouriteFun(ele){
     favouriteArr.push(ele);
     localStorage.setItem("favourites",JSON.stringify(favouriteArr))
 }


