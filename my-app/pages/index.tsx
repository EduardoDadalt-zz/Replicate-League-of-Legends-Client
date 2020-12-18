import { useContext } from "react";
import { Auth } from "../context/auth";
import LoginPage from "../components/LoginPage";
import HomePage from "../components/HomePage";
export default function Home() {
  const { isLoggin } = useContext(Auth);

  return <>{isLoggin ? <HomePage /> : <LoginPage />}</>;
}
