import React, { Component } from "react";
import { connect } from "react-redux";
class Result extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="display-4 text-danger">{this.props.result}</div>
        <div className="display-4 text-success">
          Số bàn thắng:
          <span className="text-warning">{this.props.winNums}</span>
        </div>
        <div className="display-4 text-success">
          Tổng số bàn chơi:
          <span className="text-warning">{this.props.playNums}</span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    result: state.gamePlayReducer.result,
    winNums: state.gamePlayReducer.winNums,
    playNums: state.gamePlayReducer.playNums,
  };
};
export default connect(mapStateToProps)(Result);
