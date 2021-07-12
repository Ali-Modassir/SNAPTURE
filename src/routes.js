import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChatIcon from "@material-ui/icons/Chat";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import HelpIcon from "@material-ui/icons/Help";

const DashboardRoutes = [
  {
    path: "/dash",
    name: "Home",
    icon: <HomeIcon />,
  },
  {
    path: "/profile",
    name: "My Profile",
    icon: <AccountCircleIcon />,
  },
  {
    path: "/messages",
    name: "Messages",
    icon: <ChatIcon />,
  },
  {
    path: "/market",
    name: "Market",
    icon: <LocalGroceryStoreIcon />,
  },
  {
    path: "/support",
    name: "Help Center",
    icon: <HelpIcon />,
  },
];

export default DashboardRoutes;
