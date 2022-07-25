export function semver(arr: string[]) {
  arr = arr.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  return arr;
}
