import React from 'react'
import classes from './card.module.scss'
import logo from '../../logo.svg'
import diamonds from '../../data/images/diamonds.png'
import cross from '../../data/images/cross.png'
import byb from '../../data/images/byb.png'
import pika from '../../data/images/pika.png'

const card = props => {

    function gender() {
        switch (props.type) {
            case 'diamonds':
                return diamonds
            case 'cross':
                return cross
            case 'byb':
                return byb
            case 'pika':
                return pika
            default:
                return props.type
        }
    }

    function power() {
        switch (props.power) {
            case 11:
                return 'J'
            case 12:
                return 'Q'
            case 13:
                return 'K'
            case 14:
                return 'T'
            default:
                return props.power
        }
    }
    // function open(isOpen){
    //     if(isOpen){
    //         return {transform:"rotateY(180deg)"}
    //     } else {
    //         return {transform:"rotateY(0deg)"}
    //     }
    // }

    return (
        <div className={classes.Card} onClick={props.onClick} id={props.id}>
            <div className={classes.back}>
                <img src={logo} alt='' />
            </div>
            <div className={classes.front}>
                <div>
                    <img src={gender()} alt='' />
                </div>
                <div className={classes.power}>
                    {power()}
                </div>
                <div className={classes.gender_down}>
                    <img src={gender()} alt='' />
                </div>
            </div>

        </div>
    )
}

export default card