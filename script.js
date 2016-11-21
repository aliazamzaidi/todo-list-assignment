var arr = [];
var counter = 0;

function toDoFunction(){
    var a = document.getElementById("textbox").value;
    arr.push(a);
    document.getElementById('headingHere').innerHTML = "<h1>To-Do List</h1>";
    document.getElementById('listHere').innerHTML = "<li>" + a + "</li>";
// for (var b= 0;b<=arr.length;b++){
//     counter = counter++;
//     var c = '<br>' + arr[b] + '</br>';
//     document.getElementById('listHere').innerHTML = c;
// }

}


