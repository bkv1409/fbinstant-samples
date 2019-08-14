var common = function(){
    // returns random key from Set or Map
    this.getRandomKeyMap = function(collection) {
        let keys = Array.from(collection.keys());
        return keys[Math.floor(Math.random() * keys.length)];
    }

    this.getRandomKeyArray = function(collection) {
        return collection[Math.floor(Math.random()*collection.length)];
    }

    this.addOrUpdateChildElement = function(parent, child) {
        if (parent.childNodes.length > 0) {
            // let currentChild = parent.childNodes[0];
            // parent.replaceChild(child, currentChild);
            let lastChild = parent.lastElementChild;
            while (lastChild) {
                parent.removeChild(lastChild);
                lastChild = parent.lastElementChild;
            }
        }

        parent.appendChild(child);
    }

    this.addClickHandlerToNode = function(className, fn, obj){
        let elements = document.getElementsByClassName(className);
        for (let i = 0; i < elements.length; i++) {
            elements[i].addEventListener('click',() => {
                obj[fn]()
            })
        }
    }
}
