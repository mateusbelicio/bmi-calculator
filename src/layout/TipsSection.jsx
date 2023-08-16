import TipItem from '../components/TipItem';

function TipsSection() {
  return (
    <section className="my-9 py-14 relative before:-z-10 before:absolute before:inset-0 before:gradient-1 before:opacity-25">
      <div className="main-container">
        <h2 className="text-xl font-semibold sr-only">Some tips to stay in shape</h2>
        <ul className="flex flex-col gap-10">
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
    </section>
  );
}

export default TipsSection;
