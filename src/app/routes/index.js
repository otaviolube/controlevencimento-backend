const UserRoutes = require('./UserRoutes');
const LogRoutes = require('./LogRoutes');
const AuthRoutes = require('./AuthRoutes');

module.exports =  app => {
    app.use(UserRoutes);
    app.use(LogRoutes);
    app.use(AuthRoutes);
}