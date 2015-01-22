/* GET users listing. */
exports.randomStuff = function(req, res){
  res.send('this is my stuff');
};

exports.findById = function(req, res) {
	
	/* var cs = "Driver={SQL Server Native Client 11.0};Server=tcp:i3optwqeq6.database.windows.net,1433;Database=SeolingListyWebApi_db;Trusted_Connection={Yes}";
	
	sql.open(cs, function(err, conn) {
		if(err) {
			res.send('ERROR :' + err);
			return;
		}
		
		conn.QueryRaw("SELECT * FROM List", function(err, results) {
			if(err) {
				res.send('ERROR :' + err);
				return;
			}
			
			res.send('RESULTS!! :' + results.rows.count);
			return;
			
		});
		
	}); */
	
	res.send('you asked for this id :' + req.params.id);
};
