import { useState } from "react";

function TodoItem({todo, onDelete, onUpdate}) {
    const [inputValue, setInputValue] = useState(todo.text);
    const [isEditing, setIsEditing] = useState(false);

    function handleDelete() {
        onDelete(todo.id);
    }

    function handleInput(event) {
        setInputValue(event.target.value);
    }
    
    function handleSave() {
        setIsEditing(false);
        onUpdate(todo.id, inputValue);
    }

    return (
        <li style={{display: "flex"}}>
            <div style={{fontSize: "1.5rem", marginRight: "12px"}}>
                <input type="checkbox" name="" id="" />
                <span style={{ display: !isEditing ? "inline-block" : "none" }}>{todo.text}</span>
                <input type="text" value={inputValue} onInput={handleInput} style={{ display: isEditing ? "inline-block" : "none" }} />
            </div>

            <div>
                <button onClick={handleDelete}>Supprimer</button>
                <button onClick={()=> setIsEditing(true)} style={{ display: !isEditing ? "inline-block" : "none"}}>Modifier</button>
                <button onClick={handleSave} style={{ display: isEditing ? "inline-block" : "none" }}>Sauvegarder</button>
            </div>
        </li>
    )
}

export default TodoItem;