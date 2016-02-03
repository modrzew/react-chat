import React, { Component } from 'react';
import MessageList from './MessageList';
import NewMessageContainer from './NewMessage';

export default class App extends Component {
    constructor () {
        super();
        this.state = {
            myName: 'modrzew',
            messages: [],
            users: ['bitrut', 'mnowakowska', 'modrzew', 'avalanchy']
        }
    }
    // DEBUG
    componentWillMount () {
        setTimeout(() => {
            this.newMessage('herp', new Date('2016-02-03T21:14:50'), 'lololo')
        }, 3000);
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
    sendMessage () {
        // TODO: ha ha
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
