export interface ValidationResult {
  isValid: boolean;
  message: string;
}

export const validateNumberArray = (input: string): ValidationResult => {
  if (!input.trim()) {
    return {
      isValid: false,
      message: 'Please enter some numbers'
    };
  }

  const numbers = input.split(',').map(n => n.trim());
  
  // Check if all entries are valid numbers
  const hasInvalidNumbers = numbers.some(n => isNaN(parseFloat(n)) || n === '');
  if (hasInvalidNumbers) {
    return {
      isValid: false,
      message: 'Please enter valid numbers separated by commas'
    };
  }

  // Check if there are enough numbers for statistical calculations
  if (numbers.length < 2) {
    return {
      isValid: false,
      message: 'Please enter at least two numbers for statistical calculations'
    };
  }

  return {
    isValid: true,
    message: ''
  };
};

export const validateNumber = (value: number): ValidationResult => {
  if (isNaN(value)) {
    return {
      isValid: false,
      message: 'Please enter a valid number'
    };
  }

  return {
    isValid: true,
    message: ''
  };
};
