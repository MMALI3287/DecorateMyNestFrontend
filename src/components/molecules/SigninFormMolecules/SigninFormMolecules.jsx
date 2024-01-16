import "./SigninFormMolecules.style.scss";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FormInput from "../../atoms/FormInput/FormInput";
import Button from "../../atoms/Buttons/Button";
import PasswordInput from "../../atoms/PasswordInput/PasswordInput";
import RoundLoader from "../../atoms/RoundLoader/RoundLoader";
import Checkbox from "../../atoms/CheckBox/Checkbox";
import LinearLoader from "./../../atoms/LineLoader/LineLoader";
import ApiCalls from "../../../apis/ApiCalls";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addRole, addUser } from "../../../Store/Slices/userSlice";
const SigninFormMolecules = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const navigate = useNavigate();
  let dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const api = new ApiCalls();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const authenticationData = await api.getAuthenticaions();

      // Check if there is a matching email and password
      const isMatch = authenticationData.some(
        (auth) =>
          auth.EmailAddress === data.email.trim() &&
          auth.Password === data.password.trim()
      );

      console.log("Email and password match:", isMatch);

      const authenticationById = await api.getAuthenticationById();

      dispatch(addUser(data.email.trim()));
      dispatch(addRole(data));
      if (isMatch) {
        // Redirect or perform other actions on successful login
        navigate("/");
      } else {
        // Handle unsuccessful login (display an error message, etc.)
        console.log("Invalid email or password");
      }
    } catch (error) {
      console.error("Error fetching authentication data:", error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        labelText="Email"
        type="email"
        name="email"
        defaultValue={""}
        control={control}
        errors={errors}
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        }}
      />
      <PasswordInput control={control} errors={errors} />
      <div className="input-group-checkbox">
        <div>
          <Checkbox text="Remember me" display="flex" />
        </div>
        <div>
          <Link to="/forgot-password">
            <p>Forgot Password?</p>
          </Link>
        </div>
      </div>
      {loading ? (
        <Button type="submit" disabled={true} text={<LinearLoader />} />
      ) : (
        <Button type="submit" text="Login" />
      )}
    </form>
  );
};

export default SigninFormMolecules;
