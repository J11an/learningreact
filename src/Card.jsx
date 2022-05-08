import React,{Fragment} from 'react'

const Card = ({name,email,id}) => {
    return(
        <>
        <div className = "bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            <img alt = "Profile" src = {`https://robohash.org/test/${id}`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
        </>
    );
}

// class Card extends component{
//     render(){
//         return(
//             <div>

//             </div>
//         );
//     }
// }

export default Card;
