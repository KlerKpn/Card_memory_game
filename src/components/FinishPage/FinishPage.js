import React from 'react'
import classes from './FinishPage.module.scss'

const FinishPage = props => (
    <div className={classes.FinishPage}>
        <div>Вы открыли все 52 карты и закончили игру!!!</div>
        <hr />
        <div>
            Всего открытий карт: {props.total}
        </div>
        <div>
            <button className={classes.btn} onClick={props.toStart}>
                Вернуться к правилам
            </button>
            <button className={classes.btnRetry} onClick={props.retry}>
                Начать игру заново
            </button>
        </div>
    </div>
)

export default FinishPage