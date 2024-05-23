/**
 * This runs a single performance test of a function
 */
export default async function perfTest(func: Function): Promise<number> {
  const start = performance.now();
  await func();
  const end = performance.now();
  return end - start;
}
