import "./Todo.css"
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { useState } from "react";
// import { 
//     getLocaleStorageTodoData, 
//     setLocaleStorageTodoData
// } from './TodoLocaleStorage';

export const Todo = () => {

const todoKey ="reactTodo";
const getLocaleStorageTodoData = () => {
    const rawTodos = localStorage.getItem(todoKey);
    if (!rawTodos) return [];
    return JSON.parse(rawTodos);
}


    const [task, setTask] = useState(() => getLocaleStorageTodoData());
    



    const handleSubmitForm = (inputValue) =>{

        const{ id, content, checked } = inputValue;
        //  to check if the input field is or not
        if(!content) return;
        // to check doe data already present or not !!
        // if(task.includes(inputValue)) return;
        const ifTodoContentMatched = task.find(
            (curTask) => curTask.content === content
        );

        if(ifTodoContentMatched) return;
        
        
        // setTask((prevTask) =>[...prevTask, inputValue]);
        setTask((prevTask) => [
            ...prevTask,
            { id, content, checked }
        ]);
        
    };

    // todo set locale storage data
    
    const setLocaleStorageTodoData = (task) => {
        console.log(task);
        return localStorage.setItem(todoKey,JSON.stringify(task));
}

    setLocaleStorageTodoData(task);

    // todo handleCheckedTodo Functionality

    const handleCheckedTodo = (content) =>{
        const updatedTask = task.map((curTask) => {
            if(curTask.content === content){
                return{ ...curTask, checked: !curTask.checked };
            }else{
                return curTask;
            }
            
        });
        setTask(updatedTask);
    }



        // todo handleDeleteTodo

        const handleDeleteTodo = (value) =>{
            const upadatedTask = task.filter((curTask) => curTask.content !== value);
            setTask(upadatedTask);
        }
    
    
        // todo handleclear todo data function
    
        const handleClearTodoData = () =>{
            setTask([]);
        }
    


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
                        task.map((curTask) =>{
                            return(
                            <TodoList
                            key={curTask.id}
                            data={curTask.content}
                            checked={curTask.checked}
                            onHandleDeleteTodo={handleDeleteTodo}
                            onHandleCheckedTodo = {handleCheckedTodo}
                            />
                            )
                        })
                    }
                </ul>
            </section>
            <section>
                <button
                className="clear-btn"
                onClick={handleClearTodoData}>
                Clear All
                </button>
            </section>
        </section>
    )
}