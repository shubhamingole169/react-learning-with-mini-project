import "./Todo.css"
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { useState } from "react";
export const Todo = () => {
    
    const [task, setTask] = useState([]);
    



    const handleSubmitForm = (inputValue) =>{
        
        if(!inputValue) return;
        if(task.includes(inputValue)) return;
        setTask((prevTask) =>[...prevTask, inputValue]);
    };

    


    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                < TodoDate />
            </header>
            < TodoForm onAddTodo ={handleSubmitForm}/>
            <section className="myUnOrdList">
                <ul>
                    {
                        task.map((curTask, index) =>{
                            return(
                            < TodoList
                            key={index}
                            data={curTask}
                            />
                            )
                        })
                    }
                </ul>
            </section>
        </section>
    )

}