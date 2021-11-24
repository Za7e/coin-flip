import react, { Component } from "react";
import './Coin.css'

class Coin extends Component {
    render() {
        const url = "https://tinyurl.com/react-coin-";
        return (
            <img className="Coin" src={`${url}${this.props.face}-jpg`}></img>
        )
    }
}

export default Coin;