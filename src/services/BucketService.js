const Minio = require('minio');

class BucketService {
    constructor(){
        this.minioClient = new Minio.Client({
            endPoint: "localhost",
            port: 9000,
            useSSL: false,
            accessKey: "minio-access-key",
            secretKey: "minio-secret-key",
        });
    }

    async uploadFile (bucketName, objectName, filePath){
        try{
            await this.minioClient.putObject(
                bucketName,
                objectName,
                filePath
            )
            console.log('Arquivo enviado com sucesso!');
            return true;
        }catch(error){
            console.log(error);
            return false;
        }
    }

    async downloadFile(bucketName, key){
       
    }

}

module.exports = new BucketService();