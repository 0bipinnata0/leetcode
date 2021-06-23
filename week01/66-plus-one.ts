function plusOne(digits: number[]): number[] {
  let plus = 1;
  const { length } = digits;
  let index = length - 1
  while (index >= 0 && plus === 1) {
    let val = digits[index] + plus
    plus = 0
    if (val > 9) {
      val = 0;
      plus = 1;
    }
    digits[index--] = val
  }

  if (index < 0 && plus === 1) {
    for (let i = length; i > 0; i--) {
      digits[i] = digits[i - 1]
    }
    digits[0] = plus
  }

  return digits
};