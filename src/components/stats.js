import React from 'react'

function Stats() {
    return (
        <div className="flex justify-center pt-[30px] space-x-[15px]">
            <div className="flex items-center text-center justify-center flex-col">
                <p className="font-[akony] text-[#00B8A2] text-[6px] w-[65px]">ПРИБЫЛЬ ЗА ТАП</p>
                <div className="bg-[#252525] h-[42px] w-[105px] flex items-center justify-center rounded-[15px] mt-[10px]">
                    <p className="text-white text-[14px]">+10</p>
                </div>
            </div>
            <div className="flex items-center text-center justify-center flex-col">
                <p className="font-[akony] text-[#00B8A2] text-[6px] w-[65px]">МОНЕТ ДЛЯ АПА</p>
                <div className="bg-[#252525] h-[42px] w-[105px] flex items-center justify-center rounded-[15px] mt-[10px]">
                    <p className="text-white text-[14px]">100м</p>
                </div>
            </div>
            <div className="flex items-center text-center justify-center flex-col">
                <p className="font-[akony] text-[#00B8A2] text-[6px] w-[65px]">ПРИБЫЛЬ В ЧАС</p>
                <div className="bg-[#252525] h-[42px] w-[105px] flex items-center justify-center rounded-[15px] mt-[10px]">
                    <p className="text-white text-[14px]">+500,63К</p>
                </div>
            </div>
        </div>
    )
}

export default Stats
