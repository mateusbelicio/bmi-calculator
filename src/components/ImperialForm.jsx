import { useId, useState } from 'react';

import InputField from './InputField';
import NumberInput from './NumberInput';

function ImperialForm() {
  const [heightFT, setHeightFT] = useState(null);
  const [heightIN, setHeightIN] = useState(null);
  const [weightST, setWeightST] = useState(null);
  const [weightLBS, setWeightLBS] = useState(null);
  const id = useId();

  return (
    <form className="flex flex-col gap-4">
      <InputField fieldName={'Height'} id={`height-${id}`}>
        <NumberInput
          unit="ft"
          placeholder="0"
          name="height"
          id={`height-${id}`}
          value={heightFT}
          onChange={(e) => setHeightFT(e.target.value)}
        />
        <NumberInput
          unit="in"
          placeholder="0"
          name="height"
          id={`height-${id}`}
          value={heightIN}
          onChange={(e) => setHeightIN(e.target.value)}
        />
      </InputField>
      <InputField fieldName={'Weight'} id={`weight-${id}`}>
        <NumberInput
          unit="st"
          placeholder="0"
          name="weight"
          id={`weight-${id}`}
          value={weightST}
          onChange={(e) => setWeightST(e.target.value)}
        />
        <NumberInput
          unit="lbs"
          placeholder="0"
          name="weight"
          id={`weight-${id}`}
          value={weightLBS}
          onChange={(e) => setWeightLBS(e.target.value)}
        />
      </InputField>
    </form>
  );
}

export default ImperialForm;
