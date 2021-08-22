let instance = null;
class Configuartion {
    constructor(initValues) {
        this.xPoint = initValues.xpoint || 0;
        this.yPoint = initValues.ypoint || 0;
        this.shape = initValues.shape || null;
    }

    static getConfiguration(initValues) {
        if (!instance) {
            instance = new Configuartion(initValues)
        }

        return instance;
    }
}

var configureObj1 = Configuartion.getConfiguration({ "xpoint": 8, "ypoint" : 9, "shape" : "rectangle" });
console.log(configureObj1);
var configureObj2 = Configuartion.getConfiguration({ "xpoint": 2, "ypoint": 4, "shape" : "circle" });
console.log(configureObj2)