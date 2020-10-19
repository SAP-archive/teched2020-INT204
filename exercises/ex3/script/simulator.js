const mqtt = require('mqtt');
const fs = require('fs');
const readline = require('readline');
const host = '87721cbe-9e5e-4a18-bdfb-ec6cf2657b42.us10.cp.iot.sap';
const huId = '1000000280';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Get Certificate
const cert = JSON.parse(fs.readFileSync('./cert.json'));

//Create MQTT Connection
const options = {
  key: cert.pem,
  cert: cert.pem,
  rejectUnauthorized: true,
  passphrase: cert.secret
};
var client = mqtt.connect("mqtts://" + host + "?clientId=" + huId, options);

//handle errors
client.on('error', function (e) {
  console.error(e);
});

client.on('connect', function () {
  console.log('Connected');
  sendMessage();
});

//create messages
function sendMessage(){
  rl.question('Enter a temperature value ', (answer) => {
    if(!isNaN(answer)){
      var payload = {
        "sensorAlternateId": huId, "capabilityAlternateId": "Handling_Unit_Condition", "measures": [
          {
            "temp": answer
          }
        ]
      };
      client.publish(`measures/${huId}`, JSON.stringify(payload));
      sendMessage();
    } else {
      console.log('Please enter a number');
      sendMessage();
    }
  });
}