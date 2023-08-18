import manImage from '../assets/image-man-eating.webp';
// import curvedLine from '../assets/pattern-curved-line-left.svg';

function BMIMeaningSection() {
  return (
    <section className="my-9 sm:my-12 lg:mt-[4.6875rem] sm:main-container md:items-center lg:relative">
      <div className="max-w-[35.25rem] w-full md:h-[25.75rem] lg:h-[33.3125rem] mb-12 md:mb-0 mx-auto md:col-start-1 md:col-end-6 lg:col-end-7 md:relative">
        <img
          className="md:absolute lg:static md:right-0 md:top-0 md:h-full md:max-w-none lg:w-full object-cover object-right"
          src={manImage}
          alt="Man eating a piece of maki (sushi)"
        />
      </div>
      <div className="text-flow-md mx-6 sm:mx-0 max-w-prose md:col-start-7 lg:col-start-8 md:col-end-[-1] lg:absolute lg:bottom-10 lg:before:bottom-[calc(100%+2.25rem)] lg:before:absolute lg:before:content-[url('/bmi-calculator/src/assets/pattern-curved-line-left.svg')] lg:before:right-7">
        <h2 className="text-xl font-semibold">What your BMI result means</h2>
        <p className="">
          A BMI range of 18.5 to 24.9 is considered a &apos;healthy weight.&apos; Maintaining a
          healthy weight may lower your chances of experiencing health issues later on, such as
          obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content,
          incorporating ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </section>
  );
}

export default BMIMeaningSection;
