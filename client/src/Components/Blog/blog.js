import React, {Component} from 'react';
import Comment from './comment';

export default class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.deleteblog = this.deleteblog.bind(this);
        this.addcomment = this.addcomment.bind(this);
        this.deletecomment = this.deletecomment.bind(this);
}


    handleNameChange(e) {
        this.setState({name: e.target.value});
    }
    deleteblog() {

        console.log(this.props.id);
       this.props.deleteblog(this.props.id);
    }
    addcomment() {

        console.log(this.props.id);
        this.props.addcomment(this.props.id,this.state.name);
        this.setState({name: ""});

    }
    deletecomment(id){
        this.props.deletecomment(this.props.id,id);

    }
    render() {
         let comments=[];
        let allcomment=[];
        allcomment=this.props.comments;
        if(allcomment.length>0){
            for(var i=0;i<allcomment.length;i++) {
                comments.push(<Comment comment={this.props.comments[i].comment} time={this.props.comments[i].time} id={this.props.comments[i]._id}  deletecomment={this.deletecomment}/>);
            }
        }
        return (
            <div>
                <h4> {this.props.blog} </h4>
                <h4> {this.props.time} </h4>
                <h4> {this.props.id} </h4>
                <button  onClick={this.deleteblog}>Delete Blog</button>
                <input onChange={this.handleNameChange} value={this.state.name}/>
                <button onClick={this.addcomment}>Add comment</button>
                {comments}
            </div>
        )
    }
}