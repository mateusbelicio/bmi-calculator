const InputField = ({ fieldName, id, children }) => {
  return (
    <div className="text-sm flex flex-col gap-2 text-neutral-500">
      <label className="" htmlFor={id}>
        {fieldName}
      </label>
      <div className="flex gap-4">{children}</div>
    </div>
  );
};

export default InputField;
