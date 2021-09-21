import React, { Component } from "react";
import { connect } from "react-redux";
import ImgNPC from "./img/playerComputer.png";
// import ImgPaper from "./img/bao.png";
// import ImgRock from "./img/bua.png";
// import ImgScissors from "./img/keo.png";
class NPC extends Component {
  render() {
    return (
      <div className="playerName">
        <div className="theThink">
          <img
            className="mt-3 imgNpc"
            src={this.props.npc.img}
            alt="choosen-paper"
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 150, height: 150 }}
          src={ImgNPC}
          alt="player-game"
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    npc: state.gamePlayReducer.npc,
  };
};
export default connect(mapStateToProps)(NPC);
