import React from 'react';
import MaterialMenu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export const Menu = props => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <IconButton edge="start" color="inherit" onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </IconButton>
      <MaterialMenu
        open={isOpen}
        onClose={() => setIsOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem>Home</MenuItem>
        <MenuItem>Contact</MenuItem>
        <MenuItem>About</MenuItem>
      </MaterialMenu>
    </>
  );
};
