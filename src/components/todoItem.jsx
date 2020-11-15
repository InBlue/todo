import { useState } from "react"

export default function TodoItem(props) {

    const [showTick, setShowTick] = useState(false);

    const changeToTick = (v) => {
        setShowTick(v);
        console.log(v);
    }

    return (
        <div className="todo-item">
            <div className="todo-action">
                {!showTick ? <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#607D8B" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="9" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#607D8B" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="9" /><path d="M9 12l2 2l4 -4" /></svg> }
            </div>
            <h3 className="todo-item-task">{props.name}</h3>
        </div>
    )
}