function RadioInput({ id, name, isChecked }) {
  return (
    <label
      className="font-semibold flex items-center gap-[1.125rem] relative radio-button"
      htmlFor={`${name.toLowerCase()}-${id}`}>
      <input
        className=" shrink-0"
        type="radio"
        name={id}
        id={`${name.toLowerCase()}-${id}`}
        value={name.toLowerCase()}
        checked={isChecked}
        onChange={() => {}}
      />
      <span>{name}</span>
    </label>
  );
}

export default RadioInput;
