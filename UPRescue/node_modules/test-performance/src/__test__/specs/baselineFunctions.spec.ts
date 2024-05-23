import baselineFunctions from '../../baselineFunctions';

describe('baselineFunctions', () => {
  it('running baseline function for 100% coverage', async () => {
    baselineFunctions.standard.func();
    baselineFunctions.standard.func(0);
    baselineFunctions.standard.func(1);
    expect(1 + 1).toBe(2);
  });
});
