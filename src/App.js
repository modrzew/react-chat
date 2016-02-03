import React, { Component } from 'react';
import MessageList from './MessageList';
import NewMessageContainer from './NewMessage';
import UsersList from './UsersList';
import Connection from './connection';
import NickNameView from './NickNameView';

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
            myName: '',
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
    changeName (name) {
        this.setState({
            myName: name
        })
        this.sendMessage('/username ' + name);
    }
    render() {
        return (
            <div>

                {(
                    !this.state.myName ?
                        <NickNameView changeName={this.changeName.bind(this)} />
                    :
                        <div>
                            <div>
                                <UsersList users={this.state.users} />
                                <MessageList messages={this.state.messages} />
                            </div>
                            <div className="col-md-9 col-md-offset-3">
                                <NewMessageContainer sendMessage={this.sendMessage.bind(this)} />
                            </div>
                        </div>
                )}
        );
    }
}
