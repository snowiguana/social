import React from "react";
import styles from "./navbar.module.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Link from "next/link";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <Link href="/home">
          <span>Social Media</span>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
        <GridViewOutlinedIcon />

        <div className={styles.search}>
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className={styles.right}>
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <AppsOutlinedIcon />
        <div className={styles.user}>
          <div className={styles.userImageContainer}>
            {/* <Image
              src="https://images.pexels.com/photos/16697128/pexels-photo-16697128/free-photo-of-woman-in-dress-posing-in-canyon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="userImage"
              fill
              className={styles.userImage}
            /> */}
          </div>
          <span>John Doe</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
