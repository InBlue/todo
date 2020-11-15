import { useState } from "react"

export default function TodoItem(props) {
    const [showTick, setShowTick] = useState(false);

    const changeToTick = (v) => {
        setShowTick(v);
    }

    return (
        <div id={props.id} className="todo-item">
            <div className="todo-left">
                <div className="todo-action" onClick={() => props.toggle(props.id)}>
                    {!showTick ? <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#607D8B" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="9" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#607D8B" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="9" /><path d="M9 12l2 2l4 -4" /></svg> }
                </div>
                <h3 className="todo-item-task">{props.name}</h3>
            </div>
            <div className="todo-right" onClick={() => props.remove(props.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FF0336" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="4" y1="7" x2="20" y2="7" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
            </div>
        </div>
    )
}