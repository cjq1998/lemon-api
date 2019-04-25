const curd = require("mongodb-curd");
const dbName = "lemon";

//首页账单删除
module.exports = {
    //删除首页账单
    removeBill(req, res) {
        let { _id } = req.query;
        if (!_id) {
            return res.send({ code: 2, msg: "参数不完整" })
        }

        curd.remove(dbName, "bill", req.query, (rs) => {
            if (!rs) {
                res.send({ code: 0 });
            } else {
                res.send({ code: 1 })
            }
        })
    },


    //添加首页账单
    addBill(req, res) {
        let { icon, Time, name, money, type, userId } = req.body;
        if (!icon || !Time || !name || !money || !type || !userId) {
            return res.send({ code: 2, msg: "参数不完整" })
        }

        curd.insert(dbName, "bill", req.body, (rs) => {
            if (!rs) {
                res.send({ code: 0 });
            } else {
                res.send({ code: 1 })
            }
        })
    },

    //查找首页账单
    findBill(req, res) {
        let { Time, type, name } = req.body;
        if (!Time) {
            return res.send({ code: 2, msg: "参数不完整" })
        }

        //设置查询条件
        let query = { Time: new RegExp(Time) };
        if (type) {
            query.type = type
        }
        if (name) {
            query.name = { $in: name.split(',') };
        }
        curd.find(dbName, "bill", query, (rs) => {
            if (!rs) {
                res.send({ code: 0 });
            } else {
                res.send({ code: 1, data: rs })
            }
        })
    },

}