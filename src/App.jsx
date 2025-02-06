// import AppRouter from "./AppRoutes/index";
import {BrowserRouter as Router} from 'react-router-dom'
import LoginForm from './component/LoginForm'
import AppRouter from "./AppRoutes"
import RegisterForm from './component/RegisterForm'
import PostReady from './pages/PostReady'
import { PostProvider } from './context/PostContext';


function App() {
  
   return (
<PostProvider>
<Router basename="/reactpost/">  {/* Set the basename for React Router */}
        <AppRouter />  {/* Your routes will now use the /reactpost/ base path */}
      </Router>
        </PostProvider>
  
  )
}

export default App
