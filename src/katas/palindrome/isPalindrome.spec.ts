import { isPalindrome } from "./isPalindrome";

describe('isPalindrome', () => {
    it('should return true for a palindrome', () => {
        expect(isPalindrome('madam')).toBe(true);
    });

    it('should return false for a non-palindrome', () => {
        expect(isPalindrome('hello')).toBe(false);
    });

    it('should return true for an empty string', () => {
        expect(isPalindrome('')).toBe(true);
    });

    it('should return true for a single character string', () => {
        expect(isPalindrome('a')).toBe(true);
    });

    it('should return true for a string with spaces at front or back', () => {
        expect(isPalindrome(' madam')).toBe(true);
    });

    it('should return true for a string with spaces in between', () => {
        expect(isPalindrome('madam madam')).toBe(true);
    });
});