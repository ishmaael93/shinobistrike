import React from 'react'

function Menu() {
    return (
        <div className="flex space-x-[30px] justify-center pt-[30px] pb-[20px]">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="">
                <img className="bg-[#252525] py-[8px] px-[22px] rounded-[15px]" src={`/img/icon_home.png`} alt={'Логотип'}/>
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="">
                <img className="bg-[#252525] py-[8px] px-[22px] rounded-[15px]" src={`/img/icon_boost.png`} alt={'Логотип'}/>
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="">
                <img className="bg-[#252525] py-[8px] px-[22px] rounded-[15px]" src={`/img/icon_top.png`} alt={'Логотип'}/>
            </a>
        </div>
    )
}

export default Menu
