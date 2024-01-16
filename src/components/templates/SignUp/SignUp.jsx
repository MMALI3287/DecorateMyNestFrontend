import SignupOrganism from "../../organisms/SignupOrganism/SignupOrganism";
import "./Signup.style.scss";
import SignupImageOrganism from "./../../organisms/SignupImageOrganism/SignupImageOrganism";

const Signup = () => {
  return (
    <>
      <div className="container-main">
        <div className="column1">
          <SignupImageOrganism />
        </div>
        <div className="column2">
          <SignupOrganism />
        </div>
      </div>
    </>
  );
};

export default Signup;
