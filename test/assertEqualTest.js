const assertEqual = require('../assertEqual');

// identical strings:
assertEqual("Hippo", "Hippo");
// non-identical strings:
assertEqual("Lighthouse Labs", "Bootcamp");
// identical numbers
assertEqual(1, 1);
// non-identical numbers
assertEqual(1, -1);
// different types
assertEqual(3, '3');