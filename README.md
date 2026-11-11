🚀 Dev Stack

Dev Stack is a simple and interactive web application that allows us to add our favorite technology to a stack.

## Features
** Browse different technology with the logo, name, discription and category **
** Add your Technology **
** Duplicate Prevention **

##  Technologies Used
** React, TypeScript, Tailwind CSS, DaisyUI, React Icons, React Toastify, JSON **



# React Questions & Answers

### 1. What is JSX, and why is it used in React?
** JSX is Javascript XML, It allows us to write HTML inside the javascript code. it is used in react to build and understand a component easier**


### 2. What is the difference between props and state?
**
Props are used to pass data from parent component to child component. state are use for inside a component that can change over time
**

### 3. What does the useState hook do, and where did you use it in this project?
The useState hook update component and it is use inside component function. I used it in my project to update my technology stack.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
** 
The useEffect hook allows us to fetch data from api. in the project i use react use hook to fetch data instead useEffect with suspense and failback.
**

### 5. Why does every item in a .map() list need a unique key prop?
** A unique key helps React identify each item in a list.**

### 6. What is conditional rendering? Show one place you used it.
**
It means displaying different element depending on a condition
 In the project i used this code `{stack.length === 0 ? (
  <p>Your Stack is Empty.</p>
) : (
  <div>
    {stack.map((tech) => (
      <p key={tech.id}>{tech.name}</p>
    ))}
  </div>
)}`
**

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
** We pass data from a parent to a child using props.

A child can communicate with its parent by calling a function passed through props.**