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
import ApiCalls from "../../../apis/APICalls";
import { useState, useEffect } from "react";
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

  const [errorMessage, setErrorMessage] = useState(null);

  const [loading, setLoading] = useState(false);

  const [rememberMe, setRememberMe] = useState(false);

  const api = new ApiCalls();

  useEffect(() => {
    console.log(rememberMe);
  }, [rememberMe]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const authenticated = await api.loginUser(data.username, data.password);

      if (authenticated) {
        const authData = await api.getUserByUsername(data.username);

        if (rememberMe) {
          localStorage.setItem("bearerToken", authenticated.TokenKey);
          localStorage.setItem("username", authenticated.UserId);
          localStorage.setItem("authId", authData.AuthId);
          localStorage.setItem("role", authData.Role);
          localStorage.setItem("picture", authData.ProfilePictrue);
        } else {
          sessionStorage.setItem("bearerToken", authenticated.TokenKey);
          sessionStorage.setItem("username", authenticated.UserId);
          sessionStorage.setItem("authId", authData.AuthId);
          sessionStorage.setItem("role", authData.Role);
          sessionStorage.setItem("picture", authData.ProfilePictrue);
        }

        navigate("/");
      }
    } catch (error) {
      console.error("Error fetching authentication data:", error.message);

      setErrorMessage("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        labelText="Username"
        type="text"
        name="username"
        defaultValue={""}
        control={control}
        errors={errors}
        rules={{
          required: "Username is required",
          maxLength: {
            value: 20,
            message: "Username should be less than 20 letters",
          },
          minLength: {
            value: 6,
            message: "Username should be more than 6 letters",
          },
        }}
      />
      <PasswordInput control={control} errors={errors} />
      <div className="input-group-checkbox">
        <div>
          <Checkbox
            text="Remember me"
            display="flex"
            onChange={() => setRememberMe(!rememberMe)}
          />
        </div>
        <div>
          <Link to="/forgot-password">
            <p>Forgot Password?</p>
          </Link>
        </div>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {loading ? (
        <Button type="submit" disabled={true} text={<LinearLoader />} />
      ) : (
        <Button type="submit" text="Login" />
      )}
      <h2 className="text-center">
        Do not have an account?{" "}
        <Link to="/signup" className="text-lg text-violet-700">
          Sign Up
        </Link>
      </h2>
    </form>
  );
};

export default SigninFormMolecules;
