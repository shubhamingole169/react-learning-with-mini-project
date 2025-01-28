import "./EV.css"
export const EventHandling = () =>{

    const HandleButtonClick = (e) =>{
        alert("on click button clicked");
        console.log("e",e);
        // console.log( "target:", e.target);

    }
    return(
        <>
            <button onClick={HandleButtonClick} > Click Me </button>
            <br />
            <button onClick={(e) => {HandleButtonClick(e)}}> Click me 2</button>
        </>
    )

}