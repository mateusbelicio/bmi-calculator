function RadioInput({ id, name, isChecked }) {
  return (
    <label
      className="font-semibold flex items-center gap-[1.125rem]"
      htmlFor={`${name.toLowerCase()}-${id}`}>
      <input
        className="radio-button"
        type="radio"
        name={id}
        id={`${name.toLowerCase()}-${id}`}
        value={name.toLowerCase()}
        checked={isChecked}
        onChange={() => {}}
      />
      <p>{name}</p>
    </label>
  );
}

export default RadioInput;
