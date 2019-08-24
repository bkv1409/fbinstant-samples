var Game = function (FBInstant, html2canvas) {
    this.playerName = FBInstant.player.getName();
    this.playerPhoto = FBInstant.player.getPhoto();
    // fix code test
    // this.playerPhoto = "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=2587715987969845&height=256&width=256&ext=1568424200&hash=AeRada2ahHMhyitO";

    // this.FBInstant = FBInstant;
    // this.html2canvas = html2canvas;
    this.data = null;
    var self = this;
    this.configs = null;
    this.common = null;

    this.init = function(){
        // this.player = player;// inject player object FB instant game

        this.configs = new configs();
        this.common = new common();
        // this.playerPhoto = this.common.getBase64Image(this.playerPhoto, false);
        this.data = new Data(this.common, this.configs);
        this.data.init();
    }

    this.initPlay = function(){
        return this.changeMainContent('init-game');
    }

    this.goInitGame = function(){
        let main = this.initPlay();
        main.className = this.configs.bgImgExtra.INIT_GAME;
        this.addClickHandler();
    }

    this.goExtraPromotion = function() {
        let main = this.changeMainContent('extra-promotion');
        main.className = this.configs.bgImgExtra.EXTRA_PROMOTION;
        this.addClickHandler();
    }

    this.changeMainContent = function(templateId) {
        let template = document.getElementById(templateId);
        // let templateContent = template.content;
        let clone = document.importNode(template.content, true); // clone content

        let main = document.getElementById('main');
        this.common.addOrUpdateChildElement(main, clone);
        return main;
    }

    this.getRandomTesting = function(){
        let resultScreen = this.data.getRandomItem();
        console.log(
            resultScreen.group
            + '|' +resultScreen.message
            + '|' +resultScreen.img
        );
        return resultScreen;
    }

    this.renderRandomResult = function(){
        let resultScreenObj = this.data.getRandomItem();
        let main = this.changeMainContent('result-' + resultScreenObj.group.toLowerCase());
        // change background main
        main.className = resultScreenObj.img;

        let messages = main.getElementsByClassName('message-result-ctl');
        for (let i = 0; i < messages.length; i++) {
            messages[i].textContent = resultScreenObj.message;
        }
        if (this.playerName) {
            let names = main.getElementsByClassName('player-name-ctl');
            for (let i = 0; i < names.length; i++) {
                names[i].textContent = this.playerName;
            }
        }
        if (this.playerPhoto) {
            var img = main.querySelector(".box-content-user > img");
            img.crossOrigin = "Anonymous";
            // This function should be called after FBInstant.startGameAsync() resolves.
            img.src = this.playerPhoto;
            // console.log(this.playerPhoto);
            img.onload = function () {
                console.log('load done')
            }
            img.onerror = function (err) {
                console.log(err)
            }
        }
        this.addClickHandler();

    }

    this.start = function(){
        this.addClickHandler();
    }

    this.share = function () {
        // hello img
        // var img = "data:image/png;base64,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";
        var img = "data:image/png;base64,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UmVhZHlxyWU8AAADeGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjVkMTBjY2M5LWU4NGQtODg0Zi1hMmNhLTE0YWY2MWIwYzc4OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNjMxN0EzNUI1QTMxMUU5OTEyNjk2NzRCNTk0NDUwQSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNjMxN0EzNEI1QTMxMUU5OTEyNjk2NzRCNTk0NDUwQSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI3NzQ2Y2Y1LWQxNTgtNzY0YS05YjRlLWIzOGRmMTkwYjI2NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1ZDEwY2NjOS1lODRkLTg4NGYtYTJjYS0xNGFmNjFiMGM3ODgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9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";
        const entryPointData = FBInstant.getEntryPointData();
        console.log(entryPointData);
        var currentMessage;
        if (!document.querySelector('.message-result-ctl')) {
            currentMessage = document.getElementsByClassName('clear')[0].textContent
        } else {
            currentMessage = document.querySelector('.message-result-ctl').textContent;
        }
        html2canvas(document.getElementById('main'),{
            allowTaint: false,
            logging: false,
            useCORS: true,
        }).then(function (canvas) {
            var imgageData = canvas.toDataURL("image/png");
            // var imgageData = canvas.toDataURL('image/jpeg', 0.8);

            FBInstant.shareAsync({
                intent: 'REQUEST',
                image: imgageData, // base64Image code must be passed in img
                text: currentMessage,
                data: {myReplayData: '...'},
            }).then(function() {
                console.log('done share');
                this.common.toggleMarker(false);
            }.bind(this));
        }.bind(this))

        console.log('share after')
    }

    this.addClickHandler = function(){
        this.common.addClickHandlerToNode('request-play-ctl', 'renderRandomResult' , this, 300)
        this.common.addClickHandlerToNode('extra-promotion-ctl', 'goExtraPromotion', this, 300)
        this.common.addClickHandlerToNode('init-game-ctl', 'goInitGame', this)
        this.common.addClickHandlerToNode('btn-share', 'share', this, 200, true)
    }

}