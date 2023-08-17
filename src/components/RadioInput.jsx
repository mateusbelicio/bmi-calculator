function RadioInput({ id, name, isChecked }) {
  return (
    <label
      className="font-semibold flex items-center gap-[1.125rem] relative radio-button cursor-pointer"
      htmlFor={`${name.toLowerCase()}-${id}`}>
      <input
        className="cursor-pointer shrink-0"
        type="radio"
        aria-selected={isChecked}
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
