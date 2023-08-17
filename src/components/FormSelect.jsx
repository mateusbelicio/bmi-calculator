import { useId } from 'react';
import RadioInput from './RadioInput';

function FormSelect({ selectedOption, setSelectedOption }) {
  const id = useId();

  function handleChange(e) {
    setSelectedOption(e.target.value);
  }

  return (
    <div
      className="grid grid-cols-2 items-center gap-6"
      onChange={handleChange}
      aria-controls="calculator-form">
      <RadioInput name="Metric" id={id} isChecked={selectedOption === 'metric'} />
      <RadioInput name="Imperial" id={id} isChecked={selectedOption === 'imperial'} />
    </div>
  );
}

export default FormSelect;
