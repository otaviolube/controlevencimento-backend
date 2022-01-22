const UserRoutes = require('./UserRoutes');
const LogRoutes = require('./LogRoutes');
const AuthRoutes = require('./AuthRoutes');
const AreaRoutes = require('./AreaRoutes');
const ColaboratorRoutes = require('./ColaboratorRoutes');
const CompanyRoutes = require('./CompanyRoutes');
const ItemRoutes = require('./ItemRoutes');

module.exports =  app => {
    app.use(UserRoutes);
    app.use(LogRoutes);
    app.use(AuthRoutes);
    app.use(AreaRoutes);
    app.use(ColaboratorRoutes);
    app.use(CompanyRoutes);
    app.use(ItemRoutes);
}