module.exports = (router) => {
    require('./server/route')(router)
    require('./user/route')(router)
}