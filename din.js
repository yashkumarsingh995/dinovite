function start() {
  // body...
  alert('this is working');
  
  var thor =document.getElementById('thor');
  var message=document.createElement('div');
  
  message.className="mesaage";
  message.innerText="kya bhai !! kya dekh rhe ho ?? ye vedio nhi hai ..ye 3d interactive argumented reality hai .";
  thor.appendChild(message);
  
}