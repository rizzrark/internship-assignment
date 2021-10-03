interface InputProps {
  placeholder: string;
  name: string;
  formRef: any;
}

export default function Input(props: InputProps) {
  return (
    <input
      className="w-full px-2 py-3 text-xl rounded-lg shadow "
      name={props.name}
      placeholder={props.placeholder}
      ref={props.formRef}
    />
  );
}
