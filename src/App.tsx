import RootLayout from "./Components/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Main from './Pages/Main';
import MovieInformation from "./Pages/MovieInformation";
import MovieProvider from './Context/MovieProvider'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      children: [
        { path: "/", element: <Main></Main> },
        { path: "/movie-information", element: <MovieInformation></MovieInformation> }
      ]
    }
  ]);
  return (
    <div>
      <MovieProvider>
        <RouterProvider router={router}></RouterProvider>
      </MovieProvider>
    </div>
  );
}

export default App;
