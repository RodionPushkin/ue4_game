const db = require('../../database');
const md5 = require('md5')
module.exports = router => {
    router.get(`/user/:id`, (req, res) => {
        db.query('SELECT * FROM "User" WHERE "ID" = $1', [req.params.id], (err, result) => {
            if (err) {
                res.json({error: "ошибка на сервере"})
                return console.log(err)
            }
            res.json(result.rows[0] == undefined ? {error: "пользователь не существует"} : {user: result.rows[0]})
        })
    })

    router.put(`/user/`, (req, res) => {
        if(req.body?.email && req.body?.password){
            const token = md5(md5(req.body.email.toLowerCase().trim())+"ue4game"+md5(req.body.password.toLowerCase()))
            db.query('SELECT * FROM "User" WHERE "Token" = $1', [token], (err, result) => {
                if (err) {
                    res.json({error: "ошибка на сервере"})
                    return console.log(err)
                }
                res.json(result.rows[0] == undefined ? {error: "пользователь не существует"} : {user: result.rows[0]})
            })
        }
        else if(req.body?.token){
            db.query('SELECT * FROM "User" WHERE "Token" = $1', [req.body.token], (err, result) => {
                if (err) {
                    res.json({error: "ошибка на сервере"})
                    return console.log(err)
                }
                res.json(result.rows[0] == undefined ? {error: "пользователь не существует"} : {user: result.rows[0]})
            })
        }
        else{
            console.log(req)
            res.json({error: "не хватает параметров"})
        }
    })

    router.post(`/user/`, (req, res) => {
        if(req.body?.email && req.body?.password && req.body?.nickname){
            const token = md5(md5(req.body.email.toLowerCase().trim())+"ue4game"+md5(req.body.password.toLowerCase()))
            db.query('SELECT * FROM "User" WHERE "Email" = $1', [req.body.email.toLowerCase().trim()], (err, result) => {
                if (err) {
                    res.json({error: "ошибка на сервере"})
                    return console.log(err)
                }
                if(result.rows[0] == undefined){
                    db.query('INSERT INTO "User" ("Email","Token","Nickname") VALUES ($1,$2,$3)', [req.body.email.toLowerCase().trim(),token,req.body.nickname], (err2, result2) => {
                        if (err2) {
                            res.json({error: "ошибка на сервере"})
                            return console.log(err2)
                        }
                        db.query('SELECT * FROM "User" WHERE "Token" = $1', [token], (err3, result3) => {
                            if (err3) {
                                res.json({error: "ошибка на сервере"})
                                return console.log(err3)
                            }
                            res.json(result3.rows[0] == undefined ? {error: "пользователь не существует"} : {user: result3.rows[0]})
                        })
                    })
                }else{
                    res.json({error: "пользователь уже зарегистрирован"})
                }
            })
        }else{
            res.json({error: "не хватает параметров"})
        }
    })
}