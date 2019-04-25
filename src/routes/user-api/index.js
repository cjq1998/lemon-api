const curd = require("mongodb-curd");

module.exports = {
    getUser(req, res, next) {
        curd.find("lemon", "user", (rs) => {
            if (!rs) {
                res.send({ code: 0 });
            } else {
                res.send({ code: 1, data: rs })
            }
        }, {
            limit: 1
        })
    }

}