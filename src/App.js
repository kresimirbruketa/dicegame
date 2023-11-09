import React, {useReducer} from "react";
import dice1 from "../src/images/dice1.png"
import dice2 from "../src/images/dice2.png"
import dice3 from "../src/images/dice3.png"
import dice4 from "../src/images/dice4.png"
import dice5 from "../src/images/dice5.png"
import dice6 from "../src/images/dice6.png"

import {Col, Row, Button} from "react-bootstrap";

function App() {

    const diceImages = [
        dice1,
        dice2,
        dice3,
        dice4,
        dice5,
        dice6
    ];

    function handleClick() {
        dispach({type: "rollDice"})
    }

    function reducer(state, action) {

        var randomNumber1 = Math.floor((Math.random() * 6) );
        var randomNumber2 = Math.floor((Math.random() * 6) );

        switch (action.type) {
            case "rollDice":
                return {
                    text: (randomNumber1 > randomNumber2)
                        ? "Player 1 wins!"
                        : (randomNumber1 < randomNumber2)
                            ? "Player 2 wins!"
                            : "Draw!",
                    image1: diceImages[randomNumber1],
                    image2: diceImages[randomNumber2]
                }

            default:
                return state;
        }

    }

    const [state,
        dispach] = useReducer(reducer, {
        text: "Press play!",
        image1: diceImages[5],
        image2: diceImages[5]
    })

    return (
        <section>
            <div className="container">

                <h1>{state.text}</h1>
                <Row sm = {2}>
                    <Col>
                        <div className="dice">
                            <p>Player 1</p>
                            <img className="img1" src={state.image1} alt='dice'/>
                        </div>
                    </Col>
                    <Col>
                        <div className="dice">
                            <p>Player 2</p>
                            <img className="img2" src={state.image2} alt='dice'/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="danger" onClick={handleClick}>🎲Play🎲</Button>
                    </Col>
                </Row>

            </div>

        </section>

    )
};

export default App;
