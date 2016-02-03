import React, { Component } from 'react';

class Input extends Component {
    handleKeyPress (event) {
        if (!event.target.value) {
            return;
        }
        if (event.key === 'Enter') {
            this.props.sendMessage(event);
        }
    }
    render () {
        return <input type="text" value={this.props.value} onChange={this.props.handleChange} onKeyPress={this.handleKeyPress.bind(this)} />;
    }
}

class Button extends Component {
    render () {
        return <button onClick={this.props.sendMessage}>Click</button>;
    }    
}

export default class NewMessageContainer extends Component {
    constructor () {
        super();
        this.state = { value: '' };
    }
    handleChange (event) {
        this.setState({ value: event.target.value })
    }
    sendMessage () {
        this.props.sendMessage(this.state.value);
        this.setState({ value: '' });
    }
    render () {
        return (
            <div className="col-md-9 col-md-offset-3">
                <Input value={this.state.value} handleChange={this.handleChange.bind(this)} sendMessage={this.sendMessage.bind(this)} />
                <Button sendMessage={this.sendMessage.bind(this)} />
            </div>
        );
    }
}
