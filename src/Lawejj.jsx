import React from "react";
import { connect } from "react-redux";



const Search_Title = ({ value, onChangeText }) => {
  return (
    <form>
      <div className="input-group rounded">
        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={value}
          onChange={event => onChangeText(event.target.value)} />
      </div>
    </form>
  );
};

const mapStateToProp = state => {
  return {
    value: state.Search_Title
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeText: newText => {
      dispatch({
        type: "SET_TITLE_TITOOL",
        title: newText
      });
    }
  };
};

const FifiContainer = connect(mapStateToProp, mapDispatchToProps)(
  Search_Title
);

export default FifiContainer;




