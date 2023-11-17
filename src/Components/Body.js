import React, { useState } from 'react'
import Image from './veena.jpg'
import ReactPlayer from 'react-player'
const Body = () => {
    const [likes, setLikes] = useState(0) // likes=15
    function count() {
        setLikes(likes + 1);  //(15+1)
    }
    const [text, setText] = useState('')
    function reset() {
        setText('')
    }

    const [fruits, setFruits] = useState([
        { fruit: 'water melon' },
        { fruit: 'apple' },
        {fruit:'mango'}
    ])

    return (
        <div>
            <div>
                <img src={Image} alt="images"  height={200} width={200}/> <br />
                <p>likes: {likes}</p>
                {/* destructuring */}
                <button onClick={count}>Like</button>
            </div>
            <div style={{ paddingTop: '50px' }}>
                <label htmlFor="Name">Name : </label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <p>onutput : {text}</p>
                <button onClick={reset}>Reset</button>
            </div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'margin', flexDirection: 'column' }}>
                {/* pass down url link in url attribuite */}
                <ReactPlayer url={'https://www.youtube.com/shorts/0O8VIaPanKg'} height={200} width={200}controls />
                <div>
                    <p>i like this </p>
                </div>
            </div>
        </div>
    )
}
export default Body