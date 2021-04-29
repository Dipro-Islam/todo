import React, { useState } from 'react'

function TodoForm() {

    const [input, setInput] = useState('');

    const submitHandler = e => {
        e.preventDefault();
    }


    return (
        <div>
            <form className="todo-form" onSubmit={submitHandler}>

                <input className='todo-input'
                    type='text'
                    placeholder='Add a Event'
                    value={input}
                    name='text' />

                <button className='todo-btn'>Add</button>

            </form>
        </div>
    )
}

export default TodoForm
