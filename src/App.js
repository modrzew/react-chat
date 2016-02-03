import React, { Component } from 'react';
import MessageList from './MessageList';
import NewMessageContainer from './NewMessage';
import Connection from './connection';

export default class App extends Component {
    constructor () {
        super();
        this.state = {
            connection: new Connection((ws) => {
                console.log('Connected!');
            }, (msg) => {
                this.newMessage('someone', new Date(), 'something');
            }),
            myName: 'modrzew',
            messages: [],
            users: []
        }
    }
    newMessage (name, date, content) {
        this.setState({
            messages: this.state.messages.concat([{
                name: name,
                date: date,
                content: content
            }])
        });
    }
    sendMessage (content) {
        this.state.connection.send(content);
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
