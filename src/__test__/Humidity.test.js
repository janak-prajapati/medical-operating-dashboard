test('test humidity data', async () => {
  const minHumidity = 12,
    maxHumidity = 90;
  try {
    const randome_humidity_data = parseInt(
      minHumidity + (maxHumidity - minHumidity) * Math.random()
    );
    expect(randome_humidity_data).toBeGreaterThanOrEqual(minHumidity);
    expect(randome_humidity_data).toBeLessThanOrEqual(maxHumidity);
  } catch (e) {
    console.log(e);
    throw new Error('Test failed');
  }
});
