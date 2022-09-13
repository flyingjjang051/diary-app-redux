export const ACTIONS_TYPES = {
  INSERT_DIARY: "insertDiary",
  MODIFY_DIARY: "modifyDiary",
  DELETE_DIARY: "deleteDiary",
};
// 여기에 여러가지 속성들을 넣어서  쓰면 된다.
const initState = {
  diaryList: [
    { id: 0, writer: "장성호", contents: "redux 를 배우고 있습니다.", emotion: 4, date: new Date().getTime() },
    { id: 1, writer: "장동건", contents: "사고치고 자숙중", emotion: 1, date: new Date().getTime() },
    { id: 2, writer: "이정재", contents: "에미상 받음", emotion: 5, date: new Date().getTime() },
    { id: 3, writer: "정우성", contents: "정우성이 더 잘생겼음", emotion: 3, date: new Date().getTime() },
  ],
};

export const insertDiary = (diaryItem) => {
  console.log("store에 있는 diaryItem", diaryItem);
  return {
    type: ACTIONS_TYPES.INSERT_DIARY,
    payload: diaryItem,
  };
};

const diary = (state = initState, action) => {
  console.log(action);
  //{type,payload}
  switch (action.type) {
    case ACTIONS_TYPES.INSERT_DIARY: {
      const newDiaryItem = {
        ...action.payload,
      };
      return {
        diaryList: [newDiaryItem, ...state.diaryList],
      };
    }
    default:
      return state;
  }
};
export default diary;
