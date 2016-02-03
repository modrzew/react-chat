import React, {Component} from 'react';

class Message extends Component {
    render () {
        return <li>{this.props.name}: {this.props.content}</li>;
    }
}


export default class MessageList extends Component {
    render() {
        return (
            <ul>
                {this.props.messages.map((msg) => <Message {...msg} />)}
            </ul>
        )
    }
}
