import { Parallel } from "./parallel";

describe("Inspect paralell function", () => {
    it("new Parallel instance of class Parallel", () => {        
        expect(new Parallel(2)).toBeInstanceOf(Parallel);        
    });

    it("runner tasks", async () => {
        const runner = new Parallel(2);        
        const result=    await runner.jobs(
                () => new Promise((resolve) => setTimeout(resolve, 10, 1)),
                () => new Promise((resolve) => setTimeout(resolve, 50, 2)),
                () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
                () => new Promise((resolve) => setTimeout(resolve, 90, 4)),
                () => new Promise((resolve) => setTimeout(resolve, 30, 5))
            )        
        expect(result).toEqual([1, 3, 2, 5, 4]);
    });
});
