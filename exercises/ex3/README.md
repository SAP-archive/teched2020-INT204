# Exercise 3 - Send Data to SAP IoT

In this exercise you will send data to SAP IoT to simulate your handling unit sensors.

## Exercise 3.1 - Download your certificate

After completing these steps you will have a basic understanding how SAP IoT APIs work. We will use the APIs to downloaded a certificate which allows you to ingest data to SAP IoT.

1.	Go to the <b>Thing Modeler</b> application in you Fiori Launchpad
<br>![](/exercises/ex1/images/tm1.png)

2. In the upper left corner of the Thing Modeler App you can select your package. Therefore search for your number which was provided to you earlier and click on the package.
<br>![](/exercises/ex1/images/tm2.png)

3. Select your <b>Thing</b> in the <b>Things</b> tab.

4. Under <b>Basic Data</b> you will find <b>S4_References</b> with a <b>HANDLINGUNIT</b>. Copy the value. 
<br>![](/exercises/ex3/images/cert1.png)

5. Navigate back to your Fiori Launchpad

6. Now we will start introducing the SAP IoT APIs to you. Therefore open the <b>Device Connectivity</b> app.
<br>![](/exercises/ex3/images/cert2.png)

7. Go to <b>GET /devices</b> and click <b>Try it out</b>.
<br>![](/exercises/ex3/images/cert3.png)

8. We will now search for our device. Therefore enter the following code into the <b>filter</b> field and click on <b>Execute</b>.
```
alternateId eq '<the HU_ID you copied>'
```
<br>![](/exercises/ex3/images/cert4.png)

9. In the <b>Responses</b> area copy the <b>id</b> of your device.
<br>![](/exercises/ex3/images/cert5.png)

10. Now go to the certificate <b>GET</b> API: <b>/v1/devices/{deviceId}/authentications/clientCertificate/pem</b>

11. Enter the <b>deviceId</b> you just copied and click <b>Execute</b>.
<br>![](/exercises/ex3/images/cert6.png)

12. In the <b>Response</b> are click on <b>Download</b> to download a JSON file.
<br>![](/exercises/ex3/images/cert7.png)


## Exercise 3.2 - Create a Node.js Script to simulate IoT Data

After completing these steps you will be able to send data to SAP IoT.

1. Create a new folder in your local file system

2. Copy the file you just downloaded to the newly created folder and rename it to <b>cert.json</b>

3. Create a file called <b>simulator.js</b>.

4. First we will add some configuration to the <b>simulator.js</b>. Please adjust your <b>huId</b>:
```javascript
const mqtt = require('mqtt');
const fs = require('fs');
const readline = require('readline');
const host = '87721cbe-9e5e-4a18-bdfb-ec6cf2657b42.us10.cp.iot.sap';
const huId = '<yourHU_ID>';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
```

5. Next step is to read the certificate:
```javascript
const cert = JSON.parse(fs.readFileSync('./cert.json'));
```

6. With the certificate we can now create a MQTT connection:
```javascript
const options = {
  key: cert.pem,
  cert: cert.pem,
  rejectUnauthorized: true,
  passphrase: cert.secret
};
var client = mqtt.connect("mqtts://" + host + "?clientId=" + huId, options);
```

7. Now we will add an error handler and a handler for successful connections:
```javascript
client.on('error', function (e) {
  console.error(e);
});

client.on('connect', function () {
  console.log('Connected');
  sendMessage();
});
```

8. Last we will create a simple user interface to enter temperature values and send them SAP IoT
```javascript
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
```

9. Open a terminal in your current directory and install the node package 'mqtt':
```
npm install mqtt
```

10. Now you are ready to run your simulator:
```
node simulator.js
```

11. Navigate back to the <b>Thing Modeler</b> app. Select your <b>Thing</b> and navigate to <b>Measured Values</b>, you should see the values you've ingested.


## Summary

Now you are able to send data to SAP IoT. You can now simulate some temperature values. If you send a value above your threshold it will raise an alert in S/4HANA. This will be shown during the session

Now you can continue and create a Dashboard to visualize some of your IoT Data in SAC - [Exercise 4 - SAP Analytics Cloud Dashboard](../ex4/README.md)
