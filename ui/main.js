//console.log('Loaded!');
// change the text of the main text-div
//var element =document.getElementById('main-text');
//element.innerHTML='New Value';
// move the image
// var img=document.getElementById('madi');
//var marginLeft=0;
//function moveRight(){
    //marginLeft=marginLeft+1;
    //img.style.marginLeft=marginLeft+'px'; 
//}
//img.onclick=function(){
   // var interval=setInterval(moveRight,50);
   // img.style.marginLeft='100px';
//};
// counter code
var counter=0;
var button=document.getElementById('counter');
button.onclick=function(){
    // make a request to the counter end point 
    //capture the response and store it in the variable and render the variable in correct span
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
};