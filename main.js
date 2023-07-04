var sum = prompt("Summani kiriting");
var userDollor = 10.900;
var userYevro = 12272.64;
var userPlane = 500;
var userHotel = 250;
var userMusem = 120;
var userOur = (userPlane + userHotel) * userDollor;
var userTrevil = userMusem * userYevro;
var userWrapper = userOur + userTrevil ;
 if (userWrapper <= sum) {
    alert("Oq yo'l")
 }else{
    alert("Kiritlgan pul miqdori yetarli emas");
 }