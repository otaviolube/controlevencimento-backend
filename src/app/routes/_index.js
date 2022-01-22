const UserRoutes = require('./UserRoutes');
const LogRoutes = require('./LogRoutes');
const AuthRoutes = require('./AuthRoutes');
const AreaRoutes = require('./AreaRoutes');
const ColaboratorRoutes = require('./ColaboratorRoutes');
const CompanyRoutes = require('./CompanyRoutes');
const ItemRoutes = require('./ItemRoutes');
const SubitemRoutes = require('./SubitemRoutes');
const ClientRoutes = require('./ClientRoutes');
const ContractRoutes = require('./ContractRoutes');
const ExpirationRoutes = require('./ExpirationRoutes');

module.exports =  app => {
    app.use(UserRoutes);
    app.use(LogRoutes);
    app.use(AuthRoutes);
    app.use(AreaRoutes);
    app.use(ColaboratorRoutes);
    app.use(CompanyRoutes);
    app.use(ItemRoutes);
    app.use(SubitemRoutes);
    app.use(ClientRoutes);
    app.use(ContractRoutes);
    app.use(ExpirationRoutes);
}