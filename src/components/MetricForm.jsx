import { useId, useState } from 'react';

import InputField from './InputField';
import NumberInput from './NumberInput';

function MetricForm() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const id = useId();

  return (
    <form className="flex flex-col gap-4">
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
