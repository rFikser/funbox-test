import React, { useState } from 'react'

export const Card = ({ item }) => {

    const [select, setSelect] = useState(false)
    const [leaved, setLeaved] = useState(false)

    const handleClick = () => {
        setSelect(!select)
        setLeaved(false)
    }
    const handleMouseLeave = () => {
        setLeaved(true)
    }

    function declOfNum(number, words) {
        return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]];
    }

    return (
        <div className="card-wrapper">
            <div
                onClick={item.disabled ? null : handleClick}
                className={"card-inner " + (select ? 'card-inner-selected' : '') + (item.disabled ? 'card-inner-disabled' : '')}
                onMouseLeave={select ? handleMouseLeave : null}
            >
                <div className={"card-background " + (item.disabled ? 'card-background-disabled' : '')}></div>
                <div className="card-content">
                    {leaved ?
                        <p className="card-title pink-text">Котэ не одобряет?</p> :
                        <p className="card-title">Сказочное заморское явство</p>
                    }
                    <h2 className="card-name">Нямушка</h2>
                    <h2 className="card-type">{item.type}</h2>
                    <p className="card-number">
                        <span className="number">{item.number}</span>
                        <span className="mice"> порций {item.mice === 0 ? ' ' : item.mice} {item.mice === 0 ? 'мышь' : declOfNum(item.mice, ['мышь', 'мыши', 'мышей'])} </span> в подарок
                        {item.isSatisfied &&
                            <span> заказчик доволен</span>
                        }
                    </p>
                </div>
            </div>
            <div className={"card-weight " + (select ? 'card-weight-selected' : '') + (item.disabled ? 'card-weight-disabled' : '')}>
                <span className='count'>{item.count}</span>
                <span className="dimension">кг</span>
            </div>
            {
                item.disabled ?
                    <div className="card-footer">
                        <span className="disabled-text">{item.disabledText}</span>
                    </div>
                    :
                    <div className="card-footer">
                        {select ?
                            <p>{item.description}</p> :
                            <span className="card-buy-text">Чего сидишь? Порадуй котэ, <a href="#" onClick={handleClick} className="card-buy-link"> купи.</a></span>
                        }
                    </div>
            }
        </div>
    )
}