import React from 'react'

function Balance() {
    return (
        <div className="w-[200px]">
            <div className="bg-[#242424] border border-[#0C8A72] rounded-[8px]">
                <p className="font-[Bicubik] text-[9px] text-white text-center mt-[10px] mb-[8px] mx-[10px]">+38437/час</p>
                <hr className="border-[#0C8A72]"></hr>
                <div className="flex items-center my-[8px] mx-[10px]">
                    <img src={`/img/coinmini.png`} alt={'МонеткаМини'}/>
                    <p id="balance" className="font-[Bicubik] text-[10px] text-white ml-[5px] leading-none">50 000 000</p>
                </div>
            </div>
        </div>
    )
}

export default Balance
