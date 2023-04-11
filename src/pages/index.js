import { getSession } from "next-auth/react";
import { LoginButton } from "../components/login-btn";
import { useEffect } from "react";
export default function Home() {
  // useEffect(() => {
  //   (async () => {
  //     let session = await getSession();
  //   })();
  // }, []);

  return (
    <>
      <LoginButton />
    </>
  );
}
