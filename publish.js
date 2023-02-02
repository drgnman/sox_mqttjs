const sox_mqtt = require("./sox_mqtt");

connection = new sox_mqtt.Connection("localhost", 1883);
client = connection.connect();

publisher = new sox_mqtt.PublishModule(client);
node = new sox_mqtt.Node("test_nodejs1");
transducer = new sox_mqtt.Transducer("test_transducer1");
transducer.setRawValue("korehatestudesu");
console.log(transducer.getMetaFlag());
node.appendTransducer(transducer);

//console.log(node);
//console.log(transducer);

publisher.publish(node);
