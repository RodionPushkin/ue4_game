const db = require('../../database');
module.exports = router => {
    router.get(`/server/`, (req, res) => {
        db.query('SELECT * FROM "Server"', [], (err, result) => {
            if (err) {
                return console.log(err)
            }
            res.json(result.rows)
        })
    })

    router.post(`/server/`, (req, res) => {
        console.log("server try to auth",req.body.ip)
        if(req.body?.ip){
            db.query('SELECT * FROM "Server" WHERE "IP" = $1', [req.body.ip], (err, result) => {
                if (err) {
                    return console.log(err)
                }
                if(result.rows.length == 0){
                    db.query('INSERT INTO "Server" ("IP","Map") VALUES ($1,$2)', [req.body.ip,req.body.map], (err2, result2) => {
                        if (err2) {
                            return console.log(err2)
                        }
                        res.json(req.body.ip)
                    })
                }else{
                    res.json(req.body.ip)
                }
            })
        }else{
            res.json({"error": true})
        }
    })
}