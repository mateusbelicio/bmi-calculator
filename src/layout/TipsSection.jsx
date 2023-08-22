import Reveal from '../components/Reveal';
import TipItem from '../components/TipItem';

function TipsSection() {
  return (
    <Reveal className="my-[4.5rem] sm:my-24 py-14 md:py-[3.75rem] lg:pt-[4.5rem] lg:pb-24 lg:mb-[7.5rem] relative before:-z-10 md:before:mx-auto before:max-w-[87rem] before:absolute before:inset-0 lg:before:rounded-[2.25rem] before:gradient-1 before:opacity-25">
      <div className="main-container">
        <h2 className="text-xl font-semibold sr-only">Some tips to stay in shape</h2>
        <ul className="flex flex-col gap-10 lg:gap-[inherit] lg:grid lg:grid-cols-[inherit] lg:[&>*]:col-span-4">
          <TipItem title="Healthy eating" icon="eating">
            Healthy eating promotes weight control, disease prevention, better digestion, immunity,
            mental clarity, and mood.
          </TipItem>
          <TipItem title="Regular exercise" icon="exercise">
            Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk,
            fostering wellness and longevity.
          </TipItem>
          <TipItem title="Adequate sleep" icon="sleep">
            Sleep enhances mental clarity, emotional stability, and physical wellness, promoting
            overall restoration and rejuvenation.
          </TipItem>
        </ul>
      </div>
    </Reveal>
  );
}

export default TipsSection;
