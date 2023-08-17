import { useId, useState } from 'react';

import InputField from './InputField';
import NumberInput from './NumberInput';

function ImperialForm() {
  const [heightFT, setHeightFT] = useState('');
  const [heightIN, setHeightIN] = useState('');
  const [weightST, setWeightST] = useState('');
  const [weightLBS, setWeightLBS] = useState('');
  const id = useId();

  return (
    <form id="calculator-form" className="flex flex-col gap-4 sm:gap-6">
      <InputField fieldName={'Height'} id={`feet-${id}`}>
        <NumberInput
          unit="ft"
          placeholder="0"
          name="feet"
          id={`feet-${id}`}
          value={heightFT}
          onChange={(e) => setHeightFT(e.target.value)}
        />
        <NumberInput
          unit="in"
          placeholder="0"
          name="inche"
          id={`inche-${id}`}
          value={heightIN}
          onChange={(e) => setHeightIN(e.target.value)}
        />
      </InputField>
      <InputField fieldName={'Weight'} id={`weight-${id}`}>
        <NumberInput
          unit="st"
          placeholder="0"
          name="stone"
          id={`stone-${id}`}
          value={weightST}
          onChange={(e) => setWeightST(e.target.value)}
        />
        <NumberInput
          unit="lbs"
          placeholder="0"
          name="pound"
          id={`pound-${id}`}
          value={weightLBS}
          onChange={(e) => setWeightLBS(e.target.value)}
        />
      </InputField>
    </form>
  );
}

export default ImperialForm;
