// import "../molecules/SigninFormMolecules/SigninFormMolecules";
// import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FormInput from "../atoms/FormInput/FormInput";






const AppointmentBooking = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });


  return (

    <div className="">
       <h1 className='text-7xl font-bold text-white mt-20 text-center'>
          Put In Your Date</h1>
          <p className="text-white italic text-center my-10">Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Quibusdam at ut eligendi asperiores ratione eaque.</p>
      <form onSubmit={handleSubmit()}>
        <FormInput
        className="text-amber-600 w-1/2"
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