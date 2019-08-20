var common = function(){
    // returns random key from Set or Map
    this.getRandomKeyMap = function(collection) {
        let keys = Array.from(collection.keys());
        return keys[Math.floor(Math.random() * keys.length)];
    }

    // random element  for array
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

    this.addClickHandlerToNode = function(className, fn, obj, delay = 0, noDisableToggle = false){
        let elements = document.getElementsByClassName(className);
        for (let i = 0; i < elements.length; i++) {
            elements[i].addEventListener('click',(e) => {
                e.preventDefault();
                this.toggleMarker();
                if (delay === 0) {
                    obj[fn]();
                    this.toggleMarker(false);
                } else {
                    var randomDelay = this.randomBetween(delay,Math.round(delay/2));
                    setTimeout(() => {
                        obj[fn]();
                        if (!noDisableToggle) this.toggleMarker(false);
                    }, randomDelay);
                }
            })
        }
    }

    // not used
    this.getBase64Image = function(imgInput, base64only = false) {
        console.log(imgInput)
        var canvas = document.createElement("canvas");
        var img;
        if (! (imgInput instanceof Image)) {
            var url = imgInput;
            img = new Image();
            img.src = url;
            console.log(img);
        } else {
            img = imgInput;
        }
        canvas.width = img.width;
        canvas.height = img.height;
        console.log(img.height + '|' + img.width);
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL("image/png");
        if (base64only)
            return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
        else
            return dataURL;
    }

    this.toggleMarker = function (show = true) {
        console.log(show + 'show')
        var yourUl = document.getElementById("cover-spin");
        console.log(yourUl);
        if (show)
            yourUl.style.display = 'block';
        else
            yourUl.style.display = 'none';
    }

    this.randomBetween = function(max, min) {
        return parseInt((Math.random() * (max - min + 1)), 10) + min;
    }

}
