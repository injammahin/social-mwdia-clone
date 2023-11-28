import { Routes, Route } from "react-router-dom";
import { Home } from "./_root/pages";
import "./globals.css";
import AuthlayOut from "./_auth/form/AuthlayOut";
import Rootlayout from "./_root/pages/Rootlayout";
import Signupform from "./_auth/form/Signupform";
import Signinform from "./_auth/form/Signinform";

// import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/*public route*/}
        <Route element={<AuthlayOut />}>
          <Route path="/sign-in" element={<Signinform />} />
          <Route path="/sign-up" element={<Signupform />} />
        </Route>

        {/*private route*/}
        <Route element={<Rootlayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
