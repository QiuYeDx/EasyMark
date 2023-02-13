export class PicManager{
    constructor(array = []) {
        this._picArray = array;
        this._infoList = [];
        this.test = "I'm a pic manager.";
    }
    addPic(pic){
        this._picArray.push(pic);
    }
    addInfo(info){
        this._infoList.push(info);
    }
    getNumOfPic(){
        return this._picArray.length;
    }
    getAllPic(){
        return this._picArray;
    }
    getAllInfo(){
        return this._infoList;
    }
    re0(){
        this._picArray = [];
        this._infoList = [];
    }
}

export class Pic{
    constructor(dataUrl){
        this.dataUrl = dataUrl;
        this.tags={};
    }
    initTags(){
        // console.log("initTags():")
        var image = new Image();
        let self = this;
        image.onload = function(){
            // console.log('image loaded');
            EXIF.getData(image, function(){
                self.tags = EXIF.getAllTags(this);
                // console.log("initTags():");
                // console.log(EXIF.pretty(this));
            });
        };
        image.src = this.dataUrl;
    }
    getTags(){ // get AllTags json
        return this.tags;
    }
    getDataUrl(){
        return this.dataUrl;
    }
}

export var picManager = new PicManager();