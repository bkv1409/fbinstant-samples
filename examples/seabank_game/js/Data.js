
var Data = function (common, configs) {
    this.source = null;
    this.common = common;
    this.configs = configs;

    this.init = function () {
        this.source = new Map();
        for (let param in this.configs.params) {
            let arr = new Array();
            console.log(param + '|' +this.configs.params[param])
            this.configs.data[this.configs.params[param]].forEach(val => {
                arr.push(new ResultScreen(this.configs.params[param], val, this.configs.bgImg))
            })
            this.source.set(this.configs.params[param], arr)
        }
    }


    this.getRandomItem = function(){
        let keyMap = this.common.getRandomKeyMap(this.source);
        console.log(keyMap);
        let arr = this.source.get(keyMap);
        console.log(arr);
        let e = this.common.getRandomKeyArray(arr);
        console.log(e);
        // return common.getRandomKeyArray(this.source.get(common.getRandomKeyMap(this.source)));
        return e;
    }
}

// export {Bar as default}
// export default instance;