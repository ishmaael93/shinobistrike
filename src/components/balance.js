import React from 'react'

function Balance() {
    return (
        <div className="flex items-center justify-center mt-[50px]">
            <img className="mr-[15px]" src={`/img/coinSmall.png`} alt={'Монета'}/>
            <p className="text-white text-[36px]">50 000 000</p>
        </div>
    )
}

export default Balance