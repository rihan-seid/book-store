import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { Hero, Navbar, Works } from "./components";
import Blogs from "./components/Blogs";
import Register from "./components/dashboard/Register";
import Login from "./components/login";
import BlogForm from "./components/dashboard/BlogForm";
import BlogDisplay from "./components/dashboard/BlogDisplay";
import BlogEdit from "./components/dashboard/BlogEdit";
import UserDisplay from "./components/dashboard/UserDisplay";
const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-gray-100 '>
        <Navbar />
        <Toaster position="top-right" />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className='w-full '>
                  <Hero />
                </div>
                <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl ">

                  {/* <Works />
                  <Blogs /> */}
                  </div>
                <div className='relative z-0'>
                </div>
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blogs/form" element={<BlogForm />} />
          <Route path="/blogs" element={<BlogDisplay />} />
          <Route path="/blogs/edit/:id" element={<BlogEdit />} />
          <Route path="/user" element={<UserDisplay />} />

          {/* Add more routes as  needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
