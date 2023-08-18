import { useState } from 'react';

import MetricForm from './MetricForm';
import ImperialForm from './ImperialForm';
import FormSelect from './FormSelect';
import BMIResult from './BMIResult';

function BMICalculator({ className }) {
  const [BMI, setBMI] = useState(null);
  const [type, setType] = useState('metric');

  return (
    <div
      className={`p-6 sm:p-8 md:max-w-[43rem] bg-white rounded-2xl shadow shadow-primary-100/25 flex flex-col gap-6 sm:gap-8 w-full ${className}`}>
      <h2 className="text-lg font-semibold">Enter your details below</h2>
      <FormSelect setSelectedOption={setType} selectedOption={type} />

      {type === 'metric' && <MetricForm setBMI={setBMI} />}
      {type === 'imperial' && <ImperialForm setBMI={setBMI} />}

      <BMIResult BMI={BMI} />
    </div>
  );
}

export default BMICalculator;
