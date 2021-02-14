import {
    bigint_to_base,
    base_to_bigint
} from "../src/index";

const nums = [
    10n,
    12n,
    64n,
    100n,
    128n,
    1000n
];
const bases = [
    {
        name: "Binary",
        base: "01",
        nums: [
            "1010",
            "1100",
            "1000000",
            "1100100",
            "10000000",
            "1111101000"
        ]
    },
    {
        name: "Octal",
        base: "01234567",
        nums: [
            "12",
            "14",
            "100",
            "144",
            "200",
            "1750"
        ]
    },
    {
        name: "Decimal",
        base: "0123456789",
        nums: [
            "10",
            "12",
            "64",
            "100",
            "128",
            "1000"
        ]
    },
    {
        name: "Duodecimal",
        base: "0123456789AB",
        nums: [
            "A",
            "10",
            "54",
            "84",
            "A8",
            "6B4"
        ]
    },
    {
        name: "Hexadecimal",
        base: "0123456789ABCDEF",
        nums: [
            "A",
            "C",
            "40",
            "64",
            "80",
            "3E8"
        ]
    }
];

function combine<A, B>(a: A[], b: B[]): [A, B][] {
    const ret = [];
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
        ret.push([ a[i], b[i] ]);
    }
    return ret;
}

describe("bigint_to_base", () => {
    bases.forEach(base => {
        describe(base.name, () => {
            combine(nums, base.nums).forEach(([ n, base_n ]) => {
                test(`f(${n}n) = \"${base_n}\"`, () => {
                    expect(bigint_to_base(n, base.base)).toBe(base_n);
                });
            });
        });
    });
});

describe("base_to_bigint", () => {
    test("Returns error when attempting to convert number containing an invalid character", () => {
        expect(base_to_bigint("2", "01").is_err()).toBe(true);
    });

    bases.forEach(base => {
        describe(base.name, () => {
            combine(base.nums, nums).forEach(([ base_n, n ]) => {
                test(`f(\"${base_n}\") = ${n}n`, () => {
                    expect(base_to_bigint(base_n, base.base).$).toBe(n);
                });
            });
        });
    });
});