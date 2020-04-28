import { CHANGE_TEXT, SHOW_INFO, CHANGE_AVA } from "../actions/info-action";

let initialState = {
  image: "",
  info: [
    { id: "1", value: "Name", text: "" },
    { id: "2", value: "Surname", text: "" },
    { id: "3", value: "Email", text: "" },
    { id: "4", value: "Phone", text: "" },
  ],
};

const InfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_INFO:
      return {
        ...state,
        info: state.info.map((i) => {
          if (i.id === action.id) {
            return {
              ...i,
              isShowed: true,
            };
          }
          return i;
        }),
      };

    case CHANGE_TEXT:
      return {
        ...state,
        info: state.info.map((i) => {
          if (i.id === action.id) {
            return { ...i, text: action.payload.text, isShowed: false };
          }
          return i;
        }),
      };

    case CHANGE_AVA:
      return { ...state, image: action.payload.image };
    default:
      return state;
  }
};

export default InfoReducer;
