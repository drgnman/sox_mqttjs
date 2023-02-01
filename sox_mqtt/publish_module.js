
function PublishModule(client){
        this.client = client;
}

PublishModule.prototype.create = function(node){
    var now = new Date()
    copy_node_name = node.getNodeName()+"_meta";

    msg = JSON.stringify({
        "node_name": copy_node_name,
        "location": node.getLocation(),
        "transducers": node.getTransducers(),
        "description": node.getDescription(),
        "create_timestamp": now.getFullYear() + "-" 
            + (now.getMonth()+1).toString().padStart(2, "0") + "-"
            + now.getDay().toString().padStart(2, "0") + " "
            + now.getHours().toString().padStart(2, "0") + ":"
            + now.getMinutes().toString().padStart(2, "0") + ":"
            + now.getSeconds().toString().padStart(2, "0") + "."
            + now.getMilliseconds().toString()
        }
    );
    publishExecute(copy_node_name, msg, 2);
}

PublishModule.prototype.publish = function(node, _qos=0){
    publishExecute(node.getNodeName(), JSON.stringify(node.getTransducers()), _qos);
}

function publishExecute(topic, msg="", _qos=0){
    console.log(msg);
    this.client.on("connect", function (){
        client.publish(topic, msg, {qos: _qos, retain: true}, function(error){
            console.log("fuga!");
            if(error){
                console.log(error);
            }else{
                console.log("Published!");
            }

        });
        client.end();
    })
}

module.exports = PublishModule;
