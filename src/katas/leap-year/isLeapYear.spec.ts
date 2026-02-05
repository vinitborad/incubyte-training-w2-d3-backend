import { isLeapYear } from "./isLeapYear";

describe('IsLeapYear', () => {
    it('should return true when the value is divisible by 400', () => {
        const result = isLeapYear(2000);
        expect(result).toBe(true);
    });
    it('should return true when the value  divisible by 4 but not 100', () => {
        const result = isLeapYear(2004);
        expect(result).toBe(true);
    });
    it('should return false when the value is not divisible by 4', () => {
        const result = isLeapYear(2001);
        expect(result).toBe(false);
    });
    it('should return false when the value is divisible by 100 but not by 400', () => {
        const result = isLeapYear(1900);
        expect(result).toBe(false);
    });
})