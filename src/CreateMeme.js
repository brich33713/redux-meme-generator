import react, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MemeContainer from './MemeContainer';

const CreateMeme = () => {
    const dispatch = useDispatch()
    const [input,changeInput] = useState({textColor:"#00FF55"})
    const [view,changeView] = useState(false)
    const handleChange = (e) => {
        e.preventDefault()
        const {name,value} = e.target;
        changeInput(()=>(
        {
            ...input,
            [name]:value
        }))
    }

    const handleClick = (e) => {
        e.preventDefault()
        dispatch({type: "add",props: input})
        changeView(true)
    }
    
    return (
        <div id="inputSection">
        <h1> Meme Generator</h1>
        <h2>Generate your meme below:</h2>
        <form>
            <p>
                <label for="topText" >Top Text: </label>
                <input type="text" name="topText" size="100" id="topText" placeholder="Type top text here" onChange={handleChange} />
            </p>
            <p>
                <label for="bottomText"   >Bottom Text: </label>
                <input type="text" name="bottomText" size="96" id="bottomText" placeholder="Type bottom text here" onChange={handleChange} />
            </p>
            <p>
                <label for="Image">Image:</label>
                <input type="text" name="image" id="image" placeholder="Paste link here" size="102" onChange={handleChange} />
            </p>
            <p>
                <label for="textColor">Select Text Color: </label>
                <input type="color" name="textColor" id="textColor" value={input.textColor} onChange={handleChange} />
            </p>
            <button onClick={handleClick}>Create Meme!</button>
        </form>
        {view && <MemeContainer />}
        </div>
    )
}

export default CreateMeme;