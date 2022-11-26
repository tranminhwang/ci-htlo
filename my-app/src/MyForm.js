import { useState } from "react";

const MyForm = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastNam] = useState("");
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
  });

  // console.log("render");
  // const onChangeFirstName = (e) => {
  //   setFirstName(e.target.value);
  // };
  // const onChangeLastName = (e) => {
  //   setLastNam(e.target.value);
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(firstName, lastName);
    // call api post data to server
    const firstNameValue = e.target.firstName.value;
    const lastNameValue = e.target.lastName.value;
    const user = {
      firstName: firstNameValue,
      lastName: lastNameValue,
    };
    setUserInfo(user);
    // setFirstName(firstNameValue);
    // setLastNam(lastNameValue);
  };

  console.log(userInfo);
  // console.log(firstName, lastName);

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>First Name</label>
        <input name="firstName" placeholder="Enter your F name" />
      </div>
      <div>
        <label>Last Name</label>
        <input name="lastName" placeholder="Enter your L name" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
