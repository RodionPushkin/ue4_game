const { Client } = require('pg');
const { database }  =  require( "./config.json");
const client = new Client({
    user: database.user,
    host: database.host,
    database: database.database,
    password: database.password,
    port: database.port,
});
class DB {
    async query(text, params, callback) {
        return client.query(text, params, callback)
    }
    async checkConnection() {
        client.connect();
        await client.query('SELECT NOW()', (err, res) => {
            if(!err){
                console.log("database connected at",res.rows[0].now)
                return res.rows
            }
            console.log(err)
            client.end()
        })
    }
}
module.exports = new DB()
// db.query('SELECT * FROM "User" WHERE "ID" = $1', [1], (err, result) => {
//     if (err) {
//         return console.log(err)
//     }
//     console.log(result.rows[0])
// })