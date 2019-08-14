var Game = function (name, photo) {
    this.playerName = name;
    this.playerPhoto = photo;
    this.data = null;
    var self = this;
    this.configs = null;
    this.common = null;

    this.init = function(){
        // this.player = player;// inject player object FB instant game

        this.configs = new configs();
        this.common = new common();
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
        console.log(resultScreen.group
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
            let imgs = main.querySelector(".box-content-user > img");
            console.log(imgs)
            for (let i = 0; i < imgs.length; i++) {
                imgs[i].crossOrigin = 'anonymous';
// This function should be called after FBInstant.startGameAsync()
// resolves.
//         playerImage.src = FBInstant.player.getPhoto();
                imgs[i].src = this.playerPhoto;
                imgs[i].onload = function () {
                    console.log('load done')
                }
                imgs[i].onerror = function (err) {
                    console.log(err)
                }
            }
        }
        this.addClickHandler();

    }

    this.start = function(){
        this.addClickHandler();
    }

    this.addClickHandler = function(){
        this.common.addClickHandlerToNode('request-play-ctl', 'renderRandomResult' , this)
        this.common.addClickHandlerToNode('extra-promotion-ctl', 'goExtraPromotion', this)
        this.common.addClickHandlerToNode('init-game-ctl', 'goInitGame', this)
    }
}