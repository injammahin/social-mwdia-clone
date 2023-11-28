import { Routes, Route } from "react-router-dom";
import { Home } from "./_root/pages";
import "./globals.css";
import AuthlayOut from "./_auth/form/AuthlayOut";
import Rootlayout from "./_root/pages/Rootlayout";
import SignOutForm from "./_auth/form/signOutForm";
import Signinform from "./_auth/form/signinform";
// import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/*public route*/}
        <Route element={<AuthlayOut />}>
          <Route path="/sign-in" element={<Signinform />} />

          <Route path="/sign-up" element={<SignOutForm />} />
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
