import React from 'react';
import AllRoutes from './routes/routes';
import { PostProvider } from './context/PostContext';


const App = () => {
  return (
    <div>
      {/* You can include your Navbar or MegaMenu here */}
       <PostProvider>
        <AllRoutes />
       </PostProvider>
    </div>
  );
};

export default App;
