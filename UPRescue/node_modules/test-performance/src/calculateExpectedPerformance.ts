/**
 * This calculates the expected performance of the function, based on comparison
 * to a baseline.
 */
export default function calculateExpectedPerformance(
  baselineExpected: number,
  baselineActual: number,
  target: number
): number {
  const performanceRatio = baselineActual / baselineExpected;
  return target / performanceRatio;
}
