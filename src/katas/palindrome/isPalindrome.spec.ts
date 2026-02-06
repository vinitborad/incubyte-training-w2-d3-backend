import { isPalindrome } from './isPalindrome';

describe('isPalindrome', () => {
  it('should return true for a palindrome', () => {
    expect(isPalindrome('કખક')).toBe(true);
  });

  it('should return false for a non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  it('should return true for a palindrome with spaces', () => {
    expect(isPalindrome('nurses run')).toBe(true);
  });

  it('should return true for a palindrome with spaces and different cases', () => {
    expect(isPalindrome('Nurses Run')).toBe(true);
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
  it('should return true for a palindrome with numbers along with character', () => {
    expect(isPalindrome('a1a')).toBe(true);
  });
});
