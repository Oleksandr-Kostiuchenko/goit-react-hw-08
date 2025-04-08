import style from "./App.module.css";

//* Pages
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import ContactDetailPage from "./pages/ContactDetailPage/ContactDetailPage";
import AddPage from "./pages/AddPage/AddPage";
import FavPage from "./pages/FavPage/FavPage";
import GroupPage from "./pages/GroupPage/GroupPage";
import FamList from "./components/FamList/FamList";
import FriendList from "./components/FriendList/FriendList";
import JobList from "./components/JobList/JobList";
import Layout from "./components/Layout/Layout";

import HomePage from "./pages/HomePage/HomePage";

//* Router
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:contactId" element={<ContactDetailPage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/fav" element={<FavPage />} />

        <Route path="/groups" element={<GroupPage />}>
          <Route path="family" element={<FamList />} />
          <Route path="friends" element={<FriendList />} />
          <Route path="job" element={<JobList />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
