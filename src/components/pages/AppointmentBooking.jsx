// import "../molecules/SigninFormMolecules/SigninFormMolecules";
// import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
import FormInput from "../atoms/FormInput/FormInput";
// import Navbar2 from "./Navbar/Navbar2";






const AppointmentBooking = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    // reset,
  } = useForm({
    mode: "onChange",
  });


  return (

    <div className="font-sans">
     
      <h1 className='text-7xl font-bold text-blue-950 mt-20 text-center'>
        Put In Your Date</h1>
      <p className="text-gray-500 italic text-center my-10">Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Quibusdam at ut eligendi asperiores ratione eaque.</p>
      <form onSubmit={handleSubmit()} className="w-1/2 mx-auto">
        <FormInput
          className="border-2"
          labelText="Date"
          type="date"
          name="username"
          defaultValue={""}
          control={control}
          errors={errors}
          rules={{
            required: "Date is required",
            // maxLength: {
            //   value: 20,
            //   message: "Date should be less than 20 letters",
            // },
            // minLength: {
            //   value: 6,
            //   message: "Username should be more than 6 letters",
            // },
          }}
        />
      </form>
    </div>

  )
}

export default AppointmentBooking