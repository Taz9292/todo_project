import React, { useEffect, useState } from 'react'
import './style.css'

export default function ToDo() {

    const [input, setInput] = useState('');
    const [tasks, setTasks] = useState([])

    // Load tasks from local storage on component mount
    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    // Save tasks to local storage whenever tasks change
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (input.trim() === '') return;
        const newTasks = [...tasks, { text: input, priority: false }];
        setTasks(newTasks);
        setInput('');
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const togglePriority = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, priority: !task.priority } : task
        );
        setTasks(updatedTasks);
    };
    return (
        <>
            <div className='container'>
                <div className='todo-app'>
                    <h2>To-Do Application</h2>
                    <div className='row'>
                        <input
                            type="text"
                            placeholder='Add your task'
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button onClick={addTask}>Add</button>
                    </div>

                    <div className="text_container">
                        <ul className="text_list">
                            {tasks.map((task, index) => (
                                <li key={index} className={`text_row ${task.priority ? 'high-priority' : ''}`}>
                                    <span className="task-text">{task.text}</span>
                                    <div className="text_buttons">
                                        <button className="priority" onClick={() => togglePriority(index)}>Priority</button>
                                        <button className="delete" onClick={() => deleteTask(index)}>Delete</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}









