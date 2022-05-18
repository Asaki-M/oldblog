const dbModule = require("../db/db.js")
const express = require('express')
const router = express.Router()

const conn = dbModule.pool

// 首页查询文章接口
router.get('/indexSel', (req, res)=>{
	const sel_sql = dbModule.articleSqlMap.search
	conn.query(sel_sql, (err, rst)=>{
		if (err) {
			console.log(err)
		} else{
			res.send(rst);
		}
	})
})


// 查询文章
router.get('/select',(req,res)=>{
	const id = req.query.id
	const sel_sql = dbModule.articleSqlMap.select + " where id = '" + id + "'"
	console.log(sel_sql)
	conn.query(sel_sql, (err, rst)=>{
		if (err) {
			res.send(err)
		} else{
			res.send(rst[0])
		}
	})
});

// 添加文章接口
router.post('/add', (req, res) => {
	const params = req.body;
	const sel_last = dbModule.articleSqlMap.select_last;
	const add_sql = dbModule.articleSqlMap.add; 
	
	conn.query(sel_last, (err, rst) => {
		if(err) {
			console.log(err);
		}
		else {
			const id = rst[0].id + 1;
			const date = new Date();
			const times = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate()
			console.log(times)
			console.log(add_sql)
			conn.query(add_sql, [id, params.title, params.descript, params.type, params.mdhtml, params.mdtext, times], (error, results) => {
				if(error) {
					console.log(error);
					res.send("1"); // 1 表示数据添加失败
				}
				else {
					res.send("0"); // 0 表示数据添加成功
				}
			});
		}
	});
});


// 文章归档接口
router.get('/record', (req, res) =>{
	const sql = dbModule.articleSqlMap.record
	conn.query(sql, (rst, err) =>{
		if (err) {
			res.send(err)
		} else{
			res.send(rst)
		}
	})
})

module.exports = router;