import manImage from '../assets/image-man-eating.webp';

function BMIMeaningSection() {
  return (
    <section className="py-9 sm:main-container md:items-center">
      <div className="max-w-[35.25rem] w-full md:h-[25.75rem] mb-12 md:mb-0 mx-auto md:col-start-1 md:col-end-6 md:relative">
        <img
          className="md:absolute md:right-0 md:top-0  md:h-full md:max-w-none object-cover object-right"
          src={manImage}
          alt="Man eating a piece of maki (sushi)"
        />
      </div>
      <div className="text-flow-lg mx-6 sm:mx-0 max-w-prose md:col-start-7 md:col-end-[-1]">
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
