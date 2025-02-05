
import { useId } from 'react';
export const UseId = () =>{

    // const username = useId();
    // const email = useId();
    const id = useId();
    return(
        <form >
            <div>
                <label htmlFor = {id + "username"} >
                    username:
                </label>
                <input type="text" name="name" id={id + "username"} />
            </div>
            <div>
            <label htmlFor = {id + "password"} >
                    password:
                </label>
                <input type="password" name="password" id={id + "password"} />
            </div>
            <div>
                <label htmlFor={id + "email"}>
                Email:
                </label>
                <input type="email" id={id + "email"} />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}