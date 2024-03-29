import { Routes, Route } from "react-router-dom"

import Tutorial from '../../Pages/Dashboard/Tutorial'
import Calendar from '../../Pages/Dashboard/Calendar'
import Error from '../../Pages/Error'
import Expert from '../../Pages/Dashboard/Expert'
import Main from '../../Pages/DashboardClient/Main'
import Courrier from '../../Pages/DashboardClient/CourrierList'

import LayoutDashboardClient from "../../Layouts/LayoutDashboard"


import ProtectedRoutes from "../ProtectedRoutes"
import Call from "../../Pages/JitsiCall/Call"
import Autre from "../../Pages/Dashboard/Autre"
import CreationForm from "../../Pages/Forms/CreationForm"
import DomiForm from "../../Pages/Forms/DomiForm"
import Demande from "../../Pages/Dashboard/Demande"
import Facture from "../../Pages/Dashboard/Facture"
import Settings from '../../Pages/Dashboard/Settings'
import Contract from "../../Pages/Dashboard/Contract"
import StatusForm from "../../Pages/Forms/StatusForm"
import Statuts from "../../Pages/Dashboard/Statuts"




const RouteClient = () => (

    <Routes>
        <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<LayoutDashboardClient />}>
                <Route path='/' element={<Main />} />
                <Route path='/expert' element={<Expert />} />
                <Route path='/Calendar' element={<Calendar />} />
                <Route path='/Courrier' element={<Courrier />} />
                <Route path='/Tutorial' element={<Tutorial />} />
                <Route path='/Call' element={<Call />} />
                <Route path='/demande' element={<Demande />} />
                <Route path='/Contract' element={<Contract />} />
                <Route path='/autre' element={<Autre />} />
                <Route path='/facture' element={<Facture />} />
                <Route path='/CreationForm' element={<CreationForm />} />
                <Route path='/Domicilitation' element={<DomiForm />} />
                <Route path='/Settings' element={<Settings />} />
                <Route path='/statutlist' element={<Statuts />} />
                <Route path='/statut' element={<StatusForm />} />

                {/*
        <Route path='/Courrier' element={<Tutorial />} />
        <Route path='/Contract' element={<Tutorial />} />
        <Route path='/Facture' element={<Tutorial />} />
        <Route path='/depot' element={<Tutorial />} />
  */}

                <Route path='*' element={<Error />} />
            </Route>
        </Route>

    </Routes>
)

export default RouteClient