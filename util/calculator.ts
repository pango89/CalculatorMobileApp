import ICurrent from '../interfaces/calculator/ICurrent.interface';
import IState from '../interfaces/calculator/IState.interface';

export const initialState: IState = {
  currentValue: '0',
  operator: null,
  previousValue: '0',
};

export const handleNumber = (value: number, state: IState): ICurrent => {
  if (state.currentValue === '0') {
    return {currentValue: `${value}`};
  }

  return {
    currentValue: `${state.currentValue}${value}`,
  };
};

export const handleEqual = (state: IState): IState => {
  const {currentValue, previousValue, operator} = state;

  const current: number = parseFloat(currentValue);
  const previous: number = parseFloat(previousValue);

  const resetState = {
    operator: null,
    previousValue: '0',
  };

  if (operator === '/') {
    return {
      currentValue: String(previous / current),
      ...resetState,
    };
  }

  if (operator === '*') {
    return {
      currentValue: String(previous * current),
      ...resetState,
    };
  }

  if (operator === '+') {
    return {
      currentValue: String(previous + current),
      ...resetState,
    };
  }

  if (operator === '-') {
    return {
      currentValue: String(previous - current),
      ...resetState,
    };
  }

  return state;
};

const calculator = (
  type: string,
  state: IState,
  value?: string | number,
): IState | ICurrent => {
  switch (type) {
    case 'number':
      if (typeof value === 'number') {
        return handleNumber(value, state);
      }
    case 'operator':
      if (typeof value === 'string') {
        return {
          operator: value,
          previousValue: state.currentValue,
          currentValue: '0',
        };
      }
    case 'equal':
      return handleEqual(state);
    case 'clear':
      return initialState;
    case 'posneg':
      return {
        currentValue: `${parseFloat(state.currentValue) * -1}`,
      };
    case 'percentage':
      return {
        currentValue: `${parseFloat(state.currentValue) * 0.01}`,
      };
    default:
      return state;
  }
};

export default calculator;
