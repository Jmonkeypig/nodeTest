module.exports = function(app, fs)
{
  app.post('/auth/login', function(req, res){
    var username = req.body.username;
    var pw = req.body.password;
    res.send(username+','+pw);
  });
}
