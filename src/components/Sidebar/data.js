// Sidebar imports
import DashboardIcon from "@mui/icons-material/Dashboard";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import Face3Icon from '@mui/icons-material/Face3';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import LogoutIcon from '@mui/icons-material/Logout';




// Sidebar Data
export const SidebarData = [

  {
    path: "dashboard-home",
    icon: DashboardIcon,
    heading: "Dashboard",
  },
  {
    path: "DashAdmin",
    icon: AdminPanelSettingsIcon,
    heading: "Admin",
  },
  {
    path: "DashUser",
    icon: Face3Icon,
    heading: "Users",
  },
  {
    path: "DashTour",
    icon: VaccinesIcon,
    heading: "Tours",
  },
  {
    path: "DashPost",
    icon: ChildCareIcon,
    heading: "Posts",
  },
  {
    path: "DashFeedback",
    icon: ShoppingCartCheckoutIcon,
    heading: "Feedbacks",
  },
    {
    path: "/#home",
    icon: LogoutIcon,
    heading: "Logout",
  },
 
]