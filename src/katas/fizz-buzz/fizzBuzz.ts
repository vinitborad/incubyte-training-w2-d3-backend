export const fizBuzz = (value: number) => {
    if (value % 3 == 0 && value % 5 == 0) return 'fizBuzz';
    if (value % 3 == 0) return 'Fizz';
    if (value % 5 == 0) return 'Buzz';
    return '';
}