test('test temprereture data', async () => {
  const minTemperature = 17.5,
    maxTemperature = 30;

  try {
    const val =
      minTemperature + (maxTemperature - minTemperature) * Math.random();
    const randome_temperature_data = Math.floor(val * 10) / 10;
    expect(randome_temperature_data).toBeGreaterThanOrEqual(minTemperature);
    expect(randome_temperature_data).toBeLessThanOrEqual(maxTemperature);
  } catch (e) {
    console.log(e);
    throw new Error('Test failed');
  }
});
