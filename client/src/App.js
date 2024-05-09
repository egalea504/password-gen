import { Routes, Route } from 'react-router-dom';
import Home from './pages';
import SignIn from './pages/signin';
import Dashboard from './pages/dashboard';
import SignUp from './pages/signup';
import { useState, createContext } from 'react';

export const UserContext = createContext(null);

const App = () => {
   //used globally throughout the app - set upon sign up/sign in
   const [user, setUser] = useState(null);

 return (
    <>
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
                
       </Routes>
       </UserContext.Provider>
    </>
 );
};

export default App;

