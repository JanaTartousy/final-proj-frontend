import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/sidebar';


function AdminRoute() {
  return (
    <div>
        <Sidebar/>
       < Outlet/>
    </div>
  )
}

export default AdminRoute