import "@styles/global.css";
import { Children } from "react";
import Nav from "@components/Nav";
import Provider from "@components/Provider";


export const metaData = {
  title: "Prompcity",
  description: "Discover all AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
      <Provider>
      <div className="main">
        <div className="gradient" />
      </div>

      <main className="app">
      <Nav />
      {children}
      </main>
      </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
