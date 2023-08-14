export default function App() {
  return (
    <>
      <div>
        <h1>Body Mass Index Calculator</h1>

        <p>
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
      </div>

      <div>
        <h2>Enter your details below</h2>

        <form>
          <fieldset>
            <label htmlFor="">Metric</label>
            <input type="radio" name="" id="" />
            <label htmlFor="">Imperial</label>
            <input type="radio" name="" id="" />
          </fieldset>
          <fieldset>
            <label htmlFor="">Height</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Weight</label>
            <input type="text" name="" id="" />
          </fieldset>
          <fieldset disabled="disabled">
            <label htmlFor="">
              <p>Height</p>
              <input type="text" name="" id="" />
              <input type="text" name="" id="" />
            </label>
            <label htmlFor="">
              <p>Weight</p>
              <input type="text" name="" id="" />
              <input type="text" name="" id="" />
            </label>
          </fieldset>
        </form>

        <div>
          <h3>
            Your BMI is... <strong>X</strong>
          </h3>
          <p>
            Your BMI suggests you&apos;re {/* add classification */}. Your ideal
            weight is between {/* add range */}.
          </p>
        </div>
      </div>

      <section>
        <img src="" alt="" />
        <h2>What your BMI result means</h2>
        <p>
          A BMI range of 18.5 to 24.9 is considered a &apos;healthy
          weight.&apos; Maintaining a healthy weight may lower your chances of
          experiencing health issues later on, such as obesity and type 2
          diabetes. Aim for a nutritious diet with reduced fat and sugar
          content, incorporating ample fruits and vegetables. Additionally,
          strive for regular physical activity, ideally about 30 minutes daily
          for five days a week.
        </p>
      </section>

      <section>
        <div>
          <img src="" alt="" />
          <h3>Healthy eating</h3>
          <p>
            Healthy eating promotes weight control, disease prevention, better
            digestion, immunity, mental clarity, and mood.
          </p>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Regular exercise</h3>
          <p>
            Exercise improves fitness, aids weight control, elevates mood, and
            reduces disease risk, fostering wellness and longevity.
          </p>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Adequate sleep</h3>
          <p>
            Sleep enhances mental clarity, emotional stability, and physical
            wellness, promoting overall restoration and rejuvenation.
          </p>
        </div>
      </section>

      <section>
        <div>
          <h2>Limitations of BMI</h2>
          <p>
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </div>

        <div>
          <header>
            <img src="" alt="" />
            <h3>Gender</h3>
          </header>
          <p>
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child&apos;s age and gender are considered when
            evaluating their BMI.
          </p>
        </div>
        <div>
          <header>
            <img src="" alt="" />
            <h3>Age</h3>
          </header>
          <p>
            In aging individuals, increased body fat and muscle loss may cause
            BMI to underestimate body fat content.
          </p>
        </div>
        <div>
          <header>
            <img src="" alt="" />
            <h3>Muscle</h3>
          </header>
          <p>
            BMI may misclassify muscular individuals as overweight or obese, as
            it doesn&apos;t differentiate muscle from fat.
          </p>
        </div>
        <div>
          <header>
            <img src="" alt="" />
            <h3>Pregnancy</h3>
          </header>
          <p>
            Expectant mothers experience weight gain due to their growing baby.
            Maintaining a healthy pre-pregnancy BMI is advisable to minimise
            health risks for both mother and child.
          </p>
        </div>
        <div>
          <header>
            <img src="" alt="" />
            <h3>Race</h3>
          </header>
          <p>
            Certain health concerns may affect individuals of some Black and
            Asian origins at lower BMIs than others. To learn more, it is
            advised to discuss this with your GP or practice nurse.
          </p>
        </div>
      </section>
    </>
  );
}

{
  /* <svg className="icon">
  <use xlinkHref={`${icons}#icon-exercise`}></use>
</svg> */
}
