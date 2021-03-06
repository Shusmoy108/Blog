const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    blog:String,
    time:Date,
    comments:[
        {
            comment:String,
            time:{type: Date, default: Date.now}
        }
    ]
});
BlogSchema.statics.getbloglist = function(cb) {
    var that = this;
    this.find(function(err, blogs) {
        if (err) cb("Server error", null);
        else{
            cb(null,blogs);
        }
    });
};
BlogSchema.statics.insertBlog = function(blog, cb) {
    if(blog) {
        const Blog = new this();
        Blog.blog=blog;
        Blog.time=Date.now();
        Blog.save(function(err, Blog) {
            if (err){
                console.log(err);
                cb(err, null);
            }
            else{
                console.log(Blog);
                cb(null, Blog);
            }

        });
    }
    else {
        cb("Fill Up All Details", null);
    }
};
module.exports = mongoose.model('Blog', BlogSchema);
