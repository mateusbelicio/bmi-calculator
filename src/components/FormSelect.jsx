import { useId } from 'react';
import { useBMI } from '../hooks/useBMI';

import RadioInput from './RadioInput';

function FormSelect() {
  const id = useId();
  const { changeType, type } = useBMI();

  return (
    <div
      className="grid grid-cols-2 items-center gap-6"
      onChange={(e) => changeType(e.target.value)}
      aria-controls="calculator-form">
      <RadioInput name="Metric" id={id} isChecked={type === 'metric'} />
      <RadioInput name="Imperial" id={id} isChecked={type === 'imperial'} />
    </div>
  );
}

export default FormSelect;
