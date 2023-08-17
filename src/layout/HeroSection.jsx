import BMICalculator from '../components/BMICalculator';
import Logo from '../components/Logo';

function HeroSection() {
  return (
    <section className="hero-section pt-8 pb-9 flex flex-col items-center gap-y-6 sm:gap-y-10 main-container">
      <Logo />
      <div className="text-center text-flow">
        <h1 className="text-2xl font-semibold">
          Body Mass <br /> Index Calculator
        </h1>
        <p>
          Better understand your weight in relation to your height using our body mass index (BM)
          calculator. While BMI is not the sole determinant of a healthy weight, it offers a
          valuable starting point to evaluate your overall health and well-being.
        </p>
      </div>

      <BMICalculator />
    </section>
  );
}

export default HeroSection;
