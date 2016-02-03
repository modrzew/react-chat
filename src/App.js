import React, { Component } from 'react';
import MessageList from './MessageList';
import NewMessageContainer from './NewMessage';
import UsersList from './UsersList';
import Connection from './connection';

export default class App extends Component {
    constructor () {
        super();
        this.state = {
            connection: new Connection((ws) => {
                console.log('Connected!');
            }, (msg) => {
                if (msg.indexOf('/users') === 0) {
                    this.setState({
                        users: msg.replace('/users ', '').split(',')
                    });
                } else {
                    msg = JSON.parse(msg);
                    this.newMessage(msg.sender, new Date(msg.timestamp), msg.message);
                }
            }),
            myName: 'modrzew',
            messages: [],
            users: ['bitrut', 'blah', 'lol']
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
                <UsersList users={this.state.users} />
                <MessageList messages={this.state.messages} />
                <NewMessageContainer sendMessage={this.sendMessage.bind(this)} />
            </div>
        );
    }
}
