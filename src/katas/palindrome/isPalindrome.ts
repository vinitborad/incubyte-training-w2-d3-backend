export const isPalindrome = (value: string) => {
    const trimmedValue = value.trim();
    const reverseValue = trimmedValue.split('').reverse().join('');
    return trimmedValue === reverseValue;
}