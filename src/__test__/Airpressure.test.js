test('test airpressure data', async () => {
  const minAirpressure = 991,
    maxAirpressure = 1041;

  try {
    const randome_airpressure_data = parseInt(
      minAirpressure + (maxAirpressure - minAirpressure) * Math.random()
    );
    expect(randome_airpressure_data).toBeGreaterThanOrEqual(minAirpressure);
    expect(randome_airpressure_data).toBeLessThanOrEqual(maxAirpressure);
  } catch (e) {
    console.log(e);
    throw new Error('Test failed');
  }
});
