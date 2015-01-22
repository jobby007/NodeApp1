/* GET users listing. */
exports.randomStuff = function(req, res){
  res.send('this is my stuff');
};

exports.findById = function(req, res) {
	res.send('you asked for this id :' + req.params.id);
};
