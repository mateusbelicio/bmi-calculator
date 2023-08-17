import { useId, useState } from 'react';

import InputField from './InputField';
import NumberInput from './NumberInput';

function MetricForm() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const id = useId();

  return (
    <form id="calculator-form" className="flex flex-col sm:flex-row gap-4 sm:gap-6">
      <InputField fieldName={'Height'} id={`height-${id}`}>
        <NumberInput
          unit="cm"
          placeholder="0"
          name="height"
          id={`height-${id}`}
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </InputField>
      <InputField fieldName={'Weight'} id={`weight-${id}`}>
        <NumberInput
          unit="kg"
          placeholder="0"
          name="weight"
          id={`weight-${id}`}
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </InputField>
    </form>
  );
}

export default MetricForm;
