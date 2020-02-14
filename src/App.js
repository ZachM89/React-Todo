import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

const todo = [
    {
        name: 'win',
        id: 1,
        finished: false
    },
    {
        name: 'get money',
        id: 2,
        finished: false
    },
    {
        name: 'be awesome',
        id: 3,
        finished: false
    }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor() {
        super();
        this.state = {
            todo
        };
    }

    addItem = (e, item) => {
        e.preventDefault();

        const newItem = {
            name: item,
            id: Date.now(),
            finished: false
        };

        this.setState({
            todo: [...this.state.todo, newItem]
        });
    };

    toggleItem = itemId => {
        console.log(itemId);

        this.setState({
            todo: this.state.todo.map(item => {
                console.log(item);
                if(itemId === item.id) {
                    return {
                        ...item,
                        finished: !item.finished
                    };
                }

                return item;
            })
        });
    };

    clearFinished = e => {
        e.preventDefault();
        this.setState({
            todo: this.state.todo.filter(item => !item.finished)
        });
    };

    render() {
        console.log("rendering...");
        return (
        <div className="App">
            <h2>Welcome to your Todo App!</h2>
            <div className="header">
                <h1>Todo List</h1>
                <TodoForm addItem={this.addItem} />
            </div>
            <TodoList
                todo={this.state.todo}
                toggleItem={this.toggleItem}
                clearFinished={this.clearFinished}
            />
        </div>
        );
    }
}

export default App;
