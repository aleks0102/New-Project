import React from "react";
import style from "./info-element.module.css";
import { showInfo, changeTextInfo } from "../../../../actions/info-action";
import { connect } from "react-redux";
import MainInput from "../../../../components/main-input/main-input";

const InfoElement = (props) => {
  const info = props.info;
  const newInfoElement = React.createRef();

  const Show = (id) => {
    props.Show(id);
  };

  const changeText = (id) => {
    let text = newInfoElement.current.value;
    props.changeText(id, text);
  };

  return (
    <div className={style.element}>
      <div className={style.infoValue}> {info.value}:</div>
      <div className={style.infoChange}>
        {info.isShowed ? (
          <div>
            <MainInput refs={newInfoElement} />
            <button onClick={() => changeText(info.id)}>Change</button>
          </div>
        ) : (
          <li onClick={() => Show(info.id)}>
            {info.text ? info.text : "Click to input text"}
          </li>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    Show: (id) => dispatch(showInfo(id)),
    changeText: (id, text) => dispatch(changeTextInfo(id, text)),
  };
};

export default connect(null, mapDispatchToProps)(InfoElement);
