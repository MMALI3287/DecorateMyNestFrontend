import SignupOrganism from "../../organisms/SignupOrganism/SignupOrganism";
import "./Signup.style.scss";

const Signup = () => {
  return (
    <>
      <div className="container-main-signup">
        <div className="column1">
          <div className="image-interior-signup">
            <img src="https://jaynedesignstudio.com/wp-content/uploads/2016/04/Perelman_JAYNE_-42566-FINAL-A-crop-1280x1419.jpg" />
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
