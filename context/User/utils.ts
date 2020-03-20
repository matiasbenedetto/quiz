import { ScoreOperator } from './types';

export function operate(base: number, operator: ScoreOperator, amount: number): number {
    switch (operator) {
        case '+':
            return base + amount;
        case '-':
            return base - amount;
        case '*':
            return base * amount;
        case '/':
            return base / amount;
    }
}