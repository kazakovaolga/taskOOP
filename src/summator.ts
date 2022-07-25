export function summator(arg?: number): any {
  if (arg === undefined) return 0;
  return (arg2?: number): any => {
    if (arg2 === undefined) return arg;
    return summator(arg2 + arg);
  };
}
