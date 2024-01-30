import React, { useEffect } from 'react'
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from "../context/Auth";
import logo from '../assets/Logo_!.png'
import toglerIcon from "../assets/day-and-night.png"
const NavbarForHome = () => {

  const context = useContext(AuthContext);
  console.log(context.user)

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }
  }
  ,[theme])

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme)
   };
    
  const handleLogOut = () => {
    context.logout();
  }

  
  return (
    <Navbar fluid rounded className="dark:bg-black">
      <Navbar.Brand>
        <img src={logo} className="mr-3 h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          FitLife
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              /* img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" */
              img={context.user.profilePicture}
              rounded
              className='mr-1'
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Hello</span>
            <span className="block truncate text-sm font-medium">
              {context.user.username}
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Profile</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogOut}>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Your workouts</Navbar.Link>
        <Navbar.Link href="#">Editor</Navbar.Link>
        <Navbar.Link href="#">Template Store</Navbar.Link>
        <button
          onClick={handleToggleTheme}
          className="dark:bg-black  dark:text-white"
          type="button"
          color="primary"
        >
          {theme === "light" ? "Dark mode" : "Light mode"}
        </button>
        
      </Navbar.Collapse>
    </Navbar>
  );

}


export default NavbarForHome