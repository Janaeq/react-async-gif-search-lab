import React from 'react'

export default function GifList(props) {
    return (
        <div>
            <ul>
                {props.gifs.map((gif, i) => (
                    <li key={i}>
                        <img alt='gif' src={gif} />
                    </li>
                ))}
            </ul>
        </div>
    )
}