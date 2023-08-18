import BMICalculator from '../components/BMICalculator';
import Logo from '../components/Logo';

function HeroSection() {
  return (
    <section className="hero-section pt-8 lg:pt-[4.6875rem] lg:pb-[4.6875rem] pb-9 sm:pb-12 flex flex-col items-center gap-y-6 sm:gap-y-10 lg:gap-y-7 main-container">
      <Logo className="lg:justify-self-start" />
      <div className="text-center text-flow lg:text-flow-lg lg:text-start lg:col-start-1 lg:col-end-6">
        <h1 className="text-2xl font-semibold">
          Body Mass <br /> Index Calculator
        </h1>
        <p>
          Better understand your weight in relation to your height using our body mass index (BM)
          calculator. While BMI is not the sole determinant of a healthy weight, it offers a
          valuable starting point to evaluate your overall health and well-being.
        </p>
      </div>

      <BMICalculator className="lg:col-start-7 col-end-[-1]" />
    </section>
  );
}

export default HeroSection;
