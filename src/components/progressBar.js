import React from 'react'

function ProgressBar() {
    return (
        <div className="pt-[35px] px-[25px]">
            <div className="flex justify-between items-center">
                <p className="font-[akony] text-white text-[7px]">Малыш</p>
                <p className="font-[akony] text-white text-[7px]">LEVEL 1/10</p>
            </div>
            <div className="w-full h-[15px] bg-[#646464] rounded-[3px] shadow-inner shadow-black/[.25]">
                <div className="h-[15px] shadow-inner shadow-black/[.25] bg-gradient-to-r from-[#005F53] to-[#00B8A2] rounded-[3px] w-[65%]"></div>
            </div>
        </div>
    )
}

export default ProgressBar
