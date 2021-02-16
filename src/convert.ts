export function bigint_to_base(n: bigint, base: string): string {
    let base_n: string = "";
    do {
        const i = Number(n % BigInt(base.length));
        n /= BigInt(base.length);
        base_n = base[i] + base_n;
    } while (n != 0n);
    return base_n;
}

export function base_to_bigint(base_n: string, base: string): bigint {
    let n: bigint = 0n;
    for (let i = 0; i < base_n.length; i++) {
        const char: string = base_n[i];
        const exp: bigint = BigInt(base_n.length - (i + 1));
        const digit: bigint = BigInt(base.indexOf(char));

        if (digit == -1n) {
            throw new Error("Invalid character");
        }

        n += digit * BigInt(base.length) ** exp;
    }
    return n;
}