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
            <AppRouter />
        </PostProvider>
  
  )
}

export default App
