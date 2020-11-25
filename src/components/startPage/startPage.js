import React from 'react'
import classes from './startPage.module.scss'

const startPage = props =>(
    <div className={classes.Page}>
        <div className={classes.title}>
           Memory Card
        </div>
        <div>
            <h5> Правила игры</h5>
            <p className={classes.description}>
                На столе вся колода без джокеров<br/>
                Необходимо найти пары по силе (2/2, Q/Q), нет зависимости от мастей<br/>
                Каждый матч меcтоположение карт меняется
            </p>
            <button onClick={props.start} className={'btn btn-primary'}>
                Начать
            </button>
        </div>
        <div></div>
    </div>
)

export default startPage