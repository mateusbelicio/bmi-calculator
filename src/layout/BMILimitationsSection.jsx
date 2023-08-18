import InfoCard from '../components/InfoCard';

function BMILimitationsSection() {
  return (
    <section className="mt-9 sm:mt-12 lg:mt-[3.75rem] lg:mb-[7.5rem] mb-24 main-container gap-y-14 relative">
      <div className="text-flow-md text-center md:col-span-full lg:col-start-1 lg:col-end-7 lg:text-left lg:relative lg:z-10">
        <h2 className="text-xl font-semibold">Limitations of BMI</h2>
        <p className="lg:after:content-[url('/bmi-calculator/src/assets/pattern-curved-line-right.svg')] lg:relative lg:after:absolute lg:after:top-[calc(100%+4rem)] lg:after:left-[10.3125rem]">
          Although BMI is often a practical indicator of healthy weight, it is not suited for every
          person. Specific groups should carefully consider their BMI outcomes, and in certain
          cases, the measurement may not be beneficial to use.
        </p>
      </div>

      <ul className="grid gap-y-4 lg:absolute lg:pb-[7.5rem] lg:h-max lg:inset-0 sm:gap-y-6 sm:grid-cols-[inherit] sm:gap-x-4 sm:justify-center sm:justify-items-center lg:gap-x-[inherit]">
        <InfoCard
          className="sm:col-span-6 lg:col-start-8 lg:col-end-12 lg:mb-2"
          title="Gender"
          icon="gender">
          The development and body fat composition of girls and boys vary with age. Consequently, a
          child&apos;s age and gender are considered when evaluating their BMI.
        </InfoCard>

        <InfoCard className="sm:col-span-6 lg:col-start-5 lg:col-end-9" title="Age" icon="age">
          In aging individuals, increased body fat and muscle loss may cause BMI to underestimate
          body fat content.
        </InfoCard>

        <InfoCard
          className="sm:col-span-6 lg:col-start-9 lg:col-end-[-1]"
          title="Muscle"
          icon="muscle">
          BMI may misclassify muscular individuals as overweight or obese, as it doesn&apos;t
          differentiate muscle from fat.
        </InfoCard>

        <InfoCard
          className="sm:col-span-6 lg:col-start-3 lg:col-end-7"
          title="Pregnancy"
          icon="pregnancy">
          Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy
          pre-pregnancy BMI is advisable to minimise health risks for both mother and child.
        </InfoCard>

        <InfoCard
          className="sm:col-start-4 sm:col-end-[-4] lg:col-start-7 lg:col-end-11"
          title="Race"
          icon="race">
          Certain health concerns may affect individuals of some Black and Asian origins at lower
          BMIs than others. To learn more, it is advised to discuss this with your GP or practice
          nurse.
        </InfoCard>
      </ul>
    </section>
  );
}

export default BMILimitationsSection;
