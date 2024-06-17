import React from 'react'

function Logoname() {
    return (
        <div className="">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <div className="flex items-center p-[20px]">
                <img className="bg-[#252525] p-[5px] rounded-[15px]" src={`/img/logo.png`} alt={'Логотип'}/>
                <a className="text-[10px] text-white ml-[10px]">blockchain (CEO)</a>
            </div>
        </div>
    )
}

export default Logoname
