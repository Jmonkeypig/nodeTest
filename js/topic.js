module.exports = function(app, fs)
{
     app.get('/topic/:id',function(req,res){
       var topics = [
         'Javascript is....',
         'Nodejs is...',
         'Express is...'
       ];

       res.render('topic', {
           title: "topic exam",
           length: 5,
           time : Date(),
           topics : topics[req.params.id]
       })
     });

     app.get('/topic/:id/:mode', function(req, res){
       res.send(req.params.id+','+req.params.mode)
    })
}
