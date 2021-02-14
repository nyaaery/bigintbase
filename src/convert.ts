import {
    Result,
    Ok,
    Err
} from "lib"; 

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

const reducer = (base_n: string, base: string) =>
    (acc: Result<bigint, string>, cur: string, i: number): Result<bigint, string> =>
        acc.match({
            Ok(n) {
                const exp = BigInt(base_n.length - (i + 1));
                const digit = BigInt(base.indexOf(cur));

                if (digit == -1n) {
                    return Err("Invalid character");
                }

                return Ok(n + digit * BigInt(base.length) ** exp);
            },
            Err: _ => acc 
        });

export const base_to_bigint = (base_n: string, base: string): Result<bigint, string> => {
    return base_n
        .split('')
        .reduce(reducer(base_n, base), Ok(0n));
}