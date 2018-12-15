var bodyParser=require('body-parser');
var data = [{item: 'code'},{item: 'code even more'}]
// var urlencd = bodyParser.urlencoded({extended:false});
var urlen= bodyParser.urlencoded({ extended: false })
module.exports = function(app){
  app.get('/todo',function(req,res){
    // console.log('ho ja');
    res.render('todo',{todos: data});
  });
  app.post('/todo',urlen,function(req,res){
    data.push(req.body);
    res.render('todo',{todos:data});
  });
  app.delete('/todo/:item',function(req,res){
    data = data.filter(function(todo){
      return todo.item.replace(/ /g, '-') !== req.params.item;
    })
    res.render('todo',{todos:data});
  });
}
