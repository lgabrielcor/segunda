import { getSession } from "next-auth/react";
import { LoginButton } from "../components/login-btn";
import  Tarjetas  from "../components/Tarjetas"
//import Mapa from "../components/Mapa"
import { useEffect } from "react";
import dynamic from "next/dynamic";
export default function Home() {
  // useEffect(() => {
  //   (async () => {
  //     let session = await getSession();
  //   })();
  // }, []);
  const MapWithNoSSR = dynamic(() => import("../components/Mapa"), {
    ssr: false
  });

  return (
    <>
      <LoginButton />
      <Tarjetas></Tarjetas>
      <div>
        data
      </div>
      <MapWithNoSSR />
    </>
  );
}
