import react, { Component } from "react";
import Coin from "./Coin";
import "./CoinFlip.css";

class CoinFlip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            face: 'heads',
            flipCount: 0,
            headCount: 0,
            tailCount: 0
        }
        this.btnClick = this.btnClick.bind(this);
        this.flip = this.flip.bind(this);
    }
    flip() {
        let rand = Math.round(Math.random());
        if (rand === 0) {
            this.setState((prevState, props) => ({
                face: 'heads',
                flipCount: prevState.flipCount + 1,
                headCount: prevState.headCount + 1
            }))
        } else {
            this.setState((prevState, props) => ({
                face: 'tail',
                flipCount: prevState.flipCount + 1,
                tailCount: prevState.tailCount + 1
            }))
        }
    }
    btnClick() {
        this.flip();
    }
    render() {
        return (
            <div className="CoinFlip">
                <h1>COIN FLIP!</h1>
                <Coin face={this.state.face} />
                <button className="CoinFlip-btn" onClick={this.btnClick} >FLIP</button>
                <p>Out of {this.state.flipCount} flips, there have been {this.state.headCount} heads and {this.state.tailCount} tails</p>
            </div>
        )
    }
}

export default CoinFlip;