import React, {Component} from 'react';

class Message extends Component {
    getTime () {
        var hour = this.props.date.getHours();
        if (hour < 10) {
            hour = '0' + hour;
        }
        var minute = this.props.date.getMinutes();
        if (minute < 10) {
            minute = '0' + minute;
        }
        var second = this.props.date.getSeconds();
        if (second < 10) {
            second = '0' + second;
        }
        return [hour, minute, second].join(':');
    }
    render () {
        return <li>[{this.getTime()}] {this.props.name}: {this.props.content}</li>;
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
