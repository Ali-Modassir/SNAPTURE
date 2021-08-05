import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChatIcon from "@material-ui/icons/Chat";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import HelpIcon from "@material-ui/icons/Help";
import FaceIcon from "@material-ui/icons/Face";

const DashboardRoutes = [
  {
    path: "/dash/dashboard",
    name: "Home",
    icon: <HomeIcon />,
  },
  {
    path: "/dash/profile",
    name: "My Profile",
    icon: <AccountCircleIcon />,
  },
  {
    path: "/dash/messages",
    name: "Messages",
    icon: <ChatIcon />,
  },
  {
    path: "/dash/findFriends",
    name: "Find Friends",
    icon: <FaceIcon />,
  },
  {
    path: "/dash/feedback",
    name: "Feedback",
    icon: <HelpIcon />,
  },
];

export default DashboardRoutes;
