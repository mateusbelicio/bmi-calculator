import { useId } from 'react';
import RadioInput from './RadioInput';

function FormSelect({ selectedOption, setSelectedOption }) {
  const id = useId();

  function handleChange(e) {
    setSelectedOption(e.target.value);
  }

  return (
    <fieldset className="grid grid-cols-2 items-center gap-6" onChange={handleChange}>
      <RadioInput name="Metric" id={id} isChecked={selectedOption === 'metric'} />
      <RadioInput name="Imperial" id={id} isChecked={selectedOption === 'imperial'} />
    </fieldset>
  );
}

export default FormSelect;
