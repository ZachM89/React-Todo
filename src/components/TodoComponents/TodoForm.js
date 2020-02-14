import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item1: ""
        };
    }

    handleChanges = e => {
        console.log(e);
        this.setState({ [e.target.name]: e.target.value });
    };

    submitItem = e => {
        e.preventDefault();
        this.props.addItem(e, this.state.item);
    };

    render() {
        console.log('rendering form', this.state.item);

        return (
            <form onSubmit={this.submitItem}>
                <input type="text" name="item" onChange={this.handleChanges} />
                <button>Add</button>
            </form>
        );
    }
}

export default TodoForm;