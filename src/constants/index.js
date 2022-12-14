import { FaUserFriends } from "react-icons/fa";
import { GoDashboard } from "react-icons/go";
import { GrPlan, GrTransaction } from "react-icons/gr";
import Dashboard from "../components/Dashboard/contents/dashboard";
import Playgrounds from "../components/Dashboard/contents/playgrounds";
import Transactions from "../components/Dashboard/contents/transactions";
import Users from "../components/Dashboard/contents/users";
export const adminSidebarTabs = [
  {
    tabName: "dashboard",
    tabLabel: "Dashboard",
    tabIcon: <GoDashboard size={20} />,
    component: <Dashboard />,
  },
  {
    tabName: "playgrounds",
    tabLabel: "Playgrounds",
    tabIcon: <GrPlan size={20} />,
    component: <Playgrounds />,
  },
  {
    tabName: "transactions",
    tabLabel: "Transactions",
    tabIcon: <GrTransaction size={20} />,
    component: <Transactions />,
  },
  {
    tabName: "users",
    tabLabel: "Users",
    tabIcon: <FaUserFriends size={20} />,
    component: <Users />,
  },
];

export const app = {
  backendUrl: process.env.REACT_APP_BACKEND_URL,
  fileBaseUrl: process.env.REACT_APP_BACKEND_FILE_URL,
};
