import React from "react";
import styles from "./leftBar.module.scss";
import Image from "next/image";

type leftMenuField = {
  img: string;
  field: string;
};

const leftMenuFieldArr = [
  {
    img: "/assets/1.png",
    field: "Friends",
  },
  {
    img: "/assets/2.png",
    field: "Groups",
  },
  {
    img: "/assets/3.png",
    field: "MarketPlace",
  },
  {
    img: "/assets/4.png",
    field: "Watch",
  },
  {
    img: "/assets/5.png",
    field: "Memories",
  },
];

const leftMenuShortcutArr = [
  {
    img: "/assets/6.png",
    field: "Events",
  },
  {
    img: "/assets/7.png",
    field: "Gaming",
  },
  {
    img: "/assets/8.png",
    field: "Gallery",
  },
  {
    img: "/assets/9.png",
    field: "Videos",
  },
  {
    img: "/assets/10.png",
    field: "Messages",
  },
];

const leftMenuFieldOtherArr = [
  {
    img: "/assets/11.png",
    field: "Fundraiser",
  },
  {
    img: "/assets/12.png",
    field: "Tutorials",
  },
  {
    img: "/assets/13.png",
    field: "Courses",
  },
];

const LeftBar = () => {
  return (
    <div className={styles.leftBar}>
      <div className={styles.container}>
        <div className={styles.menu}>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src="https://images.pexels.com/photos/12772395/pexels-photo-12772395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                fill
                className={styles.userImage}
              />
            </div>
            <span>John Doe</span>
          </div>
          {leftMenuFieldArr.map((itemImg: leftMenuField) => (
            <div className={styles.item} key={itemImg.field}>
              <div className={styles.itemImageContainer}>
                <Image
                  src={itemImg.img}
                  alt=""
                  fill
                  className={styles.itemImage}
                />
              </div>
              <span>{itemImg.field}</span>
            </div>
          ))}
        </div>
        <hr />
        <div className={styles.menu}>
          <span className={styles.title}>Your ShortCuts</span>
          {leftMenuShortcutArr.map((itemImg: leftMenuField) => (
            <div className={styles.item} key={itemImg.field}>
              <div className={styles.itemImageContainer}>
                <Image
                  src={itemImg.img}
                  alt=""
                  fill
                  className={styles.itemImage}
                />
              </div>
              <span>{itemImg.field}</span>
            </div>
          ))}
        </div>
        <hr />
        <div className={styles.menu}>
          <span className={styles.title}>Others</span>
          {leftMenuFieldOtherArr.map((itemImg: leftMenuField) => (
            <div className={styles.item} key={itemImg.field}>
              <div className={styles.itemImageContainer}>
                <Image
                  src={itemImg.img}
                  alt=""
                  fill
                  className={styles.itemImage}
                />
              </div>
              <span>{itemImg.field}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
