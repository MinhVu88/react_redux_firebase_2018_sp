import React from 'react';

export default function Todos({todos, deleteTodo}) {
    // 1st, check if there's anything in the todos list by examining its length
    const todos_list = todos.length ? (
        todos.map(todo => {
            return (
                <div className='collection-item' key={todo.id}>
                    <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            );
        })
    ) : (<p className='center'>You have no todos left!</p>);

    return (
        <div>
            <div className='todos collection'>
                {todos_list}
            </div>
        </div>
    )
}
