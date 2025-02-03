import { useEffect, useState } from "react";
import "./Pokemon.css";

export const HowToFetchApi = () =>{

    const[pokemon, setPokemon] = useState(null);

    const API = "https://pokeapi.co/api/v2/pokemon/pikachu"

    const fetchPokemon = () =>{
        fetch(API)
        .then((res) => res.json())
        .then((data) => {
            setPokemon(data)
            })
        .catch((error) => console.log(error));
    }

    useEffect(() => {
        fetchPokemon();
    }, [])


    console.log(pokemon);

    if(!pokemon){
        return(
            <div>
                <h1> Loading ...</h1>
            </div>
        )
    }

    if(pokemon){
    
    return(
        <section className="container">
            <header>
                <h1> Lets Catch PokeMon</h1>
            </header>
            <ul className="card-demo">
                <li className="pokemon-card">
                <figure>
                    <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}  />
                </figure>
                <h1>{pokemon.name}</h1>
                </li>
            </ul>
        </section>
    )}
}
