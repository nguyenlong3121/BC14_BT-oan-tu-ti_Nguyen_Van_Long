import ImgPaper from "../gamePlay/img/bao.png";
import ImgRock from "../gamePlay/img/bua.png";
import ImgScissors from "../gamePlay/img/keo.png";
// import ImgNPC from "../gamePlay/img/playerComputer.png";
const stateDefault = {
  arrayChoose: [
    { id: "bao", img: ImgPaper, choose: false },
    { id: "bua", img: ImgRock, choose: false },
    { id: "keo", img: ImgScissors, choose: true },
  ],
  result: "Avengers... Assemble",
  winNums: 0,
  playNums: 0,

  npc: { id: "bao", img: ImgScissors },
};
const gamePlayReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHOOSE": {
      //reset mang cuoc
      let arrayUpdate = [...state.arrayChoose];
      arrayUpdate = arrayUpdate.map((item, index) => {
        return { ...item, choose: false };
      });
      //tim item dc chon de thay doi trang thai dat cuoc
      let index = arrayUpdate.findIndex((c) => c.id === action.id);
      if (index !== -1) {
        arrayUpdate[index].choose = true;
      }
      state.arrayChoose = arrayUpdate;
      return { ...state };
    }
    case "RANDOM": {
      let randomNum = Math.floor(Math.random() * 3);
      let npcRandom = state.arrayChoose[randomNum];
      state.npc = npcRandom;
      return { ...state };
    }
    case "PLAY_GAME": {
      let player = state.arrayChoose.find((item) => item.choose === true);
      let npc = state.npc;
      state.playNums++;
      switch (player.id) {
        case "bao": {
          if (npc.id === "keo") {
            state.result = "I am inevitable";
          } else if (npc.id === "bao") {
            state.result = "Avengers... Assemble";
          } else {
            state.result = "And I... I'm Iron Man";
            state.winNums++;
          }
          break;
        }
        case "bua": {
          if (npc.id === "bao") {
            state.result = "I am inevitable";
          } else if (npc.id === "bua") {
            state.result = "Avengers... Assemble";
          } else {
            state.result = "And I... I'm Iron Man";
            state.winNums++;
          }
          break;
        }
        case "keo": {
          if (npc.id === "bua") {
            state.result = "I am inevitable";
          } else if (npc.id === "keo") {
            state.result = "Avengers... Assemble";
          } else {
            state.result = "And I... I'm Iron Man";
            state.winNums++;
          }
          break;
        }

        default:
          break;
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default gamePlayReducer;
