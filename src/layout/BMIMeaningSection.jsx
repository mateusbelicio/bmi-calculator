import manImage from '../assets/image-man-eating.webp';

function BMIMeaningSection() {
  return (
    <section className="py-9 sm:main-container">
      <div className="max-w-[35.25rem] mb-12 mx-auto">
        <img src={manImage} alt="Man eating a piece of maki (sushi)" />
      </div>
      <div className="text-flow-lg mx-6 sm:mx-0">
        <h2 className="text-xl font-semibold">What your BMI result means</h2>
        <p>
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
