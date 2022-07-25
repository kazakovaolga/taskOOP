import { summator } from "./summator";

describe("Inspect summator function", () => {
  it("summator is a function", () => {
    expect(summator).toBeInstanceOf(Function);
  });

  it("summator() => 0", () => {
    expect(summator()).toEqual(0);
  });

  it("summator(1) is a function", () => {
    expect(summator(1)).toBeInstanceOf(Function);
  });

  it("summator(1)() =>1", () => {
    expect(summator(1)()).toEqual(1);
  });

  it("summator(1)(2) is a function", () => {
    const s = summator(1);
    expect(s(2)).toBeInstanceOf(Function);
  });

  it("summator(1)(2)() =>3", () => {
    const s = summator(1);
    expect(s(2)()).toEqual(3);
  });

  it("summator(3)(4)(5) is a function", () => {
    const s = summator(3)(4);
    expect(s(5)).toBeInstanceOf(Function);
  });

  it("summator(3)(4)(5)() =>12", () => {
    const s = summator(3)(4);
    expect(s(5)()).toEqual(12);
  });

  it("summator(3)(5) is a function", () => {
    const s = summator(3);
    expect(s(5)).toBeInstanceOf(Function);
  });

  it("summator(3)(5)() =>8", () => {
    const s = summator(3);
    expect(s(5)()).toEqual(8);
  });

  it("summator(3)(6) is a function", () => {
    const s = summator(3);
    expect(s(6)).toBeInstanceOf(Function);
  });

  it("summator(3)(6)() =>9", () => {
    const s = summator(3);
    expect(s(6)()).toEqual(9);
  });
});
