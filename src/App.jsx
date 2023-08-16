import BMIMeaningSection from './layout/BMIMeaningSection';
import HeroSection from './layout/HeroSection';
import TipsSection from './layout/TipsSection';

export default function App() {
  return (
    <main>
      <HeroSection />
      <BMIMeaningSection />
      <TipsSection />

      <section>
        <div>
          <h2>Limitations of BMI</h2>
          <p>
            Although BMI is often a practical indicator of healthy weight, it is not suited for
            every person. Specific groups should carefully consider their BMI outcomes, and in
            certain cases, the measurement may not be beneficial to use.
          </p>
        </div>

        <div>
          <header>
            <img src="" alt="" />
            <h3>Gender</h3>
          </header>
          <p>
            The development and body fat composition of girls and boys vary with age. Consequently,
            a child&apos;s age and gender are considered when evaluating their BMI.
          </p>
        </div>
        <div>
          <header>
            <img src="" alt="" />
            <h3>Age</h3>
          </header>
          <p>
            In aging individuals, increased body fat and muscle loss may cause BMI to underestimate
            body fat content.
          </p>
        </div>
        <div>
          <header>
            <img src="" alt="" />
            <h3>Muscle</h3>
          </header>
          <p>
            BMI may misclassify muscular individuals as overweight or obese, as it doesn&apos;t
            differentiate muscle from fat.
          </p>
        </div>
        <div>
          <header>
            <img src="" alt="" />
            <h3>Pregnancy</h3>
          </header>
          <p>
            Expectant mothers experience weight gain due to their growing baby. Maintaining a
            healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and
            child.
          </p>
        </div>
        <div>
          <header>
            <img src="" alt="" />
            <h3>Race</h3>
          </header>
          <p>
            Certain health concerns may affect individuals of some Black and Asian origins at lower
            BMIs than others. To learn more, it is advised to discuss this with your GP or practice
            nurse.
          </p>
        </div>
      </section>
    </main>
  );
}

{
  /* <svg className="icon">
  <use xlinkHref={`${icons}#icon-exercise`}></use>
</svg> */
}
