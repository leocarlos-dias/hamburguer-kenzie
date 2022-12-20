import { MainRoutes as Routes } from "./routes/index"
import { UserProvider } from "./contexts/UserContext";
import { ProductProvider } from "./contexts/CartContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);



  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <ProductProvider>

          <ToastContainer
            position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop={false}
            closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme={theme.title === "dark" ? "dark" : "light"}
          />
          <Routes />
          <GlobalStyle />

        </ProductProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
