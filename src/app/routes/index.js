const UserRoutes = require('./UserRoutes');
const LogRoutes = require('./LogRoutes');

module.exports =  app => {
    app.use(UserRoutes);
    app.use(LogRoutes);
}