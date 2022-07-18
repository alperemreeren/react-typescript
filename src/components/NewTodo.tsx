import React from 'react';

// styles
import './NewTodo.css'

type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
    const textInputRef = React.useRef<HTMLInputElement>(null)

    const todoSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        const enteredText: string = textInputRef.current!.value;
        props.onAddTodo(enteredText)
    };

    return (
        <form onSubmit={todoSubmitHandler}>
            <div className='form-control'>
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id="todo-text" ref={textInputRef} placeholder='Task' />
            </div>
            <button type='submit'>ADD TODO</button>
        </form>
    )
}

export default NewTodo;