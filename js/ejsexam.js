module.exports = function(app, fs)
{
     app.get('/ejsexam',function(req,res){
         res.render('ejsexam', {
             title: "EJS exam",
             length: 5,
             time : Date()
         })
     });
     // app.get('/loging', function(req, res){
     //     res.send('<h1>Login please</h1>');
     // });

}
