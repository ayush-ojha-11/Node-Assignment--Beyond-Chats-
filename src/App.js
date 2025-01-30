import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReactDOM from "react-dom/client";
import Registration from "./components/Registration";
import SetupOrg from "./components/SetupOrg";
import ChatbotIntegration from "./components/ChatbotIntegration";
import ChatBotPage from "./components/ChatBotPage";
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/setuporg",
        element: <SetupOrg />,
      },
      {
        path: "/chatbotintegration",
        element: <ChatbotIntegration />,
      },
      {
        path: "/chatbotpage",
        element: <ChatBotPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
