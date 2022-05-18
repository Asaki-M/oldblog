const mysql = require('mysql')

module.exports = {
    pool: mysql.createPool({
        host: '47.119.142.51',
        user: 'oldblog',  
        password: 'bwz34yFfLR4ekBLk',  
        port: '3306',
        database: 'oldblog' 
    }),
	sqlMap: {
		select: 'select * from comments',
		add: 'insert into comments (name, comment, color, date) values (?,?,?,?)'
	},
	articleSqlMap: {
		record: 'select title,descript,times from articles',
		select: 'select * from articles',
		select_last: 'select id from articles order by id desc limit 1',
		add: 'insert into articles (id, title, descript, type, html, md, times) values (?,?,?,?,?,?,?)',
		search: 'select title,descript,imgName from articles'
	}
}
