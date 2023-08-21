import MetricForm from './MetricForm';
import ImperialForm from './ImperialForm';
import FormSelect from './FormSelect';
import BMIResult from './BMIResult';
import { useBMI } from '../hooks/useBMI';

function BMICalculator({ className }) {
  const { type } = useBMI();

  return (
    <div
      className={`p-6 sm:p-8 md:max-w-[43rem] bg-white rounded-2xl shadow shadow-primary-100/25 flex flex-col gap-6 sm:gap-8 w-full ${className}`}>
      <h2 className="text-lg font-semibold">Enter your details below</h2>
      <FormSelect />

      {type === 'metric' && <MetricForm />}
      {type === 'imperial' && <ImperialForm />}

      <BMIResult />
    </div>
  );
}

export default BMICalculator;
