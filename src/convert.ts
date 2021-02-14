export const bigint_to_base = (n: bigint, base: string): string => {
    const i = Number(n % BigInt(base.length));
    const n2 = n / BigInt(base.length);
    switch (n2) {
        case 0n:
            return base[i];
        default:
            return bigint_to_base(n2, base) + base[i];
    }
}

export const base_to_bigint = (base_n: string, base: string): bigint => {
    return base_n
        .split('')
        .reduce((acc, cur, i) => {
            const exp = BigInt(base_n.length - (i + 1));
            const digit = BigInt(base.indexOf(cur));
            return acc + digit * BigInt(base.length) ** exp;
        }, 0n);
}