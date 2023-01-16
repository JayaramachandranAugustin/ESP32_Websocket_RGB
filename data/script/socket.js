var targetUrl = `ws://${window.location.hostname}/ws`;
var websocket;
window.addEventListener('load', onLoad);

function onLoad() {
  initializeSocket();
}

function initializeSocket() {
  console.log('Opening WebSocket connection to ESP32...');
  websocket = new WebSocket(targetUrl);
  websocket.onopen = onOpen;
  websocket.onclose = onClose;
  websocket.onmessage = onMessage;
}
function onOpen(event) {
  console.log('Starting connection to server..');
}
function onClose(event) {
  console.log('Closing connection to server..');
  setTimeout(initializeSocket, 2000);
}
function onMessage(event) {
  console.log("WebSocket message received:", event)
}

function sendMessage(message) {
  websocket.send(message);
}


var red = document.getElementById("red");

red.addEventListener("change",() => 
{
  console.log('Red :: ' + red.checked);
  if(red.checked){
    sendMessage("RED_ON"); 
  }else{
    sendMessage("RED_OFF"); 
  }
})

var blue = document.getElementById("blue");

blue.addEventListener("change",() => 
{
  console.log('Blue :: ' + blue.checked);
  if(blue.checked){
    sendMessage("BLUE_ON"); 
  }else{
    sendMessage("BLUE_OFF"); 
  }
})

var green = document.getElementById("green");

green.addEventListener("change",() => 
{
  console.log('Green :: ' + green.checked);
  if(green.checked){
    sendMessage("GREEN_ON"); 
  }else{
    sendMessage("GREEN_OFF"); 
  }
})
