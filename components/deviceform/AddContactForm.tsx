import { useForm } from "react-hook-form";
import Input from "./Input";
import InputSpacer from "./InputSpacer";

const FormError = ({ errorMessage }) => {
  return <p className="mt-1 text-red-300">{errorMessage}</p>;
};

interface AddContactFormProps {
  onSubmit: any;
}

export default function AddContactForm(props: AddContactFormProps) {
  const { register, handleSubmit, errors } = useForm();
  return (
    <form className="flex flex-col" onSubmit={handleSubmit(props.onSubmit)}>
      <InputSpacer>
        <Input
          placeholder="Nombre"
          name="firstName"
          formRef={register({ required: true })}
        />
        {errors.firstName && (
          <FormError errorMessage="Es necesario el nombre" />
        )}
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder="Primer Apellido"
          name="fLastName"
          formRef={register({ required: true })}
        />
        {errors.fLastName && (
          <FormError errorMessage="Es necesario el primer apellido" />
        )}
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder="Segundo Apellido"
          name="sLastName"
          formRef={register({ required: true })}
        />
        {errors.sLastName && (
          <FormError errorMessage="Es necesario el segundo apellido" />
        )}
      </InputSpacer>

      <button
        className="p-4 text-blue-100 bg-blue-500 rounded-md"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
