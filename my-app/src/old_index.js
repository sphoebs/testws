
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import InstagramEmbed from 'react-instagram-embed';

class InstagramPost extends React.Component {
  render() {
    return (
      <iframe src={this.props.url} width="400" height="480" frameBorder="1" scrolling="no" allowtransparency="true"></iframe>
    );
  }
}




function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
  
class Board extends React.Component {
  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class ShoppingList extends React.Component {
    render() {
      return (
        <div className="shopping-list">
          <h1>Shopping List for {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
          <InstagramPost url = "https://www.instagram.com/p/CYmCmucLyjq/embed/captioned" />
          {/* <iframe src="https://www.instagram.com/p/CYmCmucLyjq/embed/captioned" width="400" height="480" frameborder="1" scrolling="no" allowtransparency="true"></iframe> */}
          {/* <iframe src="https://www.instagram.com/p/BFKjVxkBsCC/embed" width="640" height="720" frameborder="1" scrolling="no" allowtransparency="true"></iframe> */}
          {/* https://www.instagram.com/p/CYmCmucLyjq/?utm_source=ig_web_copy_link */}
                
        </div>
      );
    }
  }
  
  // class Game extends React.Component {
  //   render() {
  //     return (
  //       <div className="game">
  //         <ShoppingList name='fabio' />
  //         <div className="game-board">
  //           <Board />
  //         </div>
  //         <div className="game-info">
  //           <div>{/* status */}</div>
  //           <ol>{/* TODO */}</ol>
  //         </div>
  //       </div>
  //     );
  //   }
  // }
  class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [{
          squares: Array(9).fill(null),
        }],
        xIsNext: true,
      };
    }
  
    render() {
      return (
        <div className="game">
           <ShoppingList name='fabio' />
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }