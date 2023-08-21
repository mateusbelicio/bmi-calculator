import { createContext, useCallback, useEffect, useReducer } from 'react';

export const BMIContext = createContext(null);

const initialState = {
  type: 'metric',
  height: null,
  weight: null,
  BMI: null,
  status: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'bmi/metric':
      if (!action.payload.heightCM || !action.payload.weightKG)
        return { ...state, BMI: null, height: null, weight: null };
      return {
        ...state,
        height: action.payload.heightCM / 100,
        weight: +action.payload.weightKG,
        BMI: action.payload.weightKG / Math.pow(action.payload.heightCM / 100, 2),
      };
    case 'bmi/imperial':
      if (
        (!action.payload.heightFT && !action.payload.heightIN) ||
        (!action.payload.weightST && !action.payload.weightLBS)
      )
        return { ...state, BMI: null, height: null, weight: null };
      return {
        ...state,
        height: action.payload.heightFT * 12 + action.payload.heightIN,
        weight: action.payload.weightST * 14 + action.payload.weightLBS,
        BMI:
          (703 * (action.payload.weightST * 14 + action.payload.weightLBS)) /
          Math.pow(action.payload.heightFT * 12 + action.payload.heightIN, 2),
      };
    case 'set/type':
      return { ...state, BMI: null, type: action.payload };
    case 'set/status': {
      return state.BMI ? { ...state, status: setStatus(state.BMI) } : state;
    }
    default:
      return console.error('Action not exist!');
  }
}

function BMIProvider({ children }) {
  const [{ type, BMI, status, height, weight }, dispatch] = useReducer(reducer, initialState);

  const handleMetricBMI = useCallback((height, weight) => {
    dispatch({ type: 'bmi/metric', payload: { heightCM: height, weightKG: weight } });
  }, []);

  const handleImperialBMI = useCallback((heightFT, heightIN, weightST, weightLBS) => {
    dispatch({ type: 'bmi/imperial', payload: { heightFT, heightIN, weightST, weightLBS } });
  }, []);

  const changeType = (type) => {
    dispatch({ type: 'set/type', payload: type });
  };

  useEffect(() => {
    if (BMI) dispatch({ type: 'set/status' });
  }, [BMI]);

  const context = {
    BMI,
    type,
    status,
    height,
    weight,
    handleMetricBMI,
    handleImperialBMI,
    changeType,
  };

  return <BMIContext.Provider value={context}>{children}</BMIContext.Provider>;
}

export default BMIProvider;

function setStatus(BMI) {
  if (BMI <= 18.5) return 'underweight';
  else if (BMI <= 24.9) return 'normal weight';
  else if (BMI <= 29.9) return 'overweight';
  else if (BMI <= 34.9) return 'class I obese';
  else if (BMI <= 39.9) return 'class II obese';
  else return 'class III obese';
}
