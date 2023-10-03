export const currencyFormat = (n: number): string => (new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})).format(n);