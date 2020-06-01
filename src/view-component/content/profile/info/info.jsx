import React, { useState } from "react";
import style from "./info.module.css";
import { connect } from "react-redux";
import { changeAvatar, changeUser } from "../../../../actions/info-action";
import Components from "../../../../components/components";

const Info = (props) => {
  let user = props.user;
  let avatar = props.avatar;

  let [file, getFile] = useState(avatar);
  let [name, setName] = useState(user.name);
  let [lastname, setLastName] = useState(user.lastname);
  let [phone, setPhone] = useState(user.phone);
  let [email, setEmail] = useState(user.email);

  const changeAva = () => {
    let reader = new FileReader();
    if (file != null && file.size < 300000) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        let avatar = reader.result;
        props.changeAva(avatar);
      };
    } else alert("Image not selected or very big");
  };

  const changeUser = () => {
    let user = {
      name: name,
      lastname: lastname,
      phone: phone,
      email: email,
    };
    props.changeUser(user);
  };

  return (
    <div className={style.info}>
      <div className={style.ava}>
        <h3>My avatar</h3>
        <img
          src={
            avatar
              ? avatar
              : "https://bmpsocial.com/wp-content/uploads/2015/10/Anonymous.png"
          }
          alt=""
        />
        <input
          type="file"
          onChange={(e) => getFile((file = e.target.files[0]))}
        />
        <button onClick={changeAva}>Submit</button>
      </div>

      <div className={style.data}>
        <h2>Information</h2>
        <Components.MainInput
          onChange={(e) => setName((name = e.target.value))}
          text={user.name}
          labelText="Name"
          defaultValue={user.name}
        />
        <Components.MainInput
          onChange={(e) => setLastName((lastname = e.target.value))}
          text={user.lastname}
          labelText={"Last name"}
          defaultValue={user.lastname}
        />
        <Components.MainInput
          onChange={(e) => setPhone((phone = e.target.value))}
          text={user.phone}
          labelText={"Phone"}
          defaultValue={user.phone}
        />
        <Components.MainInput
          onChange={(e) => setEmail((email = e.target.value))}
          text={user.email}
          labelText={"Email"}
          defaultValue={user.email}
        />
        <Components.MainButton text={"Save"} onSubmit={changeUser} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.profilePage.info, avatar: state.profilePage.avatar };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeAva: (avatar) => dispatch(changeAvatar(avatar)),
    changeUser: (user) => dispatch(changeUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);
