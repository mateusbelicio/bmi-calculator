import BMILimitationsSection from './layout/BMILimitationsSection';
import BMIMeaningSection from './layout/BMIMeaningSection';
import HeroSection from './layout/HeroSection';
import TipsSection from './layout/TipsSection';

export default function App() {
  return (
    <main>
      <HeroSection />
      <BMIMeaningSection />
      <TipsSection />
      <BMILimitationsSection />
    </main>
  );
}
