# Exercise 3: Influencers Display

### Overview

For this exercise, we will be using React to render our influencers data. The page is going to consist of three parts -- a search bar, a sort button, and a display for our influencers. We've already implemented the search bar so you'll be working on the sort button and the display.

For the display, we're going to use the `uniqueBy` and `filterBy` functions from the first two exercises to process the data we're rendering. We are also going to add functionality to the sort button so that when clicked, the data is sorted by descending priority order. While you're free to decide how best to display the influencers data (table, list, etc.) please make sure all of the tasks listed below are completed. Please note that the `Influencers.js` file is meant to serve as a starting point for your solution but you are encouraged to **move and edit code** within that file as needed to achieve desired functionality.

We are not looking for a fully polished display but we will be taking styles into consideration. We expect you to spend no more than 20mins styling your interface. You are free to use either `styled-components` or write your CSS in `styles.css`, but you cannot install a pre-styled components or table library.

### Tasks

- Set up a new component(s) for your display in a new file(s) and import it in `Influencers.js`. Feel free to create the file(s) in `src/exercises/exercise_3_influencers`.
- Create a display that renders the influencers data with the corresponding keys: `["member", "influencerType", "indicationCategory", "affiliation", "affiliationPosition", "primaryState", "priority"]`. Those keys should have corresponding headers/labels that read `["Member", "Type", "Category", "Affiliation", "Title", "State", "Priority"]` respectively.
- Add logic to the button component such that on click the displayed data is sorted by descending priority value. The priority order should be `["High", "Medium", "Low"]`.
