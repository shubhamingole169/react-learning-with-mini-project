import "./EV.css"

export const EventPropagation = () =>{
    const handleGrandParent = () =>{
        console.log("Grandparent clicked");
    };

    const handleParentClick = () =>{
        console.log("parent clicked");

    };

    const handleChildClick = (event) =>{
        console.log(event);
        console.log("Child clicked");
    };

    return(
        <>
            <section className="main-div">
                <div className="g-div" onClick={handleGrandParent}>
                    <div className="p-div" onClick={handleParentClick}>
                    <button className="c-div" onClick={handleChildClick}>
                        Child div
                    </button>
                    </div>
                </div>
            </section>
        </>
    )
}