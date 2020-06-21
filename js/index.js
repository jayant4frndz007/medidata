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
    
  }
  function drop2(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text2");
    ev.target.appendChild(document.getElementById(data));
    //execute();
  }

  function execute(){
    document.getElementById("div1").style.border="solid 1px black";
    document.getElementById("div2").style.border="solid 1px black";
    
  }

  function clickPage(){
    var page1 = document.getElementById('page1');
    page1.className += 'curled-page';
  }
  