const curd = require("mongodb-curd");
const dbName = "lemon";

//自定义分类
module.exports = {
    //查找自定义图标
    getCustom(req, res, next) {
        curd.find(dbName, "custom", (rs) => {
            if (!rs) {
                res.send({ code: 0 });
            } else {
                res.send({ code: 1, data: rs })
            }
        })
    },

    //查找分类图标
    getClassify(req, res, next) {
        let { type, userId } = req.body;
        if (!type || !userId) {
            return res.send({ code: 2, msg: "参数不完整" })
        }
        curd.find(dbName, "classify", { "type": type, "userId": { $in: ["*", userId] } }, (rs) => {
            if (!rs) {
                res.send({ code: 0 });
            } else {
                res.send({ code: 1, data: rs })
            }
        })
    },

    //添加自定义分类
    addClassify(req, res, next) {
        let { type, userId, icon, name } = req.body;
        if (!type || !userId || !icon || !name) {
            return res.send({ code: 2, msg: "参数不完整" })
        }
        curd.insert(dbName, "classify", req.body, (rs) => {
            if (!rs) {
                res.send({ code: 0 });
            } else {
                res.send({ code: 1, data: rs })
            }
        })
    }
}