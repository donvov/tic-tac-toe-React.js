import React from 'react';
import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            field: Array(9).fill(null),
            count: 0,
            winX: 0,
            winO: 0,
            tie: 0,
            firstMove: '',
            secondMove: '',
            displayNone: 'block'
        };
        this.winnerLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],

            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],

            [0, 4, 8],
            [2, 4, 6]
        ]
    }

    clickHandler = event => {
        if (this.state.firstMove === '') {
            alert('Choose your weapon')
        } else {
            let data = event.target.getAttribute("data");
            let currentFields = this.state.field;
            if (currentFields[data] == null) {

                currentFields[data] = (this.state.count % 2 === 0) ? this.state.firstMove : this.state.secondMove;

                this.setState({
                    count: this.state.count + 1
                });

                this.setState({
                    field: currentFields
                })
            } else {
                alert('This field is already taken, select another');
            }

            this.winner();
        }
        console.log(this.state.field);
    };

    winner = () => {
        let elem = (this.state.count % 2 === 0) ? this.state.firstMove : this.state.secondMove;
        for (let i = 0; i < this.winnerLines.length; i++) {
            let line = this.winnerLines[i];

            if (this.state.field[line[0]] === elem && this.state.field[line[1]] === elem && this.state.field[line[2]] === elem) {
                alert(elem + 'win');
                this.globalCount();
                this.reset();
                return
            } else if (this.state.field[line[3]] === elem && this.state.field[line[4]] === elem && this.state.field[line[5]] === elem) {
                alert(elem + 'win');
                this.globalCount();
                this.reset();
                return;
            } else if (this.state.field[line[6]] === elem && this.state.field[line[7]] === elem && this.state.field[line[8]] === elem) {
                alert(elem + 'win');
                this.globalCount();
                this.reset();
                return;
            } else if (this.state.field[line[0]] === elem && this.state.field[line[3]] === elem && this.state.field[line[6]] === elem) {
                alert(elem + 'win');
                this.globalCount();
                this.reset();
                return;
            } else if (this.state.field[line[1]] === elem && this.state.field[line[4]] === elem && this.state.field[line[7]] === elem) {
                alert(elem + 'win');
                this.globalCount();
                this.reset();
                return;
            } else if (this.state.field[line[2]] === elem && this.state.field[line[5]] === elem && this.state.field[line[8]] === elem) {
                alert(elem + 'win');
                this.globalCount();
                this.reset();
                return;
            } else if (this.state.field[line[0]] === elem && this.state.field[line[4]] === elem && this.state.field[line[8]] === elem) {
                alert(elem + 'win');
                this.globalCount();
                this.reset();
                return;
            } else if (this.state.field[line[2]] === elem && this.state.field[line[4]] === elem && this.state.field[line[6]] === elem) {
                alert(elem + 'win');
                this.globalCount();
                this.reset();
                return;
            }
        }
        if (this.state.count === 8) {
            alert('Tie');
            this.setState({
                tie: this.state.tie + 1
            });
            this.reset();
        }
    };

    globalCount = () => {
        let elem = (this.state.count % 2 === 0) ? this.state.firstMove : this.state.secondMove;
        if (elem === this.state.firstMove) {
            this.setState({
                winX: this.state.winX + 1
            })
        } else {
            this.setState({
                winO: this.state.winO + 1
            })
        }
    };

    reset = () => {
        this.setState({
            field: Array(9).fill(null),
            count: 0
        })
    };


    move = event => {
        if (event.target.getAttribute('data-move') === 'X') {
            this.setState({
                firstMove: 'X',
                secondMove: 'O'
            })
        } else {
            this.setState({
                firstMove: 'O',
                secondMove: 'X'
            })
        }
        this.setState({
            displayNone: 'none'
        })
    };


    render() {
        return (
            <div className="ticTacToe">

                <div className="wrapper">
                    <h1>React.js Tic Tac Toe</h1>
                    <hr/>
                    <button onClick={this.reset} className="btn">New game</button>
                    <div className="dashboard">
                        <div className="player-x">
                            <h2>Win X</h2>
                            <span>{this.state.winX}</span>
                        </div>

                        <div className="ties">
                            <h2>Teis</h2>
                            <span>{this.state.tie}</span>
                        </div>

                        <div className="player-o">
                            <h2>Win O</h2>
                            <span>{this.state.winO}</span>
                        </div>


                    </div>
                    <div className="gameboard">
                        <ul className="column">
                            <li onClick={this.clickHandler} className="tile" data="0">{this.state.field[0]}</li>
                            <li onClick={this.clickHandler} className="tile" data="1">{this.state.field[1]}</li>
                            <li onClick={this.clickHandler} className="tile" data="2">{this.state.field[2]}</li>
                        </ul>
                        <ul className="column">
                            <li onClick={this.clickHandler} className="tile" data="3">{this.state.field[3]}</li>
                            <li onClick={this.clickHandler} className="tile" data="4">{this.state.field[4]}</li>
                            <li onClick={this.clickHandler} className="tile" data="5">{this.state.field[5]}</li>
                        </ul>
                        <ul className="column">
                            <li onClick={this.clickHandler} className="tile" data="6">{this.state.field[6]}</li>
                            <li onClick={this.clickHandler} className="tile" data="7">{this.state.field[7]}</li>
                            <li onClick={this.clickHandler} className="tile" data="8">{this.state.field[8]}</li>
                        </ul>
                    </div>


                    <div style={{display: `${this.state.displayNone}`}} className="buttons">
                        <h3 className="weapon">Choose your weapon</h3>
                        <div className="buttons-wrap">
                            <button className="btn" data-move={'X'}
                                    onClick={this.move}>X
                            </button>
                            <button  className="btn" data-move={'O'}
                                    onClick={this.move}>O
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

}

export default App;
