import { useContext } from 'react';
import { BMIContext } from '../contexts/BMIContext';

export function useBMI() {
  const context = useContext(BMIContext);
  if (context === undefined) throw new Error('Outside of BMI context');
  return context;
}
