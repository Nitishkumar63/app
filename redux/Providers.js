"use client";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { QueryClient, QueryClientProvider } from "react-query";

function Providers({ children }) {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <>{children}</>
      </QueryClientProvider>
    </Provider>
  );
}

export default Providers;
