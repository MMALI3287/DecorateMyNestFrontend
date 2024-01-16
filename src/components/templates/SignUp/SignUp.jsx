import SignupOrganism from "../../organisms/SignupOrganism/SignupOrganism";
import "./Signup.style.scss";

const Signup = () => {
  return (
    <>
      <div className="container-main-signup">
        <div className="column1">
          <div className="image-interior-signup">
            <img src="https://media.architecturaldigest.com/photos/63d195596b8c438a8a174891/16:9/w_2240,c_limit/ISHKADESIGNS_WHITEHOUSE_37.jpg" />
          </div>
        </div>
        <div className="column2">
          <SignupOrganism />
        </div>
      </div>
    </>
  );
};

export default Signup;
