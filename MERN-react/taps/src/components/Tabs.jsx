import React from 'react'

function Tabs({tabs, setTabSelected, tabSelected, setTabs}) {
    const handleTab = (tab)=>{
        // setTabSelected({...tab,active:true})
    let newTabs= tabs.map(item=> item.name === tab.name ? {...tab,active:true} : {...item,active:false} )
    setTabs(newTabs)
    console.log(newTabs)
    setTabSelected({...tab,active:true})
    }
    return (
        <div>
            {tabs.map((tab, i) =>(
                <button style={{ color: "white", backgroundColor: tab.name===tabSelected.name ? "black" : "gray"}} onClick={()=> handleTab(tab)} key={i}>{tab.name}</button>
            ))}
        </div>
    )
}
export default Tabs
