import appState from "../../store/state";

export default (state = appState, action) => {
  switch (action.type) {
    case "test":
      return {
        ...state,
        accountCount: action.payload,
      };
    default:
      return state;
  }
};
