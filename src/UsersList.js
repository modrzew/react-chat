import React, { Component } from 'react';

class User extends Component {
    render () {
        return <li>{this.props.nick}</li>;
    }
}

export default class UsersList extends Component {
    render () {
        return (
            <div className="header">
                <ul>
                    {this.props.users.map((user) => <User nick={user} />)}
                </ul>
            </div>
        )
    }
}
