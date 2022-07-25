class PromiseExt {
  static whenAny(promises: Promise<any>[]): any {
    return new Promise((resolve) => {
      let result: any;
      for (const promise of promises) {
        if (result) break;
        const func = () => {
          if (!result) {
            result = [promise];
            resolve(result);
          }
        };
        promise.then(func, func);
      }
    });
  }
}
export class Parallel {
  concurrencyLevel: number;

  constructor(concurrencyLevel: number) {
    this.concurrencyLevel = concurrencyLevel;
  }

  async jobs(...funcs: any[]) {
    const result = new Array(funcs.length);
    let nextIndex = 0;
    const tmpTasks:any = [];
    const tmpIndexes:any = [];
    while (nextIndex < this.concurrencyLevel && nextIndex < funcs.length) {
      tmpTasks.push(funcs[nextIndex]());
      tmpIndexes.push(nextIndex);
      nextIndex++;
    }

    let i = 0;
    while (tmpTasks.length) {
      const task = (await PromiseExt.whenAny(tmpTasks))[0];
      const index = tmpTasks.indexOf(task);
      tmpTasks.splice(index, 1);
      const originalIndex = i;
      tmpIndexes.splice(index, 1);
      try {
        result[originalIndex] = await task;
      } catch (error) {
        result[originalIndex] = error;
      }
      if (nextIndex < funcs.length) {
        tmpTasks.push(funcs[nextIndex]());
        tmpIndexes.push(nextIndex);
        nextIndex++;
      }
      i = i + 1;
    }
    return result;
  }
}
