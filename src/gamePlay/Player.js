import React, { Component } from "react";
import ImgPhoto from "./img/player.png";
// import ImgPaper from "./img/bao.png";
// import ImgRock from "./img/bua.png";
// import ImgScissors from "./img/keo.png";
import { connect } from "react-redux";
class Player extends Component {
  btnChoosen = () => {};
  render() {
    return (
      <div className="playerName">
        <div className="theThink">
          <img
            className="mt-3"
            style={{ width: 50, height: 50 }}
            src={
              this.props.arrayChoose.find((item) => item.choose === true).img
            }
            alt="choosen-paper"
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 150, height: 150 }}
          src={ImgPhoto}
          alt="player-game"
        />
        <div className="row">
          {this.props.arrayChoose.map((item, index) => {
            //them border cho button duoc chon
            let border = {};
            if (item.choose) {
              border = { border: "3px solid red" };
            }
            return (
              <div className="col-4">
                <button
                  style={border}
                  className="btn btn-success"
                  onClick={() => this.props.choose(item.id)}
                >
                  <img
                    style={{ width: 40, height: 40 }}
                    src={item.img}
                    alt="choosen-paper"
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    arrayChoose: state.gamePlayReducer.arrayChoose,
  };
};
const mapDispatchTopProps = (dispatch) => {
  return {
    choose: (id) => {
      dispatch({
        type: "CHOOSE",
        id,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchTopProps)(Player);
