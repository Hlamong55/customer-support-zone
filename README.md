1. What is JSX, and why is it used?
ANS: JSX (JavaScript XML) is a JavaScript syntax extension.
It is used for -> i. Easy to write and understand UI code
                 ii. Build React components simple and readable
                 iii.Compiles into React.createElement() calls


2. What is the difference between State and Props?
ANS: 
State
-> Managed inside a component
-> can be updated by using setStates
-> Used to store and handle data that changes

props
-> Shorts for properties
-> It pass from parent to child
-> Cannot be changed by the child


3. What is the useState hook, and how does it work?
ANS: It is a React hook that can add and manage state in functional components.

function Counter() {
  const [count, setCount] = useState(0);
}
count = state value, setCount = funtion to update it, useState(0) = initializes count with 0



4. How can you share state between components in React?
ANS: There are few way to share.
##Lift State up:
-> Keep the state in a common parent component abd pass it down as props
-> Child components can update it using functions passed from the parent.

##React Context: Useful when you need to share state across many components without passing props manually at every level.

##State Management Libraries: Tools like Redux, Zustand, or Recoil manage global state outside of components.


5. How is event handling done in React?
ANS: Event handling in React is very similar to JavaScript, but with some key differences:
i. Events are written in camelCase
ii. Pass a function reference, not a string
iii. Event object is a SyntheticEvent