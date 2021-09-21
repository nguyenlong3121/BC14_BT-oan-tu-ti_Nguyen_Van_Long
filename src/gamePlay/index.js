import React, { Component } from "react";
import "./gamePlay.css";
import Player from "./Player";
import NPC from "./NPC";
import Result from "./Result";
import { connect } from "react-redux";
class GamePlay extends Component {
  render() {
    return (
      <div className="gameBg">
        <div className="row text-center">
          <div className="col-4 player">
            <Player />
          </div>
          <div className="col-4">
            <Result />
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.playGame();
              }}
            >
              Play Game
            </button>
          </div>
          <div className="col-4">
            <NPC />
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      dispatch({
        type: "RANDOM",
      });
      dispatch({
        type: "PLAY_GAME",
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(GamePlay);
