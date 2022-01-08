const multer = require('multer');

class UploadController {
    constructor(){
        this.photofilter = {

        }

        this.limits = {
            
        }
    }

    uploadSinglePicture(file){
        multer({ storage: multer.memoryStorage() }).single(file)
    }
}

module.exports = new UploadController();