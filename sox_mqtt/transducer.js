function Transducer(transducer_name){
        this.transducer_name = transducer_name;
        this.unit = "";
        this.min_value = null; 
        this.max_value = null;
        this.description = "";
        this.raw_value = null;
        this.meta_flag = true;
    }

    Transducer.prototype.getTransducerName = function(){
        return this.transducer_name;
    };
    Transducer.prototype.getUnit = function(){
        return this.unit;
    };
    Transducer.prototype.getMinValue = function(){
        return this.min_value;
    };
    Transducer.prototype.getMaxValue = function(){
        return this.max_value;
    };
    Transducer.prototype.getDescription = function(){
        return this.description;
    };
    Transducer.prototype.getRawValue = function(){
        return this.raw_value;
    };
    Transducer.prototype.getMetaFlag = function(){
        return this.meta_flag;
    };

    Transducer.prototype.setTransducerName = function(transducer_name){
        this.transducer_name = transducer_name;
    };
    Transducer.prototype.setUnit = function(unit){
        this.unit = unit;
    };
    Transducer.prototype.setMinValue = function(min_value){
        this.min_value = min_value;
    };
    Transducer.prototype.setMaxValue = function(max_value){
        this.max_value = max_value;
    };
    Transducer.prototype.setDescription = function(description){
        this.description = description;
    };
    Transducer.prototype.setRawValue = function(raw_value){
        this.raw_value = raw_value;
        this.meta_flag = false;
    };

module.exports = Transducer;