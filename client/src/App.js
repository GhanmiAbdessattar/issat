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
import ProfileAdmin from "./Dashboard/pages/ProfileAdmin";
import Profile from "./Etudiant/pages/Profile";
import MainLayout from "./Etudiant/components/MainLayout";
import MesNotes from "./Etudiant/pages/MesNotes";
import DetailPremSem from "./Etudiant/components/DetailPremSem";
//import DetailModule from "./Etudiant/components/DetailModule";
import EditProfile from "./Etudiant/pages/EditProfile";
import Emploi from "./Etudiant/pages/Emploi";
import ListEtudiant from "./Dashboard/pages/ListEtudiant";
import ListEnseignant from "./Dashboard/pages/ListEnseignant";
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
import EtudiantDetail from "./Dashboard/pages/EtudiantDetail";
import DetailDexiemSem from "./Etudiant/components/DetailDexiemSem";

import AuthGuard from './AuthGuard'; 
import ResultatPrincipale from "./Dashboard/pages/ResultatPrincipale";
import ResultatRattrappage from "./Dashboard/pages/ResultatRattrappage";
import NotesPrincipale from "./Dashboard/pages/NotesPrincipale";
import NotesRattrappage from "./Dashboard/pages/NotesRattrappage";

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
          <Route path="/acceuil" element={<AuthGuard><MainLayout /></AuthGuard>}>
                <Route path="acceuil" element={<AuthGuard><Acceuil /></AuthGuard>} />
                <Route path="/acceuil/mesnotes" element={<AuthGuard><MesNotes /></AuthGuard>} />
                <Route path="mesnotes/DetailPremierSemestre" element={<AuthGuard><DetailPremSem /></AuthGuard>} />
                <Route path="mesnotes/DetailDexiemeSemestre" element={<AuthGuard><DetailDexiemSem /></AuthGuard>} />
                <Route path="mesnotes/DetailPremierSemestre/DetailModule" element={<AuthGuard><DetailModule /></AuthGuard>} />
                <Route path="mesnotes/DetailDexiemeSemestre/DetailModule" element={<AuthGuard><DetailModule /></AuthGuard>} />

                <Route path="Emploi" element={<AuthGuard><Emploi /></AuthGuard>} />
                <Route path="profile" element={<AuthGuard><Profile /></AuthGuard>} />
                <Route path="EditProfile" element={<AuthGuard><EditProfile /></AuthGuard>} />
                <Route path="quité" element={<AuthGuard><Logout /></AuthGuard>} />
                <Route path="resetPassword" element={<ResetPassword />} />
                <Route path="Calendrier" element={<AuthGuard><CalendrierEtudiant /></AuthGuard>} />
                <Route path="Enseignants" element={<AuthGuard><EnseignantsEtudiant /></AuthGuard>} />
                <Route path="Parcours" element={<AuthGuard><ParcoursEtudiant /></AuthGuard>} />
                <Route path="Divers" element={<AuthGuard><DiversEtudiant /></AuthGuard>} />
          </Route>
        </Routes>
        <Routes>
        <Route path="/admin" element={<AuthGuard><MainLayoutAdmin /></AuthGuard>}>
          <Route path="/admin/Acceuil" element={<AuthGuard><AcceuilAdmin /></AuthGuard>} />
          <Route path="/admin/ListEtudiants" element={<AuthGuard><ListEtudiant /></AuthGuard>} />
          <Route path="/admin/ListEnseignants" element={<AuthGuard><ListEnseignant /></AuthGuard>} />
          <Route path="/admin/ListeUsers" element={<AuthGuard><UtilisateursAdmin /></AuthGuard>} />
          <Route path="/admin/AjoutUsers" element={<AuthGuard><AjoutUser /></AuthGuard>} />
          <Route path="/admin/AjoutEnseignant" element={<AuthGuard><AjoutEnseignants /></AuthGuard>} />
          <Route path="/admin/AjoutEtudiant" element={<AuthGuard><AjoutEtudiants /></AuthGuard>} />
          <Route path="/admin/Profile" element={<AuthGuard><ProfileAdmin /></AuthGuard>} />
          <Route path="/admin/resultat_Princ" element={<AuthGuard><ResultatPrincipale /></AuthGuard>} />
          <Route path="/admin/resultat_rat" element={<AuthGuard><ResultatRattrappage /></AuthGuard>} />
          <Route path="/admin/note_principale" element={<AuthGuard><NotesPrincipale /></AuthGuard>} />
          <Route path="/admin/note_rattrappage" element={<AuthGuard><NotesRattrappage /></AuthGuard>} />
          <Route path="/admin/Emploi_Premiere" element={<AuthGuard><EmploiPremiere /></AuthGuard>} />
          <Route path="/admin/Emploi_Deuxieme" element={<AuthGuard><EmploiDeuxieme /></AuthGuard>} />
          <Route path="/admin/Emploi_Troisieme" element={<AuthGuard><EmploiTroisieme /></AuthGuard>} />
          <Route path="/admin/Calendrier" element={<AuthGuard><Calendrier /></AuthGuard>} />
          <Route path="/admin/Actualite" element={<AuthGuard><ListeActualite /></AuthGuard>} />
          <Route path="/admin/Parcours" element={<AuthGuard><Parcours /></AuthGuard>} />
          <Route path="/admin/Divers" element={<AuthGuard><Divers /></AuthGuard>} />
          <Route path="ListEtudiants/EtudiantDetail" element={<AuthGuard><EtudiantDetail /></AuthGuard>} />
        </Route>
      </Routes>
      
    </Router>
  );
}

export default App;
