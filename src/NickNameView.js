import React, { Component } from 'react';

export default class NickNameView extends Component {
  render() {
    return (
      <NicknameForm />
    );
  }
}

var GoButton = React.createClass({
    render: function() {
        return (
            <button type="button" class="btn btn-primary" onClick={this.props.onClick}>
                Go
            </button>
        );
    }
});


var NicknameInput = React.createClass({
    render: function() {
        return (<input type="text" ref="nameValue"/>);
    }
});

var NicknameForm = React.createClass({
    handleClick: function(event) {
        this.refs.nickname.refs.nameValue.value;
        debugger;
    },
    render: function() {
        return (
            <form>
            <label>Nickname</label>
            <NicknameInput ref="nickname" />
            <GoButton onClick={this.handleClick}/>
            </form>
        );
    }
});
