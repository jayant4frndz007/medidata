console.log('hello');

function allowDrop1(ev) {
    ev.preventDefault();
  }
  function allowDrop2(ev) {
    ev.preventDefault();
  }
  
  function drag1(ev) {
    ev.dataTransfer.setData("text1", ev.target.id);
   // document.getElementById("div1").style.border="solid 2px green";
   // document.getElementById("div2").style.border="solid 2px red";
    
  }
  function drag2(ev) {
    ev.dataTransfer.setData("text2", ev.target.id);
   // document.getElementById("div2").style.border="solid 2px green";
    //document.getElementById("div1").style.border="solid 2px red";
    
  }
  
  function drop1(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text1");
    ev.target.appendChild(document.getElementById(data));
    //execute();
    dropCall1(ev)
    
  }
  function drop2(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text2");
    ev.target.appendChild(document.getElementById(data));
    //execute();
    dropCall2(ev)
  }


  

  function execute(){
    document.getElementById("div1").style.border="solid 1px black";
    document.getElementById("div2").style.border="solid 1px black";
    
  }

  function clickPage(){
    var page1 = document.getElementById('page1');
    page1.className += 'curled-page';
  }
  var str1="";
  function dropCall1(ev){
    var select=document.getElementById('div1');
    var option=select.querySelectorAll('div');
    str1=''
   option.forEach(element=>{
     
     console.log(element.innerHTML);
      str1=str1+"<div class='arrowright'><div class='boxside2'><i class='fa fa-chevron-right' style='color:black' aria-hidden='true'  ></i>"+element.innerHTML+"</div></div>";
   })

   document.getElementById('res1').innerHTML=str1;
  }

  var str="";
  function dropCall2(ev){
    var select=document.getElementById('div2')
    console.log(select.querySelectorAll('div').length)
    var option=select.querySelectorAll('div');
    str="";
    option.forEach(element=>{
      console.log(element.innerHTML)
      if(element.innerHTML != '')
      str=str+"<div class='arrowright'><div class='boxside2'><i class='fa fa-chevron-right' style='color:black' aria-hidden='true'  ></i>"+element.innerHTML+"</div></div>";
    })
    document.getElementById('res2').innerHTML=str;
  }
  

  function studyCall(arg){
    //alert(arg);
   
    $( "#refr" ).load(window.location.href + " #refr" );
    $( "#refr1" ).load(window.location.href + " #refr1" );
    $( "#res1" ).load(window.location.href + " #res1" );
    $( "#res2" ).load(window.location.href + " #res2" );
    str='';
    str1='';
    
   
    
    
    document.getElementById('div1').innerHTML='';
    document.getElementById('div2').innerHTML='';
   console.log('remove',document.getElementById('div1'))

     if(arg == 'study1'){
       document.getElementById('changeName').innerHTML='India&nbsp;<i class="fa fa-flag" aria-hidden="true"></i>'
       
       document.getElementById('changeName1').innerHTML='France&nbsp;<i class="fa fa-flag" aria-hidden="true"></i>'
       document.getElementById('objectname').innerHTML='India is Mostly focus on'
       document.getElementById('objectname1').innerHTML='France is Mostly focus on'
     }
     if(arg == 'study2'){
      document.getElementById('changeName').innerHTML='USA&nbsp;<i class="fa fa-flag" aria-hidden="true"></i>'
      document.getElementById('changeName1').innerHTML='Japan&nbsp;<i class="fa fa-flag" aria-hidden="true"></i>'
      document.getElementById('objectname').innerHTML='USA is Mostly focus on'
       document.getElementById('objectname1').innerHTML='Japan is Mostly focus on'
    }
    if(arg == 'study3'){
      document.getElementById('changeName').innerHTML='Brazil&nbsp;<i class="fa fa-flag" aria-hidden="true"></i>'
      document.getElementById('changeName1').innerHTML='Italy&nbsp;<i class="fa fa-flag" aria-hidden="true"></i>'
      document.getElementById('objectname').innerHTML='Brazil is Mostly focus on'
      document.getElementById('objectname1').innerHTML='Italy is Mostly focus on'
    }
  }