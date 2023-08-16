function BMIResult({ BMI }) {
  const status = BMI >= 23 ? 'healthy weight' : 'overweight';
  const rangeMin = 63.3;
  const rangeMax = 85.2;

  return (
    <div className="p-8 flex flex-col gap-6 rounded-2xl bg-gradient-to-r from-primary-400 to-primary-300 text-white">
      {!BMI ? (
        <>
          <h3 className="text-lg font-semibold">Welcome!</h3>
          <p className="text-sm">
            Enter your height and weight and you’ll see your BMI result here
          </p>
        </>
      ) : (
        <>
          <h3 className="text-base font-semibold">
            Your BMI is... <span className="text-2xl block mt-2">{BMI?.toFixed(1)}</span>
          </h3>
          <p className="text-sm">
            Your BMI suggests you&apos;re {status}. Your ideal weight is between{' '}
            <span className="font-semibold">
              {rangeMin}kgs - {rangeMax}kgs
            </span>
            .
          </p>
        </>
      )}
    </div>
  );
}

export default BMIResult;
