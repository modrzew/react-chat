import React, { Component } from 'react';
import MessageList from './MessageList';
import NewMessageContainer from './NewMessage';

export default class App extends Component {
    constructor () {
        super();
        this.state = {
            myName: 'modrzew',
            messages: [], // [1, 2, 3, 4].map((obj) => {return {id: obj, name: obj, content: obj}; }),
            users: ['bitrut', 'mnowakowska', 'modrzew', 'avalanchy']
        }
    }
    sendMessage (content) {
        this.setState({
            messages: this.state.messages.concat([{
                name: this.state.myName,
                content: content
            }])
        });
    }
    render() {
        return (
            <div>
                <MessageList messages={this.state.messages} />
                <NewMessageContainer sendMessage={this.sendMessage.bind(this)} />
            </div>
        );
    }
}
