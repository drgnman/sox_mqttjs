
function SubscribeModule(client){
    this.client = client;
}

SubscribeModule.prototype.subscribe = function(topic){
    this.client.on("connect", function(){
        client.subscribe(topic);
    });
}

module.exports = SubscribeModule;
