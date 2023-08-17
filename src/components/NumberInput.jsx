function NumberInput({ unit, ...rest }) {
  return (
    <div className="w-full relative">
      <input
        type="text"
        className="w-full pl-6 pr-12 sm:pr-16 py-5 border border-neutral-300 rounded-xl text-lg font-semibold focus-visible:border-primary-400 focus-visible:outline-none"
        {...rest}
      />
      <span className="absolute top-1/2 -translate-y-1/2 right-6 z-10 text-lg text-primary-400 font-semibold">
        {unit}
      </span>
    </div>
  );
}

export default NumberInput;
