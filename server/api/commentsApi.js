const dbModule = require("../db/db.js")
const express = require('express')
const router = express.Router()

const conn = dbModule.pool

router.get("/select", (req, res) => {
	const sql = dbModule.sqlMap.select
	conn.query(sql, (err, rst) => {
		if (err) {
			console.log(err)
			res.send("0")
		} else{
			console.log(rst)
			res.send(rst)
		}
	})
})

router.post("/add", (req, res) => {
	const param = req.body
	const sql = dbModule.sqlMap.add
	console.log(param)
	conn.query(sql, [param.name, param.comment, param.color, param.date], (err, rst)=>{
		if (err) {
			console.log(err)
			res.send("0")
		} else{
			console.log(rst)
			res.send("1")
		}
	})
})

module.exports = router
