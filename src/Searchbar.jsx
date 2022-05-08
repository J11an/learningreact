import React,{Fragment} from 'react'

const Searchbar = ({searchChange,searchField}) => {
    
    return(
        <div className = "pa2">
        <input onChange={searchChange} className = "pa3 ba b--green bg-lighest-blue" type = "search" placeholder='Search Robots'></input>
        </div>
    )


}

export default Searchbar