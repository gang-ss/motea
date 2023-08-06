import React, { useState } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  )
)
const App = ({routes}) => {
	const [count, setCount] = useState(0);
	return (
		<>
			<div className="text-15 m-center bg-red-500 w-30 h-50 font-bold underline">Hello world!</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
			</div>
      <RouterProvider router={router}/>
		</>
	);
};
export default App;
