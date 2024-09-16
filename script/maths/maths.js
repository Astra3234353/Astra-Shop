export function numbFormat(number) {
  let correctNumb = (number / 1000).toFixed(2); 

  return Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(correctNumb);
}

export function to4Digits(number) {
  return number.toString().padStart(4, '0');
}
