"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base_to_bigint = exports.bigint_to_base = void 0;
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
const base_to_bigint = (base_n, base) => {
    return base_n
        .split('')
        .reduce((acc, cur, i) => {
        const i2 = BigInt(base_n.length - (i + 1));
        const digit = BigInt(base.indexOf(cur));
        return acc + digit * BigInt(base.length) ** i2;
    }, 0n);
};
exports.base_to_bigint = base_to_bigint;
