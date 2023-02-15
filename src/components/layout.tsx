import { PropsWithChildren } from "react";

import Footer from "./footer";
import Back2Top from "./back2top";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <main className="vea-main-content">{children}</main>

      <Footer />

      <Back2Top />
    </>
  );
}
