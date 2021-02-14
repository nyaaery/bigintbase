# BigInt Base
## Installing
```
npm i git+https://github.com/nyaaery/bigintbase.git
```
## BigInt to Base
```ts
const base12 = "0123456789AB";

bigint_to_base(144n, base12);
/*
    "100"
*/
```
## Base to BigInt
```ts
const base12 = "0123456789AB";

const result: Result<bigint, string> = base_to_bigint("100", base12);

result.$; // Same as result.unwrap()
/*
    144n
*/
```