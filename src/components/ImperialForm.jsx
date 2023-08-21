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
          setValue={setHeightFT}
        />
        <NumberInput
          unit="in"
          placeholder="0"
          name="inche"
          id={`inche-${id}`}
          value={heightIN}
          setValue={setHeightIN}
        />
      </InputField>
      <InputField fieldName={'Weight'} id={`weight-${id}`}>
        <NumberInput
          unit="st"
          placeholder="0"
          name="stone"
          id={`stone-${id}`}
          value={weightST}
          setValue={setWeightST}
        />
        <NumberInput
          unit="lbs"
          placeholder="0"
          name="pound"
          id={`pound-${id}`}
          value={weightLBS}
          setValue={setWeightLBS}
        />
      </InputField>
    </form>
  );
}

export default ImperialForm;
