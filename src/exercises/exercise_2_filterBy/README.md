# Exercise 2: `filterBy`

### Overview

Write a function that filters an array of data objects against a given search term, across the object's values for an array of provided keys. The function will check the values of each object at each of the provided keys against the search term. If any of the values match the search term, the object is retained; if none match, the object is filtered out.

The function accepts three arguments:
  1. The data array to filter (Array)
  2. The search term (String)
  3. An array of property names to check for each data object (Array)

The function returns an array of data objects in which one of the values for the set of keys passed into the function
matches the search term.

### Testing

If you'd like to test your filterBy util as written, run `npm test filterBy`. If you'd like to test both uniqueBy and filterBy, run `npm test`.

### Example

#### Input:
```
  const data = [
    {
      "member": "Person 9",
      "influencerType": "Type D",
      "indicationCategory": "Bladder",
      "affiliation": "University of Minnesota",
      "affiliationPosition": "Professor of Gynecologic Oncology, Director of Gynecologic Cancer Research",
      "primaryState": "PA",
      "priority": "High"
    },
    {
      "member": "Person 10",
      "influencerType": "Type D",
      "indicationCategory": "Multiple Myeloma",
      "affiliation": "University of Minnesota",
      "affiliationPosition": "Director - Phase I & GI Oncology Programs | Co-leader - Developmental Therapeutics Program",
      "primaryState": "IN",
      "priority": "Medium"
    },
    {
      "member": "Person 11",
      "influencerType": "Type D",
      "indicationCategory": "Renal Cell",
      "affiliation": "University of Michigan",
      "affiliationPosition": "Director - Myeloma and Multi-Disciplinary Amyloid Program",
      "primaryState": "OR",
      "priority": "Medium"
    },
  ]
```

#### Implementation:
```filterBy(data, 'myeloma', ['indicationCategory', 'affiliation', 'affiliationPosition'])```

#### Output:
```
const data = [
    {
      "member": "Person 10",
      "influencerType": "Type D",
      "indicationCategory": "Multiple Myeloma",
      "affiliation": "University of Minnesota",
      "affiliationPosition": "Director - Phase I & GI Oncology Programs | Co-leader - Developmental Therapeutics Program",
      "primaryState": "IN",
      "priority": "Medium"
    },
    {
      "member": "Person 11",
      "influencerType": "Type D",
      "indicationCategory": "Renal Cell",
      "affiliation": "University of Michigan",
      "affiliationPosition": "Director - Myeloma and Multi-Disciplinary Amyloid Program",
      "primaryState": "OR",
      "priority": "Medium"
    },
  ]
```
