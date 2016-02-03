import React, { Component } from 'react';

export default class NickNameView extends Component {
  render() {
    return (
      <NicknameForm changeName={this.props.changeName} />
    );
  }
}

var GoButton = React.createClass({
    render: function() {
        return (
            <button type="button" class="btn btn-primary" onClick={this.props.changeName}>
                Go
            </button>
        );
    }
});


var NicknameInput = React.createClass({
    handleKeyPress: function(event) {
        if (!event.target.value) {
            return;
        }
        if (event.key === 'Enter') {
            this.props.changeName(event);
        }
    },
    render: function() {
        return (<input type="text" value={this.props.value}  onChange={this.props.handleClick} onKeyPress={this.handleKeyPress} />);
    }
});

var NicknameForm = React.createClass({
    getInitialState: function() {
        return {
            name: ''
        };
    },
    handleClick: function(event) {
        this.setState({ name: event.target.value });
    },
    changeName: function() {
        this.props.changeName(this.state.name);
        this.setState({ name: ''});
    },
    render: function() {
        return (
            <div>
                <label>Nickname</label>
                <NicknameInput value={this.state.name} handleClick={this.handleClick} changeName={this.changeName} />
                <GoButton changeName={this.changeName}/>
            </div>
        );
    }
});
