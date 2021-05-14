import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import ReceiptIcon from '@material-ui/icons/Receipt';
import FaceIcon from '@material-ui/icons/Face';
import EmailIcon from '@material-ui/icons/Email';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import './styles.scss';

const NavbarXs = () => {
  const preventDefault = (event: any) => event.preventDefault();

  return (
    <div className="navxs__section">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            href="#home"
          >
            <HomeIcon />
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="face">
            <FaceIcon />
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="face">
            <ReceiptIcon />
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="face">
            <AssignmentIndIcon />
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="face">
            <EmailIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavbarXs;
