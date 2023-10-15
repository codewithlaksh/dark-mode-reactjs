import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ThemeState from "./utils/themeState";
import Home from "./pages/Home";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"

function App() {
  document.title = "Light & Dark mode - ReactApp"
  return (
    <ThemeState>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeState>
  )
}

export default App
