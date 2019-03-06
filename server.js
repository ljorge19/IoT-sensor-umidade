var five = require("johnny-five");
var board = new five.Board({
    port: "COM3",
  });
var vermelho = 13;
var azul = 12;
var verde = 11;


board.on("ready", function() {
  var ledVermelho = new five.Led(vermelho);
  var ledAzul = new five.Led(azul);
  var ledVerde = new five.Led(verde);

  var sensor = new five.Sensor("A0");

  sensor.on("change", function(value) {
    if (value > 0 && value < 400) {
        ledVermelho.on();
        ledAzul.off();
        ledVerde.off();
    }
    
    if (value > 400 && value < 800) {
        ledVermelho.off();
        ledAzul.on();
        ledVerde.off();
    }
    
    if (value > 800 && value < 1023) {
        ledVermelho.off();
        ledAzul.off();
        ledVerde.on();
    }
  });
});

