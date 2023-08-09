import React from "react";
import styles from "./rightBar.module.scss";
import Image from "next/image";

const RightBar = () => {
  return (
    <div className={styles.rightBar}>
      <div className={styles.container}>
        <div className={styles.item}>
          <span>Suggestions For You</span>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <div className={styles.userImageContainer}>
                <Image
                  src="https://images.pexels.com/photos/2853592/pexels-photo-2853592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  fill
                  className={styles.userImage}
                />
              </div>
              <span>Jane Doe</span>
            </div>
            <div className={styles.buttons}>
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>

          <div className={styles.user}>
            <div className={styles.userInfo}>
              <div className={styles.userImageContainer}>
                <Image
                  src="https://images.pexels.com/photos/2853592/pexels-photo-2853592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  fill
                  className={styles.userImage}
                />
              </div>
              <span>Jane Doe</span>
            </div>
            <div className={styles.buttons}>
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>

        <div className={styles.item}>
          <span>Latest Activities</span>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <div className={styles.userImageContainer}>
                <Image
                  src="https://images.pexels.com/photos/2853592/pexels-photo-2853592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  fill
                  className={styles.userImage}
                />
              </div>
              <p>
                <span>Jane Doe {"  "}</span>
                has changed their cover picture.
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <div className={styles.userImageContainer}>
                <Image
                  src="https://images.pexels.com/photos/2853592/pexels-photo-2853592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  fill
                  className={styles.userImage}
                />
              </div>
              <p>
                <span>Jane Doe {"  "}</span>
                has changed their cover picture.
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <div className={styles.userImageContainer}>
                <Image
                  src="https://images.pexels.com/photos/2853592/pexels-photo-2853592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  fill
                  className={styles.userImage}
                />
              </div>
              <p>
                <span>Jane Doe {"  "}</span>
                has changed their cover picture.
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <div className={styles.userImageContainer}>
                <Image
                  src="https://images.pexels.com/photos/2853592/pexels-photo-2853592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  fill
                  className={styles.userImage}
                />
              </div>
              <p>
                <span>Jane Doe {"  "}</span>
                has changed their cover picture.
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <div className={styles.userImageContainer}>
                <Image
                  src="https://images.pexels.com/photos/2853592/pexels-photo-2853592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  fill
                  className={styles.userImage}
                />
              </div>
              <p>
                <span>Jane Doe {"  "}</span>
                has changed their cover picture.
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <div className={styles.userImageContainer}>
                <Image
                  src="https://images.pexels.com/photos/2853592/pexels-photo-2853592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  fill
                  className={styles.userImage}
                />
              </div>
              <p>
                <span>Jane Doe {"  "}</span>
                has changed their cover picture.
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>

        <div className={styles.item}>
          <span>Online Friends</span>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <div className={styles.userImageContainer}>
                <Image
                  src="https://images.pexels.com/photos/2853592/pexels-photo-2853592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  fill
                  className={styles.userImage}
                />
              </div>
              <div className={styles.online} />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <div className={styles.userImageContainer}>
                <Image
                  src="https://images.pexels.com/photos/2853592/pexels-photo-2853592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  fill
                  className={styles.userImage}
                />
              </div>
              <div className={styles.online} />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <div className={styles.userImageContainer}>
                <Image
                  src="https://images.pexels.com/photos/2853592/pexels-photo-2853592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  fill
                  className={styles.userImage}
                />
              </div>
              <div className={styles.online} />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <div className={styles.userImageContainer}>
                <Image
                  src="https://images.pexels.com/photos/2853592/pexels-photo-2853592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  fill
                  className={styles.userImage}
                />
              </div>
              <div className={styles.online} />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <div className={styles.userImageContainer}>
                <Image
                  src="https://images.pexels.com/photos/2853592/pexels-photo-2853592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  fill
                  className={styles.userImage}
                />
              </div>
              <div className={styles.online} />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <div className={styles.userImageContainer}>
                <Image
                  src="https://images.pexels.com/photos/2853592/pexels-photo-2853592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  fill
                  className={styles.userImage}
                />
              </div>
              <div className={styles.online} />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <div className={styles.userImageContainer}>
                <Image
                  src="https://images.pexels.com/photos/2853592/pexels-photo-2853592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  fill
                  className={styles.userImage}
                />
              </div>
              <div className={styles.online} />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className={styles.user}>
            <div className={styles.userInfo}>
              <div className={styles.userImageContainer}>
                <Image
                  src="https://images.pexels.com/photos/2853592/pexels-photo-2853592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  fill
                  className={styles.userImage}
                />
              </div>
              <div className={styles.online} />
              <span>Jane Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
