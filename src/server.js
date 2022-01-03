const app = require('./app');

app.listen(process.env.PORT, () => console.log(`Servidor operacional na porta ${process.env.PORT}`));