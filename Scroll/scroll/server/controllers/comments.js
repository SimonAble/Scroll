console.log("inside of comments.js");

const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

let options = {
  new:true,
  runValidators:true
}

class Comments {
  create(req, res){
    req.body.post_id = req.params.id;
    let comment = new Comment(req.body);
    comment.save(function(err){
      if(err){
        res.json({"status": "not ok", "errors": err});
      }else{
        Post.findOneAndUpdate({_id: req.params.id}, {$push: {comments: comment}}, options, function(err, data){
          if(err){
            res.json({"status": "not ok", "errors": err});
          }else{
            res.json({"status": "ok", "data": data});
          }
        });
      }
    });
  }
  update(req, res) {
    Comment.findOneAndUpdate(
      {_id: req.params.id}, {$set: {comment: req.body.comment}}, options, function(err, comment){
      if(err){
        res.json({"status": "not ok", "errors": err});
      }else{
        let updatedComment = comment;
        Post.findOne({_id: updatedComment.post_id}, function(err, post){
          if(err){
            res.json({"status": "not ok", "errors": err});
          }else{
            let commentArray = post.comments;
            let commentIndex = commentArray.findIndex(i => i._id == updatedComment._id);
            commentArray[commentIndex] = updatedComment;
            Post.findOneAndUpdate({_id: updatedComment.post_id}, {$set: {comments: commentArray}}, options, function(err, data){
              if(err){
                res.json({"status": "not ok", "errors": err});
              }else{
                res.json({"status": "ok", "data": data});
              }
            });
          }
        });
      }
    });
  }
  delete(req, res) {
    Comment.findOne({_id: req.params.id}, function(err, comment){
      if(err){
        res.json({"status": "not ok", "errors": err});
      }else{
        Post.findOne({_id: updatedComment.post_id}, function(err, post){
          if(err){
            res.json({"status": "not ok", "errors": err});
          }else{
            let commentArray = post.comments;
            let commentIndex = commentArray.findIndex(i => i._id == updatedComment._id);
            for (let i = commentIndex; i < commentArray.length - 1; i++){
              commentArray[i] = commentArray[i+1];
            }
            commentArray.length = commentArray.length - 1;
            Post.findOneAndUpdate({_id: updatedComment.post_id}, {$set: {comments: commentArray}}, options, function(err, data){
              if(err){
                res.json({"status": "not ok", "errors": err});
              }else{
                Comment.findOneAndRemove({_id: req.params.id}, function(err, comment){
                  if(err){
                    res.json({"status": "not ok", "errors": err});
                  }else{
                    res.json({"status": "ok", "data": data});
                  }
                });
              }
            });
          }
        });
      }
    });
  }
}

module.exports = new Comments();
