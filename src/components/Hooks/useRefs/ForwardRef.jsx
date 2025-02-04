import { forwardRef, useId, useRef } from "react";

export const ForwardRef = () =>{

    const username = useRef(null);
    const password = useRef(null);

    const handleSubmitForm = (e) =>{
        e.preventDefault();
        console.log(username.current.value, password.current.value)
    }

    return(
        <form onSubmit={handleSubmitForm}>
            <BeforeReact19Input label="username" ref={username} />
            <BeforeReact19Input label="password" ref={password} />
            <button>Submit</button>
        </form>
    )
}


//*  before react 19 input

// const BeforeReact19Input = forwardRef((props, ref) =>{
//     const id = useId();
//     return(
//         <div>
//             <label htmlFor={id}> {props.label} </label>
//             <input type="text" ref={ref} />
//         </div>
//     );
// });

//? aftrr react 19

const BeforeReact19Input = ({label, ref}) =>{
    const id = useId();
    return(
        <div>
            <label htmlFor={id}>{label}</label>
            <input type="text" ref={ref} />
        </div>
    )
}



