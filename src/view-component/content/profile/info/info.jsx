import React from "react";
import style from "./info.module.css";
import InfoElement from "./info-element";
import { connect } from "react-redux";
import { changeAvatar } from "../../../../actions/info-action";

const Info = (props) => {
  let newImage = React.createRef();
  let info = props.info;
  let image = props.image;

  const changeAva = () => {
    let file = newImage.current.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      let image = reader.result;
      props.changeAva(image);
    };
  };

  return (
    <div className={style.info}>
      <div className={style.ava}>
        <h3>My avatar</h3>
        <img
          src={
            image
              ? image
              : "https://bmpsocial.com/wp-content/uploads/2015/10/Anonymous.png"
          }
          alt=""
        />
        <form>
          <input type="file" ref={newImage} onChange={changeAva} />
        </form>
      </div>

      <div className={style.data}>
        <h2>Information</h2>
        {info.map((info) => (
          <div key={info.id}>
            <InfoElement info={info} />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { info: state.infoPage.info, image: state.infoPage.image };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeAva: (image) => dispatch(changeAvatar(image)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);
