import React, {Component} from 'react';


export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.deletecomment = this.deletecomment.bind(this);
    }


    handleNameChange(e) {
        this.setState({name: e.target.value});
    }
    deletecomment() {

        console.log(this.props.id);
        this.props.deletecomment(this.props.id);
    }
    render() {

        return (
            <div>
                <h4> {this.props.comment} </h4>
                <h4> {this.props.time} </h4>
                <h4> {this.props.id} </h4>
                <button  onClick={this.deletecomment}>Delete Comment</button>
            </div>
        )
    }
}