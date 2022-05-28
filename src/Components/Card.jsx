import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

const Card = ({ pokemon, loading,infoPokemon}) => {
    const [search, setSearchInput] = useState('');

    const handleInput = ((e) => {
        setSearchInput(e.target.value)
      })

   console.log(pokemon);
    return (
        <>

<input className="inputMc" placeholder = 'Search by title...' type ='text'
   onChange = {handleInput}  />
        {
            loading ? <h1>Loading...</h1> :
                pokemon.filter((val)=> {
  if(search=='') {
    return val
  }else if (val.name.toLowerCase().includes(search.toLowerCase())){
    return val
  }
}).map((item) => {
                    return (
                        <>
                        
                            <div className="card" key={item.id} onClick={()=>infoPokemon(item)}>
                                <h2>{item.id}</h2>
                                <img src={item.sprites.front_default} alt="" />
                                <h2>{item.name}</h2>
                             
        
                            </div>
                        </>
                    )
                })
        }

        </>
    )
}
export default Card;