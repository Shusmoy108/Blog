import React, {Component} from 'react';
import Blog from './Blog/blog';
import Axios from '../Axios';
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            blogs:[]
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleloaddata = this.handleloaddata.bind(this);
        this.addblog = this.addblog.bind(this);
        this.deleteblog = this.deleteblog.bind(this);
        this.addcomment = this.addcomment.bind(this);
        this.deletecomment = this.deletecomment.bind(this);
    }

    handleloaddata(){
        let that=this;
        console.log("header");
        Axios.getBlogList(function(err, blogs){
            if(err)
            {

            }
            else {
                console.log(blogs.data);
                that.setState({blogs: blogs.data});
            }
        });
    }
    addblog(){
        let that=this;
        console.log(this.state.name);
        Axios.addblog(this.state.name,function(err, blogs){
            if(err) that.setState({msgLogin : err});
            else {
                console.log(blogs);
                that.setState({blogs: blogs.data});
                that.setState({name: ''});
                console.log(that.state.name);
            }
        });

    }
    handleNameChange(e) {
        this.setState({name: e.target.value});

    }
    deleteblog(e){
        let that=this;
        console.log(e);
        Axios.deleteblog(e,function(err, blogs){
            if(err) that.setState({msgLogin : err});
            else {
                console.log(blogs)
                that.setState({blogs: blogs.data});
                that.setState({name: ''});
                console.log(that.state.name);
            }
        });
    }

    addcomment(id,comment){
        let that=this;
        console.log(id);
        Axios.addcomment(id,comment,function(err, blogs){
            if(err) that.setState({msgLogin : err});
            else {
                console.log(blogs);
                that.setState({blogs: blogs.data});
                that.setState({name: ''});
                console.log(that.state.name);
            }
        });

    }
    deletecomment(id,comment_id){
        let that=this;
        console.log(id);
        Axios.deletecomment(id,comment_id,function(err, blogs){
            if(err) that.setState({msgLogin : err});
            else {
                console.log(blogs);
                that.setState({blogs: blogs.data});
                that.setState({name: ''});
                console.log(that.state.name);
            }
        });
    }

    render() {
        let blogs=[];
        console.log(this.state.blogs.length);
        if(this.state.blogs.length>0) {
            for(var i=0;i<this.state.blogs.length;i++) {
                blogs.push(<Blog blog={this.state.blogs[i].blog} time={this.state.blogs[i].time} id={this.state.blogs[i]._id} comments = {this.state.blogs[i].comments} deleteblog={this.deleteblog} addcomment={this.addcomment} deletecomment={this.deletecomment}/>);
            }
        }
        return (
            <div>
                <h2> Header </h2>
                <button onClick={this.handleloaddata}>Load Blogs</button><br/><br/>
                <input onChange={this.handleNameChange} value={this.state.name}/><br/><br/>
                <button onClick={this.addblog} >Add Blog</button>
                {blogs}

            </div>
        )
    }
}