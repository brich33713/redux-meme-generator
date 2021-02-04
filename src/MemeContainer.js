import react, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Meme from './Meme'

const MemeContainer = () => {
    const [empty,ChangeEmpty] = useState(true)
    const memeContainer = useSelector(store => store.memeContainer)
    
    useEffect(() => {
    if(memeContainer[0] !== undefined){
        ChangeEmpty(false)
    }},[])


    return (
        <div>
            {!empty && <div>
                {memeContainer.map(meme => <Meme memeDetails={meme} />)}
            </div>}
        </div>
    )
}

export default MemeContainer;