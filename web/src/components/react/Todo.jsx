import './assets/css/global.css';
import _css from "./Todo.module.css";
import { MdAdd, MdDelete, MdEdit, MdSave } from "react-icons/md";
import { useState } from "react";
import Checkbox from "./components/CheckBox";

function createTask(text) {
    return {
        text: text ?? "",
        completed: false,
        isEditing: false, // Track whether the task is being edited
    };
}

function isNullOrWhitespace(value) {
    return value == null || value.trim() === "";
}


function ToDoList() {
    const [tasks, setTasks] = useState([]);   // Store the tasks in state
    const [newTask, setNewTask] = useState(""); // Store the new task input

    function addTask(event) {
        event.preventDefault(); // Prevent page refresh on form submission

        if (!isNullOrWhitespace(newTask)) {
            const task = createTask(newTask);
            setTasks([...tasks, task]);
            setNewTask(""); // Clear the input field after adding the task
        }
    };

    // Function to toggle the completion state of a task
    function toggleCompletion(taskIndex) {
        const updatedTasks = tasks.map((task, i) =>
            i === taskIndex ? { ...task, completed: !task.completed } : task
        );

        setTasks(updatedTasks);
    };

    // Function to remove a task from the list
    const removeTask = (taskIndex) => {
        const updatedTasks = tasks.filter((_, i) => i !== taskIndex);
        setTasks(updatedTasks);
    };

    // Toggle task editing mode
    const toggleEdit = (taskIndex) => {
        const updatedTasks = tasks.map((task, i) =>
            i === taskIndex ? { ...task, isEditing: !task.isEditing } : task
        );
        setTasks(updatedTasks);
    };

    // Update task text when in editing mode
    const updateTaskText = (e, index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, text: e.target.value } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h2 className={_css.title}>To-Do List</h2>

            {/* Wrap the input and button inside a form */}
            <form className={_css['form-add']} onSubmit={addTask}>
                <input type="text" placeholder="Nouvelle tache..." value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                <button className={_css['btn-add']} type="submit"><MdAdd className='ico' /></button>
            </form>

            <ul className={_css['todo-list']}>
                {tasks.map((task, index) => {
                    const showOnEditing = task.isEditing ? "" : "hidden";
                    const hideOnEditing = task.isEditing ? "hidden" : "";
                    const hideOnCompleted = task.completed ? "hidden" : "";
                    const status = task.completed ? "completed" : task.isEditing ? "editing" : "active";

                    return (
                        <li key={index} className={`${_css['todo']}`} data-status={status}>
                            <div className={`${_css['todo-task']} ${hideOnEditing}`}>
                                <Checkbox checked={task.completed} className={_css['todo-checkbox']} onChange={() => toggleCompletion(index)} />
                                <span className={_css['todo-text']} onClick={() => toggleEdit(index)} >{task.text}</span>
                            </div>
                            <input type="text" value={task.text} className={`${_css['todo-input']} ${showOnEditing}`}
                                onChange={(e) => updateTaskText(e, index)} // Update task text while editing
                                onBlur={() => toggleEdit(index)} // Save changes when the input loses focus
                                onKeyDown={(e) => { if (e.key === "Enter") { toggleEdit(index); } }} />

                            <div className={_css['todo-actions']}>
                                <button className={`${_css['btn-delete']} ${hideOnEditing}`} onClick={() => removeTask(index)}><MdDelete className='ico small' /></button>
                                <button className={`${_css['btn-edit']} ${hideOnEditing} ${hideOnCompleted}`}  onClick={() => toggleEdit(index)}><MdEdit className='ico small' /></button>
                                <button className={`${_css['btn-save']} ${showOnEditing}  ${hideOnCompleted}`} onClick={() => toggleEdit(index)}><MdSave className='ico small' /></button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default ToDoList;
