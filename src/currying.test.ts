import { curry } from "./currying";

describe("Inspect currying function", () => {
  let carriedSum: any;

  beforeEach(() => {
    // использование
    function sum(
      a: number,
      b: number,
      c: number,
      d: number,
      e: number
    ): number {
      return a + b + c + d + e;
    }

    carriedSum = curry(sum);
  });

  it("currying is a function", () => {
    expect(curry).toBeInstanceOf(Function);
  });

  it("carriedSum(1, 2, 3, 4, 5) => 15", () => {
    expect(carriedSum(1, 2, 3, 4, 5)).toEqual(15);
  });

  it("carriedSum(2, 3, 4)(5, 6) => 20", () => {
    expect(carriedSum(2, 3, 4)(5, 6)).toEqual(20);
  });

  it("carriedSum(3, 4)(5, 6)(7) => 25", () => {
    expect(carriedSum(3, 4)(5, 6)(7)).toEqual(25);
  });

  it("carriedSum(4, 5)(6)(7, 8) => 30", () => {
    expect(carriedSum(4, 5)(6)(7, 8)).toEqual(30);
  });

  it("carriedSum(5)(6)(7)(8)(9) => 35", () => {
    expect(carriedSum(5)(6)(7)(8)(9)).toEqual(35);
  });
});
