import { GlobalProvider } from "./hooks/globalContext";
import { AppRoutes } from "./routes/Routes";
function App() {
  return (
    <>
      <GlobalProvider>
        <AppRoutes />
      </GlobalProvider>
    </>
  );
}

export default App;
