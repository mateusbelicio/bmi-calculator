import InfoCard from '../components/InfoCard';

function BMILimitationsSection() {
  return (
    <section className="pt-9 pb-24 main-container [&>:not(:first-child)]:mt-4">
      <div className="text-flow text-center">
        <h2 className="text-xl font-semibold">Limitations of BMI</h2>
        <p>
          Although BMI is often a practical indicator of healthy weight, it is not suited for every
          person. Specific groups should carefully consider their BMI outcomes, and in certain
          cases, the measurement may not be beneficial to use.
        </p>
      </div>

      <InfoCard title="Gender" icon="gender">
        The development and body fat composition of girls and boys vary with age. Consequently, a
        child&apos;s age and gender are considered when evaluating their BMI.
      </InfoCard>

      <InfoCard title="Age" icon="age">
        In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body
        fat content.
      </InfoCard>

      <InfoCard title="Muscle" icon="muscle">
        BMI may misclassify muscular individuals as overweight or obese, as it doesn&apos;t
        differentiate muscle from fat.
      </InfoCard>

      <InfoCard title="Pregnancy" icon="pregnancy">
        Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy
        pre-pregnancy BMI is advisable to minimise health risks for both mother and child.
      </InfoCard>

      <InfoCard title="Race" icon="race">
        Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs
        than others. To learn more, it is advised to discuss this with your GP or practice nurse.
      </InfoCard>
    </section>
  );
}

export default BMILimitationsSection;
