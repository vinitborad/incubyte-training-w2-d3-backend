export const isPalindrome = (value: string) => {
  let trimmedValue = value.trim().toLowerCase();
  trimmedValue = trimmedValue.split(' ').join('');
  const reverseValue = trimmedValue.split('').reverse().join('');
  return trimmedValue === reverseValue;
};
