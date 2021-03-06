import React from 'react'
import classes from './Field.module.scss'
import Card from './../../UI/card/card'
import StartPage from './../startPage/startPage'
import { cards } from '../../data/cardsData'
import FinishPage from './../FinishPage/FinishPage';


class Field extends React.Component {

    state = {
        elements: [],
        data: cards,
        prevCard: null,
        id: null,
        counter: 0,
        start: true,
        opened: 0,
        totalCardOpened: 0
    }


    componentDidMount() {
        this.setState({
            elements: this.cardList()
        })
    }

    retryHandler = () => {
        this.setState({
            elements: this.cardList(),
            prevCard: null,
            id: null,
            counter: 0,
            start: false,
            opened: 0,
            totalCardOpened: 0
        })
    }

    backToStartHandler = () => {
        this.retryHandler()
        this.setState({
            start: true
        })
    }

    flip = (elem, power, index) => {
        if (this.state.counter < 2) {
            if (elem.style.transform === "rotateY(0deg)" || elem.style.transform === "") {
                elem.style.transform = "rotateY(180deg)"
                this.setState({ totalCardOpened: this.state.totalCardOpened + 1 })
                console.log(this.state.totalCardOpened)
                if (this.state.prevCard === null) {
                    this.setState({
                        prevCard: power,
                        id: index,
                        counter: this.state.counter + 1
                    })
                } else {
                    if (this.state.prevCard !== power) {
                        this.setState({
                            counter: this.state.counter + 1
                        })
                        setTimeout(() => {
                            document.getElementById(this.state.id).style = "transform: rotateY(0deg);" // не нашел иного пути
                            elem.style.transform = "rotateY(0deg)"
                            this.setState({
                                prevCard: null,
                                id: null,
                                counter: 0
                            })
                        }, 1000)
                    } else {
                        console.log('dfsafsdf')
                        this.setState({
                            prevCard: null,
                            id: null,
                            counter: 0,
                            opened: this.state.opened + 2
                        })
                    }
                }
            }
        }

    }

    cardList = () => (
        this.state.data.sort(() => Math.random() - 0.5).map(el => {
            const id = Math.random() * (2 ^ 52)
            return (
                <Card
                    key={id}
                    id={id}
                    power={el.power}
                    type={el.type}
                    onClick={event => this.flip(event.target, el.power, id)}
                />
            )
        })
    )

    render() {
        return (
            <div className={classes.Field}>
                {
                    this.state.start
                        ? <StartPage start={() => this.setState({ start: false })} />
                        : this.state.elements
                }
                {
                    this.state.opened !== cards.length
                        ? null
                        : <FinishPage
                            total={this.state.totalCardOpened}
                            retry={this.retryHandler}
                            toStart={this.backToStartHandler}
                        />

                }
            </div>
        )
    }
}

export default Field