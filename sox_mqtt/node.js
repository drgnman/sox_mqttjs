function Node(node_name){
        this.node_name = node_name;
        this.longitude = 0.0;
        this.latitude = 0.0;
        this.transducers = {};
        this.description = "";
        this.timestamp = null;
    }


    Node.prototype.getNodeName = function(){
        return this.node_name;
    };
    Node.prototype.getLocation = function(){
        return [this.longitude, this.latitude];
    };
    Node.prototype.getTransducers = function(){
        return this.transducers;
    };
    Node.prototype.getDescription = function(){
        return this.description;
    };
    Node.prototype.getTimeStamp = function(){
        return this.timestamp;
    };

    Node.prototype.setNodeName = function(node_name){
        this.node_name = node_name;
    };

    Node.prototype.setNodeName = function(node_name){
        this.node_name = node_name;
    };
    Node.prototype.setLocation = function([longitude, latitude]){
        this.longitude = longitude;
        this.latitude = latitude;
    };
    Node.prototype.setTransducers = function(transducers){
        this.transducers = transducers;
    };
    Node.prototype.setDescription = function(description){
        this.description = description;
    };
    Node.prototype.setTimeStamp = function(timestamp){
        this.timestamp = timestampt;
    };

    Node.prototype.appendTransducer = function(transducer){
     if (transducer.getMetaFlag() == true){
        this.transducers[transducer.getTransducerName()] = {
            "unit" : transducer.getUnit(),
            "min_value" : transducer.getMinValue(),
            "max_value" : transducer.getMaxValue(),
            "description" : transducer.getDescription()
        };
    }else{
        var now = new Date()
        this.transducers[transducer.getTransducerName()] = {
            "raw_value": transducer.getRawValue(),
            "publish_timestamp": now.getFullYear() + "-" 
            + (now.getMonth()+1).toString().padStart(2, "0") + "-"
            + now.getDate().toString().padStart(2, "0") + " "
            + now.getHours().toString().padStart(2, "0") + ":"
            + now.getMinutes().toString().padStart(2, "0") + ":"
            + now.getSeconds().toString().padStart(2, "0") + "."
            + now.getMilliseconds().toString()
        };
    };
};

module.exports = Node;