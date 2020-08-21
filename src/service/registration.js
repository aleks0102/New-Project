import Axios from "axios";

export const saveUser = (props, newUser) => {
    Axios.post("https://localhost:44373/api/user/register", newUser).then(
      (response) => {
        console.log(response);
        if (response.status == 200) {
          props.onClick();
        }
      }
    );
  };
