console.log("inside of posts.js");

const mongoose = require("mongoose");
const Post = mongoose.model("Post");

let options = {
  new:true,
  runValidators:true
}

class Posts {
  create(req, res){
    let post = new Post(req.body);
    post.save(function(err, data){
      if(err){
        res.json({"status": "not ok", "errors": err});
      }else{
        res.json({"status": "ok", "data": data});
      }
    });
  }

  getAll(req, res){
    Post.find({}, function(err, posts){
      if(err){
        res.json({"status": "not ok", "errors": err});
      }else{
        res.json({"status": "ok", "posts": posts});
      }
    });
  }
  getById(req, res){
    Post.find({creator_id: req.params.id}).sort({"updatedAt": -1}).exec( function(err, posts){
      if(err){
        res.json({"status": "not ok", "errors": err});
      }else{
        res.json({"status": "ok", "posts": posts});
      }
    });
  }

  update(req, res) {
    console.log("log", req.params.id);
    Post.findOneAndUpdate({_id: req.params.id}, {$set: {title: req.body.title, contents: req.body.contents}}, options, function(err, data){
      if(err){
        res.json({"status": "not ok", "errors": err});
      }else{
        res.json({"status": "ok", "errors": err});
      }
    });
  }
  delete(req, res) {
    Post.findOneAndRemove({_id: req.params.id}, function(err, data){
      if(err){
        res.json({"status": "not ok", "errors": err});
      }else{
        res.json({"status": "ok", "posts": posts});
      }
    });
  }
}

module.exports = new Posts();
