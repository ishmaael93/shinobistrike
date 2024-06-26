import React, { useState } from 'react'

function Balance({balance}) {

    return (
        <div className="flex items-center justify-center mt-[50px]">
            <img className="mr-[15px]" src={`${process.env.PUBLIC_URL}/img/coinSmall.png`} alt={'Монета'}/>
            <p className="text-white text-[36px]">0</p>
        </div>
    )
}

export default Balance