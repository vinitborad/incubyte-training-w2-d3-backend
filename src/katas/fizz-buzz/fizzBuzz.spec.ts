import { fizBuzz } from "./fizzBuzz";

describe('fizBuzz', () => {
    it('should return empty string when the value is not divisible by 3 or 5', () => {
        const result = fizBuzz(1);
        expect(result).toBe('');
    });
    it('should return Fizz when the value is divisible by only 3', () => {
        const result = fizBuzz(3);
        expect(result).toBe('Fizz');
    });
    it('should return Buzz when the value is divisible by only 5', () => {
        const result = fizBuzz(5);
        expect(result).toBe('Buzz');
    });
    it('should return FizzBuzz when the value is divisible by both 3 & 5', () => {
        const result = fizBuzz(15);
        expect(result).toBe('fizBuzz');
    });
})