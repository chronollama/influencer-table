# Exercise 1: `uniqueBy`

### Overview

Write a function that removes objects with duplicate values at a provided key from an array of data objects, ensuring the uniqueness of objects in the output array at the provided key. 

When encountering a duplicate value at the key being checked, the function should maintain the original order of the first object with the duplicate value but return the current object with that value. See the input/output written below for an example.

The function accepts two arguments:
  1. The data array to check (Array)
  2. The key to check for duplicate values for objects in the data array (String)

The function returns an array of data objects where all values at the key to check are unique.

### Testing

If you'd like to test your uniqueBy util as written, run `npm test uniqueBy`. If you'd like to test both uniqueBy and filterBy, run `npm test`.

### Example

#### Input:
```
const data = [
  {
    "member": "Person 1",
    "influencerType": "Type D",
    "indicationCategory": "Multiple Myeloma",
    "affiliation": "Cornell",
    "affiliationPosition": "Director of Surgical Oncology",
    "primaryState": "WI",
    "priority": "Medium"
  },
  {
    "member": "Person 2",
    "influencerType": "Type D",
    "indicationCategory": "Renal Cell",
    "affiliation": "Cornell",
    "affiliationPosition": "Clinical Professor",
    "primaryState": "CANADA",
    "priority": "Low"
  },
  {
    "member": "Person 1",
    "influencerType": "Type D",
    "indicationCategory": "Melanoma",
    "affiliation": "University of Michigan",
    "affiliationPosition": "Chief, Veterans Hospital Hematology-Oncology Section | Staff Physician Hematology/Oncology",
    "primaryState": "IN",
    "priority": "Low"
  },
]
```

#### Implementation:
```uniqueBy(data, 'member')```

#### Output:
```
const data = [
  {
    "member": "Person 1",
    "influencerType": "Type D",
    "indicationCategory": "Melanoma",
    "affiliation": "University of Michigan",
    "affiliationPosition": "Chief, Veterans Hospital Hematology-Oncology Section | Staff Physician Hematology/Oncology",
    "primaryState": "IN",
    "priority": "Low"
  },
  {
    "member": "Person 2",
    "influencerType": "Type D",
    "indicationCategory": "Renal Cell",
    "affiliation": "Cornell",
    "affiliationPosition": "Clinical Professor",
    "primaryState": "CANADA",
    "priority": "Low"
  }
]
```
