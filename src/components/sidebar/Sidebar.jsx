import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StoreIcon from '@mui/icons-material/Store';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Pets,
  ProductionQuantityLimits,
  Restaurant,
} from '@mui/icons-material';
import { resetUser } from '../../redux/reducers/userReducer.js';
import { persistor } from '../../redux/store.js';

const Sidebar = () => {
  const { dispatch: changetheme } = useContext(DarkModeContext);
  const dispatch = useDispatch();
  const {
    info: { isAdmin },
  } = useSelector(({ user }) => user);

  const logout = () => {
    dispatch(resetUser());
    persistor.pause();
    persistor.flush().then(() => {
      return persistor.purge();
    });
    localStorage.removeItem('jwt');
  };
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo">Biorepere</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: 'none' }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: 'none' }}>
            <li>
              <ProductionQuantityLimits className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <Link to="/stores" style={{ textDecoration: 'none' }}>
            <li>
              <StoreIcon className="icon" />
              <span>Stores</span>
            </li>
          </Link>
          <Link to="/restaurants" style={{ textDecoration: 'none' }}>
            <li>
              <Restaurant className="icon" />
              <span>Restaurants</span>
            </li>
          </Link>
          <Link to="/animals" style={{ textDecoration: 'none' }}>
            <li>
              <Pets className="icon" />
              <span>Animals</span>
            </li>
          </Link>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <button onClick={logout}>
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => changetheme({ type: 'LIGHT' })}
        ></div>
        <div
          className="colorOption"
          onClick={() => changetheme({ type: 'DARK' })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
