import React from 'react';

const Home = () => {
  return (
    <h1>Home</h1>
  );
};

const Standings = () => {
  return (
    <h1>Standings</h1>
  );
};

const Teams = () => {
  return (
    <h1>Teams</h1>
  );
};

const DesktopRoutes = [
  {
    path: '/',
    sidebarName: 'Home',
    component: Home
  },
  {
    path: '/standings',
    sidebarName: 'Standings',
    component: Standings
  },
  {
    path: '/teams',
    sidebarName: 'Teams',
    component: Teams
  },
];

export default DesktopRoutes;