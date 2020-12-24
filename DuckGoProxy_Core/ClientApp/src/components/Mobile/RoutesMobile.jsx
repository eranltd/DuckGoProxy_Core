import React from 'react';
import Home from '../Mobile/Home/Home.component'

const ContactSuppliers = () => {
  return (
    <h1>ContactSuppliers - not implemented!</h1>
  );
};

const AddDiscountSpot = () => {
  return (
    <h1>AddDiscountSpot - not implemented</h1>
  );
};

const ShareApp = () => {
  return (
    <h1>ShareApp - not implemented</h1>
  );
};

const Preferences = () => {
  return (
    <h1>Preferences - not implemented</h1>
  );
};

const About = () => {
  return (
    <h1>About - not implemented</h1>
  );
};

const ContactSupport = () => {
  return (
    <h1>Contact Support - not implemented</h1>
  );
};

const Logout = () => {
  return (
    <h1>Logout - not implemented</h1>
  );
};

const Login = () => {
  return (
    <h1>Login - not implemented</h1>
  );
};

const SignUp = () => {
  return (
    <h1>SignUp - not implemented</h1>
  );
};

const MobileRoutes = [
  {
    path: '/',
    sidebarName: 'Home',
    component: Home,
    icon:""
  },
  {
    path: '/contactsuppliers',
    sidebarName: 'Contact Suppliers',
    component: ContactSuppliers,
    icon:""
  },
  {
    path: '/addspot',
    sidebarName: 'Add New Discount Spot',
    component: AddDiscountSpot,
    icon:""
  },
  {
    path: '/shareapp',
    sidebarName: 'Share App',
    component: ShareApp,
    icon:""
  },
  {
    path: '/preferences',
    sidebarName: 'Preferences',
    component: Preferences,
    icon:""
  },
  {
    path: '/about',
    sidebarName: 'About',
    component: About,
    icon:""
  },
  {
    path: '/contactus',
    sidebarName: 'Contact Support',
    component: ContactSupport,
    icon:""
  },
  {
    path: '/login',
    sidebarName: 'Login',
    component: Login,
    icon:""
  },
  {
    path: '/logout',
    sidebarName: 'Logout',
    component: Logout,
    icon:""
  },
  {
    path: '/signup',
    sidebarName: 'SignUp',
    component: SignUp,
    icon:""
  }
];

export default MobileRoutes;