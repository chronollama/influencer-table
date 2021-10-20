# Pulse Analytics Frontend Take Home Assignment

Welcome to the Pulse Analytics Frontend Take Home Assignment 👋

For this take home assignment, we have three distinct exercises that represent real-world problems we encounter here at Pulse Analytics. We would like you to spend no more than three hours working on this assignment. If you find yourself nearing the three hour mark and are still working, please feel free to spend the rest of your time documenting how you would have gone about completing the exercises.

## Getting Set Up

We recommend using the latest [Node LTS version](https://nodejs.org/en/).

1. Run `npm install`
2. Run `npm start`

## Constraints

- Only use JavaScript for this assignment
- Do not install additional packages
- Refrain from touching the directory structure or any existing files unless otherwise stated

## Exercises

Each exercise has a corresponding directory in `src/exercises` with a dedicated README. Refer to the README for that exercise for more detailed instructions. It is imperative that you follow the order of the exercises as they are listed as the exercises will build off of one another.

The seed data that will be used by all of the exercises features "influencers" in the healthcare space. Each entry in the dataset has the following structure:

```
{
  "member": "Person 1",
  "influencerType": "Type D",
  "indicationCategory": "Multiple Myeloma",
  "affiliation": "Cornell",
  "affiliationPosition": "Director of Surgical Oncology",
  "primaryState": "WI",
  "priority": "Medium"
}
```

### 01. `uniqueBy`

For this exercise, we will write a function that ensures the uniqueness of an array of data objects for a given key. For more instructions, refer to the `uniqueBy` README found in `src/exercises/exercise_1_uniqueBy/README.md`.

### 02. `filterBy`

For this exercise, we will write a function that filters an array of data objects by a given search term. For more instructions, refer to the `filterBy` README found in `src/exercises/exercise_2_filterBy/README.md`.

### 03. Influencers Display

For this exercise, we will be using React to render our influencers data. The page is going to consist of three parts -- a search bar, a sort button, and a display for our influencers. We've already implemented the search bar so you'll be working on the sort button and the display. For more instructions, refer to the influencers README found in `src/exercises/exercise_3_influencers/README.md`.

## Submission

Once you're done with your assignment, please upload it to your Github as a public repository and email us the link. Good luck!
