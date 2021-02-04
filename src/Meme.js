import react from 'react'

const Meme = ({memeDetails}) => {
    const {textColor,topText,bottomText,image} = memeDetails;
    const removeClick = (e) => {
        e.preventDefault()
        e.target.parentElement.parentElement.remove()
    }

    return (
        <div>
        <div>
            <h3 style={{"color": textColor}}>{topText}</h3>
            <img src={image} />
            <h3 style={{"color": textColor}}>{bottomText}</h3>
        </div>
        <div><button onClick={removeClick}>Remove</button></div>
        
        </div>
    )
}

export default Meme;