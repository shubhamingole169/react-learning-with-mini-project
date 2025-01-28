import "./EV.css"
export const EventProps = () =>{

    const HandleWelcomeUser = (user) =>{
        alert(`Hey, ${user}`);
    }

    const HandleHover = () =>{
        alert(`Hey, Thanks for hovering me!`);
    }
    return(
        <>
            <WelcomeUser onClicked={() => HandleWelcomeUser("Shubham") } 
                onMouseEnter={HandleHover}
            />
        </>
    );
};

const WelcomeUser = (props) =>{
    const HandleGreeting = () =>{
        console.log(`Hey, user , welcome `);
        props.onClicked ();
    }
    return(
        <>
            <button onClick={props.onClick}>Click me</button>
            <button onMouseEnter={props.onMouseEnter}>Hover Me</button>
            <button onClick={HandleGreeting}>Greeting</button>
        </>
    )

}
