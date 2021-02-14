"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base_to_bigint = exports.bigint_to_base = void 0;
const lib_1 = require("lib");
const bigint_to_base = (n, base) => {
    const i = Number(n % BigInt(base.length));
    const n2 = n / BigInt(base.length);
    switch (n2) {
        case 0n:
            return base[i];
        default:
            return exports.bigint_to_base(n2, base) + base[i];
    }
};
exports.bigint_to_base = bigint_to_base;
const reducer = (base_n, base) => (acc, cur, i) => acc.match({
    Ok(n) {
        const exp = BigInt(base_n.length - (i + 1));
        const digit = BigInt(base.indexOf(cur));
        if (digit == -1n) {
            return lib_1.Err("Invalid character");
        }
        return lib_1.Ok(n + digit * BigInt(base.length) ** exp);
    },
    Err: _ => acc
});
const base_to_bigint = (base_n, base) => {
    return base_n
        .split('')
        .reduce(reducer(base_n, base), lib_1.Ok(0n));
};
exports.base_to_bigint = base_to_bigint;
