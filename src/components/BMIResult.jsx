function BMIResult({ BMI }) {
  const status = BMI >= 23 ? 'healthy weight' : 'overweight';
  const rangeMin = 63.3;
  const rangeMax = 85.2;

  return (
    <>
      {!BMI ? (
        <ResultDisplay className="sm:rounded-[1rem_4.5rem_4.5rem_1rem]">
          <h3 className="text-lg font-semibold">Welcome!</h3>
          <p className="text-sm text-white">
            Enter your height and weight and you’ll see your BMI result here
          </p>
        </ResultDisplay>
      ) : (
        <ResultDisplay className="sm:flex-row sm:justify-between sm:items-center sm:rounded-[1rem_5rem_5rem_1rem]">
          <h3 className="text-base font-semibold">
            Your BMI is...{' '}
            <span className="text-2xl block mt-2">
              {/* {BMI?.toFixed(1)} */}
              {23.6}
            </span>
          </h3>
          <p className="text-sm sm:max-w-[16rem] text-white">
            Your BMI suggests you&apos;re {status}. Your ideal weight is between{' '}
            <span className="font-semibold">
              {rangeMin}kgs - {rangeMax}kgs
            </span>
            .
          </p>
        </ResultDisplay>
      )}
    </>
  );
}

function ResultDisplay({ children, className }) {
  return (
    <div
      className={`p-8 flex selection:bg-white/75 selection:text-neutral-500 flex-col gap-6 rounded-2xl bg-gradient-to-r from-primary-400 to-primary-300 text-white ${className}`}>
      {children}
    </div>
  );
}

export default BMIResult;
