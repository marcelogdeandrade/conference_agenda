import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';

import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HomeIcon from '@mui/icons-material/Home';

const Navigation = () => {
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation>
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Bookmarks" icon={<BookmarksIcon />} />
      </BottomNavigation>
    </Paper>
  )
}

export default Navigation