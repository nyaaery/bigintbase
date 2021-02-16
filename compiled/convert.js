"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base_to_bigint = exports.bigint_to_base = void 0;
function bigint_to_base(n, base) {
    let base_n = "";
    do {
        const i = Number(n % BigInt(base.length));
        n /= BigInt(base.length);
        base_n = base[i] + base_n;
    } while (n != 0n);
    return base_n;
}
exports.bigint_to_base = bigint_to_base;
function base_to_bigint(base_n, base) {
    let n = 0n;
    for (let i = 0; i < base_n.length; i++) {
        const char = base_n[i];
        const exp = BigInt(base_n.length - (i + 1));
        const digit = BigInt(base.indexOf(char));
        if (digit == -1n) {
            throw new Error("Invalid character");
        }
        n += digit * BigInt(base.length) ** exp;
    }
    return n;
}
exports.base_to_bigint = base_to_bigint;
