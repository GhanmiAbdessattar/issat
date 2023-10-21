import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Etudiant/pages/Login";
import ForgotPassword from "./Etudiant/pages/ForgotPassword";
import Register from "./Etudiant/pages/Register";
import Logout from "./Etudiant/pages/Logout";
import ResetPassword from "./Etudiant/pages/ResetPassword";
import AcceuilAdmin from "./Dashboard/pages/AcceuilAdmin";
import UtilisateursAdmin from "./Dashboard/pages/UtilisateursAdmin";
import AjoutEnseignants from "./Dashboard/pages/AjoutEnseignats";
import AjoutEtudiants from "./Dashboard/pages/AjoutEtudiants";
import MainLayoutAdmin from "./Dashboard/components/MainLayoutAdmin";
import AjoutUser from "./Dashboard/pages/AjoutUser";
import Parametre from "./Dashboard/pages/Parametre";
import ProfileAdmin from "./Dashboard/pages/ProfileAdmin";
import Profile from "./Etudiant/pages/Profile";
import MainLayout from "./Etudiant/components/MainLayout";
import MesNotes from "./Etudiant/pages/MesNotes";
import DetailSemestre from "./Etudiant/components/DetailSemestre";
//import DetailModule from "./Etudiant/components/DetailModule";
import EditProfile from "./Etudiant/pages/EditProfile";
import Emploi from "./Etudiant/pages/Emploi";
import ListEtudiant from "./Dashboard/pages/ListEtudiant";
import ListEnseignant from "./Dashboard/pages/ListEnseignant";
import ResultatPremiere from "./Dashboard/pages/ResultatPremiere";
import ResultatDexieme from "./Dashboard/pages/ResultatDexieme";
import ResultatTroisième from "./Dashboard/pages/ResultatTroisième";
import EmploiPremiere from "./Dashboard/pages/EmploiPremiere";
import EmploiDeuxieme from "./Dashboard/pages/EmploiDeuxieme";
import EmploiTroisieme from "./Dashboard/pages/EmploiTroisieme";
import Calendrier from "./Dashboard/pages/Calendrier";
import Acceuil from "./Etudiant/pages/Acceuil";
import ListeActualite from "./Dashboard/components/ListeActualite";
import CalendrierEtudiant from "./Etudiant/pages/CalendrierEtudiant";
import DetailModule from "./Etudiant/components/DetailModule";
import EnseignantsEtudiant from "./Etudiant/pages/EnseignantsEtudiant";
import ParcoursEtudiant from "./Etudiant/pages/ParcoursEtudiant";
import DiversEtudiant from "./Etudiant/pages/DiversEtudiant";
import Parcours from "./Dashboard/pages/Parcours";
import Divers from "./Dashboard/pages/Divers";


function App() {
  return (
    <Router>
     <Routes>
           <Route path="/" element={<Login />} />
           <Route path="login" element={<Login />} />
           <Route path="register" element={<Register />} />
           <Route path="forgotPassword" element={<ForgotPassword />} />

     </Routes>
        <Routes>
          <Route path="/acceuil" element={<MainLayout />}>
                <Route path="acceuil" element={<Acceuil />} />
                <Route path="/acceuil/mesnotes" element={<MesNotes />} />
                <Route path="mesnotes/DetailSemestre" element={<DetailSemestre />} />
                <Route path="mesnotes/DetailSemestre/DetailModule" element={<DetailModule />} />
                <Route path="Emploi" element={<Emploi />} />
                <Route path="profile" element={<Profile />} />
                <Route path="EditProfile" element={<EditProfile />} />
                <Route path="quité" element={<Logout />} />
                <Route path="resetPassword" element={<ResetPassword />} />
                <Route path="Calendrier" element={<CalendrierEtudiant />} />
                <Route path="Enseignants" element={<EnseignantsEtudiant />} />
                <Route path="Parcours" element={<ParcoursEtudiant />} />
                <Route path="Divers" element={<DiversEtudiant />} />
          </Route>
        </Routes>
        <Routes>
        <Route path="/admin" element={<MainLayoutAdmin />}>
          <Route path="/admin/Acceuil" element={<AcceuilAdmin />} />
          <Route path="/admin/ListEtudiants" element={<ListEtudiant />} />
          <Route path="/admin/ListEnseignants" element={<ListEnseignant />} />
          <Route path="/admin/ListeUsers" element={<UtilisateursAdmin />} />
          <Route path="/admin/AjoutUsers" element={<AjoutUser />} />
          <Route path="/admin/AjoutEnseignant" element={<AjoutEnseignants />} />
          <Route path="/admin/AjoutEtudiant" element={<AjoutEtudiants />} />
          <Route path="/admin/Profile" element={<ProfileAdmin />} />
          <Route path="/admin/resultat-1er" element={<ResultatPremiere />} />
          <Route path="/admin/resultat-2eme" element={<ResultatDexieme />} />
          <Route path="/admin/resultat-3eme" element={<ResultatTroisième />} />
          <Route path="/admin/Emploi_Premiere" element={<EmploiPremiere />} />
          <Route path="/admin/Emploi_Deuxieme" element={<EmploiDeuxieme />} />
          <Route path="/admin/Emploi_Troisieme" element={<EmploiTroisieme />} />
          <Route path="/admin/Calendrier" element={<Calendrier />} />
          <Route path="/admin/Actualite" element={<ListeActualite />} />
          <Route path="/admin/Parcours" element={<Parcours />} />
          <Route path="/admin/Divers" element={<Divers />} />
          <Route path="/admin/Paramettre" element={<Parametre />} />
        </Route>
      </Routes>
      
    </Router>
  );
}

export default App;
