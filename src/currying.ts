export function curry(func: any) {
  return function curried(...args: number[]) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2: number[]) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}
