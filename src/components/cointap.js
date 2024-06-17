import React, { useState } from 'react';

function Cointap() {
    const [clicks, setClicks] = useState([]);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = (e) => {
        setIsAnimating(true);

        setTimeout(() => {
            setIsAnimating(false);
        }, 200);

        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - 150;

        const newClick = { id: Date.now(), x, y };
        setClicks([...clicks, newClick]);

        setTimeout(() => {
            setClicks((prevClicks) => prevClicks.filter(click => click.id !== newClick.id));
        }, 1000);
    };

    return (
        <div className="flex justify-center pt-[50px]">
            <div className="bg-cloud bg-auto bg-no-repeat bg-center">
                <img
                    className={`py-[10px] select-none px-[35px] cursor-pointer relative ${isAnimating ? 'click-animation' : ''}`}
                    src={`/img/coin.png`}
                    alt={'coin'}
                    onClick={handleClick}
                />
                {clicks.map((click) => (
                    <span
                        key={click.id}
                        className="float-up"
                        style={{ top: `${click.y - 20}px`, left: `${click.x}px` }}
                    >+10</span>
                ))}
            </div>
        </div>
    )
}

export default Cointap
