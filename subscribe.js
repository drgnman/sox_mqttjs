const sox_mqtt = require("./sox_mqtt");

connection = new sox_mqtt.Connection("localhost", 1883);
client = connection.connect();

subscriber = new sox_mqtt.SUbscribeModulue(client);
subscriber.subscribe("test_nodejs1");

client.on("message", function(topic, msg){
    console.log(msg.toString() + "from topic: " +topic.toString());
})