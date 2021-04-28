// import React, { useState } from 'react';

const Tabs = (props) => {

    let makeActive = e => {
        e.preventDefault();
        let tabs = document.getElementsByClassName("tab");
        for(let i = 0; i < tabs.length; i++){
            tabs[i].classList.remove('active');
        }
        e.target.parentElement.classList.add('active');
    }

    let tabsRendered = props.tabs.map((e, i) =>{
        return(
            <div key={i} className='tab'>
                <p>{e}</p>
                <div className='film' onClick={(e) => makeActive(e)}></div>
            </div>
        )
    })

    return(
        <div className='tabs-container'>
            {tabsRendered}
        </div>
    )
}

export default Tabs