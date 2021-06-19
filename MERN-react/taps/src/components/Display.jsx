import React from 'react'

function Display({tabs }) {
    return (
        <div style={{border:"2px solid gray", width:"400px", height:"200px"}}>
            {tabs.map(item => ( 
            <>
            {item.active && <p className= {item.active && "active"}>{item.content}</p>}
                </>
            ))}    
        </div>
    )
}

export default Display
