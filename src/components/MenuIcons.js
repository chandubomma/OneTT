'use client'

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const MenuIcons = ({menuRef,menuOpen,setMenuOpen}) => {
    const handleOpenMenu = ()=>{
      menuRef.current.classList.remove("-left-full")
      menuRef.current.classList.add("left-0")
      setMenuOpen(true)
    }

    const handleCloseMenu = ()=>{
      menuRef.current.classList.add("-left-full")
      menuRef.current.classList.remove("left-0")
      setMenuOpen(false)
    }

  return (
    <div >
      {
        menuOpen?
        <div onClick={handleCloseMenu}><CloseIcon color="primary" sx={{fontSize:40}}/></div>:
        <div onClick={handleOpenMenu}><MenuIcon color="primary" sx={{fontSize:40}}/></div>
      }
    </div>
  )
}

export default MenuIcons
