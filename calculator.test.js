// Test file for calculator functions using Jest

const { add, subtract, multiply, divide, modulus } = require('./calculator');

describe('Calculator Functions', () => {
    
    describe('add function', () => {
        test('should add two positive numbers correctly', () => {
            expect(add(2, 3)).toBe(5);
        });

        test('should add negative numbers correctly', () => {
            expect(add(-2, -3)).toBe(-5);
        });

        test('should add positive and negative numbers correctly', () => {
            expect(add(5, -3)).toBe(2);
        });

        test('should add zero correctly', () => {
            expect(add(5, 0)).toBe(5);
        });

        test('should add decimal numbers correctly', () => {
            expect(add(2.5, 3.7)).toBeCloseTo(6.2);
        });
    });

    describe('subtract function', () => {
        test('should subtract two positive numbers correctly', () => {
            expect(subtract(5, 3)).toBe(2);
        });

        test('should subtract negative numbers correctly', () => {
            expect(subtract(-2, -3)).toBe(1);
        });

        test('should subtract positive and negative numbers correctly', () => {
            expect(subtract(5, -3)).toBe(8);
        });

        test('should subtract zero correctly', () => {
            expect(subtract(5, 0)).toBe(5);
        });

        test('should subtract decimal numbers correctly', () => {
            expect(subtract(5.7, 3.2)).toBeCloseTo(2.5);
        });
    });

    describe('multiply function', () => {
        test('should multiply two positive numbers correctly', () => {
            expect(multiply(3, 4)).toBe(12);
        });

        test('should multiply negative numbers correctly', () => {
            expect(multiply(-2, -3)).toBe(6);
        });

        test('should multiply positive and negative numbers correctly', () => {
            expect(multiply(5, -3)).toBe(-15);
        });

        test('should multiply by zero correctly', () => {
            expect(multiply(5, 0)).toBe(0);
        });

        test('should multiply decimal numbers correctly', () => {
            expect(multiply(2.5, 4)).toBe(10);
        });
    });

    describe('divide function', () => {
        test('should divide two positive numbers correctly', () => {
            expect(divide(10, 2)).toBe(5);
        });

        test('should divide negative numbers correctly', () => {
            expect(divide(-10, -2)).toBe(5);
        });

        test('should divide positive and negative numbers correctly', () => {
            expect(divide(10, -2)).toBe(-5);
        });

        test('should divide decimal numbers correctly', () => {
            expect(divide(7.5, 2.5)).toBe(3);
        });

        test('should throw error when dividing by zero', () => {
            expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
        });

        test('should handle division resulting in decimal', () => {
            expect(divide(7, 3)).toBeCloseTo(2.333333);
        });
    });

    describe('modulus function', () => {
        test('should return correct remainder for positive numbers', () => {
            expect(modulus(10, 3)).toBe(1);
        });

        test('should return correct remainder for negative numbers', () => {
            expect(modulus(-10, 3)).toBe(-1);
        });

        test('should return zero when numbers divide evenly', () => {
            expect(modulus(12, 4)).toBe(0);
        });

        test('should handle modulus with decimal numbers', () => {
            expect(modulus(7.5, 2.5)).toBeCloseTo(0);
        });

        test('should handle modulus with zero remainder', () => {
            expect(modulus(15, 5)).toBe(0);
        });
    });
});
