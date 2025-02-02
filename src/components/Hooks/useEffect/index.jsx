import "./index.css"
import { useState, useEffect } from "react"

// export const ReactUseEffect = () =>{
// 	const [count, setCount] = useState(0);
// 	useEffect(() =>{
// 		console.log('count Value', count);
// 	}, [count])
// 	return(
// 		<div className="container effect-container">
// 			<h1> Hellow, useEffect !</h1>
// 			<p>Count : {count} </p>
// 			<button onClick={() => setCount(count+1)}>Increment</button>
// 		</div>
// 	)
// }


export const ReactUseEffect = () =>{
	const[date, setDate] = useState(0);

	// useEffect(() =>{
	// 	setInterval(() =>{
	// 		const updatedDate = new Date();
	// 		setDate(updatedDate.toLocaleTimeString());
	// 	}, 1000)
		
	// },[]);

	setInterval(() =>{
		const updatedDate = new Date();
		setDate(updatedDate.toLocaleTimeString());
	}, 1000)

	return(
		<div className="container effectContainer">
			<h1>Date : {date} </h1>
		</div>
	)
}