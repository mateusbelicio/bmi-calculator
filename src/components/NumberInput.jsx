function isValidInput(value) {
  return /^(?!0)\d{1,3}$/g.test(value);
}

function NumberInput({ unit, setValue, ...rest }) {
  const handleChange = (e) => {
    if (isValidInput(e.target.value)) setValue(e.target.value);
    else setValue(e.target.value.slice(0, -1));
  };

  return (
    <div className="w-full relative">
      <input
        type="text"
        className="w-full pl-6 pr-12 sm:pr-16 py-5 border border-neutral-300 rounded-xl text-lg font-semibold focus-visible:border-primary-400 focus-visible:outline-none"
        onChange={handleChange}
        {...rest}
      />
      <span className="absolute top-1/2 -translate-y-1/2 right-6 z-10 text-lg text-primary-400 font-semibold">
        {unit}
      </span>
    </div>
  );
}

export default NumberInput;
