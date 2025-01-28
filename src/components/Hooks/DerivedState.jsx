import { useState } from "react";
import "../EV.css"
// const users = [
//     {name:"Alice", age: 25},
//     {name:"Bob", age: 30},
//     {name:"Charlie", age: 35},
//     {name:"Angela", age: 45},
// ];

export const DerivedState = () => {
    const [users, setUsers] = useState([
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 },
        { name: "Angela", age: 45 },
    ]);
    return (
        <div className="main-div">
            <h1>user List</h1>
            <ul>
                {
                    users.map((curElem, index) => {
                        return (
                                <li key={index}> {`name is ${curElem.name} and age is ${curElem.age}`}</li>
                        );
                    })
                };
            </ul>
        </div>
    );
};