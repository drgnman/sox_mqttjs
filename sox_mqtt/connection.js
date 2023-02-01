const { PublishModule } = require(".");

function Connection(broker, port, username=null, password=null){
    this.mqtt = require("mqtt");
    this.broker = broker;
    this.port = port;
    this.username = username;
    this.password = password;
}

Connection.prototype.connect = function(){
    let client = this.mqtt.connect("mqtt://" + this.broker)
    client.port = this.port
    if (this.username != null || this.password != null){
        if (this.username == null || this.password == null){
            console.log("Username or Password is not found!");
        } else {
            client.username = this.username;
            client.password = this.password;
        }
    }
    return client;
}

module.exports = Connection;