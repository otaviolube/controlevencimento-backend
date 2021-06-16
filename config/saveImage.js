const multer = require('multer');

 // Os objetos e suas funções são automaticamentes executadas pela biblioteca, no momento do Upload.
 // Nessas funções, teremos acesso a requisição, a alguns dados do arquivo, e um callback que vamos

// Vamos expotar nosso módulo multer, que vamos executar passando as nossas configurações
module.exports = (multer({
  
    // Como deve ser feito o armazenamento dos arquivos?
    storage: multer.diskStorage({
      
        // Qual deve ser o destino deles?
        destination: (req, file, cb) => {
         
            // Setamos o destino como segundo paramêtro do callback
            cb(null, './app/public/uploads');
        },
        
        // E como devem se chamar?
        filename: (req, file, cb) => {
          
            // Setamos o nome do arquivo que vai ser salvado no segundo paramêtro
            // Apenas concatenei a data atual com o nome original do arquivo, que a biblioteca nos disponibiliza.
            cb(null, Date.now().toString() + '-' + file.originalname);

        }
    })
}));