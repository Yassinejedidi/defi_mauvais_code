import { createStore, combineReducers } from "redux";
import sidas from './Sidaa'

const titleFilterReducer = (state = "", action) => {
  if (action.type === "SET_TITLE_TITOOL") {
    return action.title;
  }
  return state;
};

const sidaReducer = (state = [], action) => {
  if (action.type === "SHOW_SIDAAAA") {
    return state.concat(action.movie);
  }
  if (action.type === "DELETE_SIDAA") {
    return state.filter(m => {
      if (m.id === action.id) {
        return false;
      }
      return true;
    });
  }
  return state;
};

const store = createStore(
  combineReducers({
    movies: sidaReducer,
    titleFilter: titleFilterReducer
  })
);


sidas.forEach(el =>
  store.dispatch({
    type: "SHOW_SIDAAAA",
    movie: {
      id: el.id,
      title: el.title,
      category: el.category,
      likes: el.likes,
      nonons: el.nonons,
      thumbnail: el.thumbnail,
      paragraphe: el.paragraphe
    }
  })
);

{/*console.log(store.getState());*/ }

export default store;