import React from 'react'
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import ListCompaniesComponent from './components/ListCompaniesComponent';
import CreateCompanyComponent from './components/CreateCompanyComponent';
import ListCompanyEquipmentComponent from './components/ListCompanyEquipmentComponent';
import ListEquipmentComponent from './components/ListEquipmentComponent';
import CreateCompanyAdminComponent from './components/CreateCompanyAdminComponent';
import ViewCompanyComponent from './components/ViewCompanyComponent';
import ActivateAccountComponent from './components/ActivateAccountComponent'; 
import CreateUserComponent from './components/CreateUserComponent';
import EquipmentOrderingComponent from './components/EquipmentOrderingComponent'
import UpdateCompanyComponent from './components/UpdateCompanyComponent';
import UpdateCompanyAdminComponent from './components/UpdateCompanyAdminComponent';
import SysAdminHomePageComponent from './components/SysAdminHomePageComponent';
import CreateSystemAdminComponent from './components/CreateSystemAdminComponent';
import UpdateSystemAdminPassword from './components/UpdateSystemAdminPassword';
import ListComplaintComponent from './components/ListComplaintComponent';
import ReplyToComplaintComponent from './components/ReplyToComplaintComponent';
import CalendarViewWorkingDaysComponent from './components/CalendarViewWorkingDaysComponent';
import CreateEquipmentComponent from './components/CreateEquipmentComponent';
import UpdateEquipmentComponent from './components/UpdateEquipmentComponent';
import CreatePredefinedReservation from './components/CreatePredefinedReservation';
function App() {
  return (
    <div className = "container">

    <Router>
      <Switch>
        <Route path="/api/companies" component={ListCompaniesComponent} exact/>
        <Route path="/api/companies/update/:id" component={UpdateCompanyComponent} exact/>
        <Route path="/api/companies/create" component={CreateCompanyComponent} exact/>
        <Route path="/api/equipment/company/:id"  component={ListCompanyEquipmentComponent} exact />
        <Route path="/api/equipment" component={ListEquipmentComponent} exact />
        <Route path="/api/companies/:id" component={ViewCompanyComponent} exact/>
        <Route path="/activate" component={ActivateAccountComponent} exact/>
        <Route path="/signup" component={CreateUserComponent} exact/>
        <Route path="/api/company-admins/create" component={CreateCompanyAdminComponent} exact/>
        <Route path="/api/company-admins/update/:id" component={UpdateCompanyAdminComponent} exact/>
        <Route path="/api/equipment/ordering" component={EquipmentOrderingComponent} exact/>
        <Route path="/api/home-page/system-admin" component={SysAdminHomePageComponent} exact/>
        <Route path="/api/system-admins/create" component={CreateSystemAdminComponent} exact/>
        <Route path="/api/system-admins/update-password" component={UpdateSystemAdminPassword} exact/>
        <Route path="/api/complaints" component={ListComplaintComponent} exact/>
        <Route path="/api/complaints/reply/:id" component={ReplyToComplaintComponent} exact />
        <Route path="/api/company-admins/company-working-days" component={CalendarViewWorkingDaysComponent} exact/>
        <Route path="/api/equipment/create/:id" component={CreateEquipmentComponent} exact />
        <Route path="/api/equipment/update/:id" component={UpdateEquipmentComponent} exact />
        <Route path="/api/companies/:id/create-reservation" component={CreatePredefinedReservation} exact />
        
        
        
      </Switch>
    </Router>

    </div>
  );
}

export default App;
