import { useEffect } from "react";
import Navbar from "./navbar";
import { useRouter } from "next/router";
import nProgress from "nprogress";
import Classnames from "classnames";

const Layout = ({ children, title, footer = true, dark = false }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      nProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    router.events.on("routeChangeComplete", () => nProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <div className={Classnames({ "bg-primary": dark})}>
      <Navbar />

      <main className="container py-4">
        {title && <h1 className={Classnames("text-center", {"text-light": dark})}>{title}</h1>}

        {children}
      </main>

      {footer && (
        <footer className="bg-primary text-light text-center">
          <div className="container p-4">
            <h1 className="text-light">&copy; Ryan Ray Portfolio</h1>
            <p>2000 - {new Date().getFullYear()}</p>
            <p>All rights Reserved.</p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;
