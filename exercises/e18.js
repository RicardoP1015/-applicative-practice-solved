/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const asteroidDiscoveries = data.asteroids;
  const yearCounts = {};

  for (const asteroid of asteroidDiscoveries) {
    const discoveryYear = asteroid.discoveryYear;
    if (yearCounts[discoveryYear]) {
      yearCounts[discoveryYear]++;
    } else {
      yearCounts[discoveryYear] = 1;
    }
  }

  const maxDiscoveryYear = Object.keys(yearCounts).reduce(
    (maxYear, year) => (yearCounts[year] > yearCounts[maxYear] ? year : maxYear),
    Object.keys(yearCounts)[0]
  );

  return parseInt(maxDiscoveryYear);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
