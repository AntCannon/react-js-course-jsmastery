import { useState, useEffect } from 'react';
import './App.css';

// export app template
// const App = () => {
//   return (
//     <div className="App">

//     </div>
//   );
// }


// ----- useEffect counter example -----

// useEffect is a React Hook that lets you synchronize a component with an external system.

const App = () => {
  const [counter, setCounter] =  useState(0); // useState deconstruction for variable
  const [clicks, setClicks] = useState(0);

  const increase = () => {
    setCounter((prevCount) => prevCount + 1); // save increment function
    setClicks((prevClicks) => prevClicks + 1);
  }

  const decrease = () => {
    setCounter((prevCount) => prevCount - 1); // save decrement function
    setClicks((prevClicks) => prevClicks + 1);
  }
  
  const reset = () => setCounter(0);
  
  // useEffect(() => {
  //   alert(`Counter has been incremented by 5`);
  // }, [])

  return (
    <div className="App">
      <br></br>
      <button onClick={decrease}>-</button>
      <h1>{counter}</h1>
      <button onClick={increase}>-</button>
      <br></br>
      <br></br>
      <button onClick={reset}>Reset</button>
      <h3>{clicks}</h3>
    </div> 
  );
}


// ----- useState counter example ------

// a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.

// const App = () => {
//   const [counter, setCounter] =  useState(0); // useState deconstruction for variable
//   const increase = () => setCounter((prevCount) => prevCount + 1) // save increment function
//   const decrease = () => setCounter((prevCount) => prevCount - 1) // save decrement function

//   return (
//     <div className="App">
//       <br></br>
//       <button onClick={decrease}>-</button>
//       <h1>{counter}</h1>
//       <button onClick={increase}>-</button>
//     </div> 
//   );
// }

// ----- save counter to local storage

// localStorage read-only property of the window interface allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions.

// const App = () => {
//   const [counter, setCounter] = useState(0); // useState deconstruction for variable
//   const increase = () => {
//     setCounter(prevCount => {
//       const newCount = +prevCount + 1;
//       localStorage.setItem('counter', newCount);
//       return newCount;
//     });
//   }

//   const decrease = () => {
//     setCounter(prevCount => {
//       const newCount = +prevCount - 1;
//       localStorage.setItem('counter', newCount);
//       return newCount
//     })
//   }

//   useEffect(() => {
//     const initialValue = localStorage.getItem("counter");
//     if (initialValue) setCounter(initialValue);
//   }, []);

//   return (
//     <div className="App">
//       <br></br>
//       <button onClick={decrease}>-</button>
//       <h1>{counter}</h1>
//       <button onClick={increase}>-</button>
//     </div> 
//   );
// }



// ----- Using props in components to make then dynamic ---

// const Person = (props) => { {/* each component has a props object */}
//   return (
//     <>
//       <h1>Name: {props.name}</h1>
//       <h2>Last Name: {props.lastName}</h2>
//       <h2>Age: {props.age}</h2>
//     </>
//   )
// }

// // import component into larger component
// const App = () => {
//   return (
//     <div className="App">
//       <Person
//         name={'John'}
//         lastName={'Doe'}
//         age={30}
//       />
//       <Person name={'Jane'} lastName={'Doe'} age={25}/>
//       <Person /> {/* Nothing is shown because nothing was passed through the props of the component*/}
//       <Person />
//       <Person />
//     </div>
//   );
// }

// ----- using components in App ------

// // external component
// const Person = () => {
//   return (
//     <>
//       <h1>Name: "John"</h1>
//       <h2>Last Name: "Doe</h2>
//       <h2>Age: 30</h2>
//     </>
//   )
// }

// // import component into larger component
// const App = () => {
//   return (
//     <div className="App">
//       <Person />  {/* this is the import */}
//       <Person />
//       <Person />
//       <Person />
//       <Person />
//     </div>
//   );
// }


// ----- Using variables an ternary -----

// const App = () => {
//   const name = "Anthony"; // initialize variable
//   const isNameShowing = false; // switch for showing variable

//   return (
//     <div className="App">
//       <h1>Hello, {isNameShowing ? name : "New User"}!</h1>
//       { isNameShowing ? (
//         <>
//           <h1>Showing the the name</h1>
//         </>

//       ) : (
//         <>
//           <h1>test false</h1>
//           <h2>There is no name</h2>
//         </>
//       )
      
//       }
//     </div>
//   );
// }

export default App;
