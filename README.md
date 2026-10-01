# IT313 - Components and JSX

## Student Roster Card Renderer

This project demonstrates React Native functional components, props, JSX expressions, conditional rendering, list rendering, and the use of stable keys.

## Problem

The task is to create a React Native student roster that displays enrolled students as reusable cards. Each card displays the student's name, course, and number of units. Students with a full load also display a "Full Load" label.

The total number of students is calculated from the students array instead of being hard-coded.

## Component Structure

### StudentCard

`StudentCard` is a reusable functional component. It receives the following props:

* name
* course
* units
* isFullLoad

The props are destructured directly in the function parameter.

The component uses JSX expressions to display the student information and uses conditional rendering to display "Full Load" only when `isFullLoad` is true.

### StudentRoster

`StudentRoster` is the parent component. It contains the students array and uses `.map()` to render one `StudentCard` for every student.

Each card uses the student's unique ID as its React key:

`key={student.id}`

The student count is computed using:

`${students.length}`

## Technologies Used

* React Native
* Expo
* JavaScript/TypeScript
* JSX

## How to Run

1. Install Node.js.
2. Open the project folder in VS Code.
3. Install the project dependencies.
4. Start the Expo development server.

```bash
npm install
npx expo start
```

5. Open the application using Expo Go or an Android emulator.

## Key Experiment

The project also demonstrates the difference between using an array index and a stable student ID as the React key. The index-based key was tested while reversing the roster order. The final implementation uses `student.id` because it provides a stable identity for each student.
