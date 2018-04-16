module.exports = function(app, fs, conn)
{
     app.get('/topic/:id',function(req,res){
       var sql = 'SELECT id, title, description FROM topic';
       conn.query(sql, function(err, rows, fields){
         if(err){
           console.log(err);
           res.status(500).send('Internal Server Error');
         } else {
           var id = req.params.id;
           // console.log(rows[id].description);
           res.render('topic', {
               title: "topic exam",
               length: 5,
               time : Date(),
               topics : rows,
               description : rows[id].description,
               id : id
           })
         }
       });
     });


     app.get('/add', function(req, res){
        res.render('add',{
           title: "topic exam"
        });
     });

     app.post('/add', function(req, res){
        var title = req.body.title;
        var description = req.body.description;
        var author = req.body.author;
        var sql = 'INSERT INTO topic (title, description, author) VALUES(?, ?, ?)';
        conn.query(sql, [title, description, author], function(err, result, fields){
          console.log(result);
          if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');
          } else {
            res.redirect('/topic/0');
          }
        });
      })

      app.get('/topic/:id/delete', function(req, res){
        var id = req.params.id;
        var sql = 'DELETE FROM topic WHERE id=?';
        conn.query(sql, [id], function(err, result){
          res.redirect('/topic/0');
        });
      });


     app.get('/topic/:id/:mode', function(req, res){
       res.send(req.params.id+','+req.params.mode)
    })
}
