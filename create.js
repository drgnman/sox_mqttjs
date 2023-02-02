const sox_mqtt = require("./sox_mqtt");

connection = new sox_mqtt.Connection("localhost", 1883);
client = connection.connect();

publisher = new sox_mqtt.PublishModule(client);
node = new sox_mqtt.Node("test_nodejs1");
node.setLocation([80.5, 123.4]);
node.getNodeName();
transducer = new sox_mqtt.Transducer("test_transducer1");
console.log(transducer.getMetaFlag());
transducer.setUnit("%");
transducer.setMinValue(0);
transducer.setMaxValue(100);
transducer.setDescription("hogehoge");
node.appendTransducer(transducer);

//console.log(node);
//console.log(transducer);

publisher.create(node);
