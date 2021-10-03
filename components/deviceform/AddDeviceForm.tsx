import { useForm } from "react-hook-form";
import Input from "./Input";
import InputSpacer from "./InputSpacer";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const FormError = ({ errorMessage }) => {
  return <p className="mt-1 text-red-500">{errorMessage}</p>;
};

interface AddDeviceForm {
  onSubmit: any;
}

export default function AddDeviceForm({ onSubmit }: AddDeviceForm) {
  const { register, handleSubmit, errors } = useForm();
  const notify = () =>
    toast.success("Device Saved", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
    });
  return (
    <>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <InputSpacer>
          <Input
            placeholder="Device"
            name="device"
            formRef={register({
              required: true,
            })}
          />
          {errors.name && <FormError errorMessage="the name is required" />}
        </InputSpacer>

        <InputSpacer>
          <textarea
            className="w-full px-2 py-3 text-xl rounded-lg shadow"
            cols={58}
            rows={8}
            placeholder="Description"
            name="description"
            ref={register()}
          />
        </InputSpacer>

        <button
          onClick={notify}
          className="grid self-end w-10 h-10 p-2 text-lg font-semibold text-white uppercase bg-blue-600 rounded-lg shadow-2xl place-items-center"
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g fill="#fff">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </g>
          </svg>
          <ToastContainer />
        </button>
      </form>
    </>
  );
}
