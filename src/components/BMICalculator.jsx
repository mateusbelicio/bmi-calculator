import { useState } from 'react';

import MetricForm from './MetricForm';
import ImperialForm from './ImperialForm';
import FormSelect from './FormSelect';

function BMICalculator() {
  const [BMI, setBMI] = useState(null);
  const [selectedOption, setSelectedOption] = useState('metric');

  return (
    <div className="p-6 bg-white rounded-2xl shadow shadow-primary-100/25 flex flex-col gap-6 w-full">
      <h2 className="text-lg font-semibold">Enter your details below</h2>

      <FormSelect setSelectedOption={setSelectedOption} selectedOption={selectedOption} />
      {selectedOption === 'metric' && <MetricForm setBMI={setBMI} />}
      {selectedOption === 'imperial' && <ImperialForm setBMI={setBMI} />}

      <div>
        <h3>
          Your BMI is... <strong>X</strong>
        </h3>
        <p>
          Your BMI suggests you&apos;re {/* add classification */}. Your ideal weight is between{' '}
          {/* add range */}.
        </p>
      </div>
    </div>
  );
}

export default BMICalculator;
