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
      <div className="flex justify-end gap-10">
        

        <h1 className="text-4xl text-black font-bold mt-3">LOGO</h1>
        <div className="avatar">
          <div className="w-20 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <h1 className="text-4xl text-black font-bold mt-3">Name</h1>
      </div>
      <h1 className='text-7xl font-bold text-blue-950 mt-20 text-center'>
        Put In Your Date</h1>
      <p className="text-gray-500 italic text-center my-10">Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Quibusdam at ut eligendi asperiores ratione eaque.</p>
      <form onSubmit={handleSubmit()}>
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