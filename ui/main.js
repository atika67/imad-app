var button=document.getElementById('counter');
    button.onclick=function(){
    // create a request object
    var request=new XMLHttpRequest();
    //capture the response and store it in a variable
        request.onreadystatechange=function(){
                if(request.readyState=== XMLHttpRequest.DONE){
                    // take some action
                        if(request.status===200){
                        var counter=request.responseText;
                        var span=document.getElementById('count');
                        span.innerHTML=counter.toString();
                        }
            }
            //not done yet
        };
       request.open('GET','http://atika1498.imad.hasura-app.io/counter',true);
       request.send(null);
 };
//submit name
var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('sbtn');
submit.onclick=function(){
  var names=['name1','name2','name3','name4'];
  var list='';
  for(var i=0;i<names.length;i++){
      list += '<li>'+ names[i] + '</li>';
  }
  var ul=document.getElementById('namelist');
  ul.innerHtml=list;
};