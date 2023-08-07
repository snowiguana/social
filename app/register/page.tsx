import Link from "next/link";
import styles from "./page.module.scss";

const Register = () => {
  return (
    <div className={styles.register}>
      <div className={styles.card}>
        <div className={styles.left}>
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi magnam
            quae culpa nostrum iusto dolores repudiandae! Ipsam, voluptates
            ullam hic facere iure voluptatum error omnis eum aperiam repudiandae
            pariatur quis.
          </p>
          <span>Already have an account?</span>
          <Link href="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className={styles.right}>
          <h1>Register</h1>
          <form>
            <input type="email" placeholder="Email" name="email" />
            <input type="text" placeholder="Username" name="username" />
            <input type="password" placeholder="Password" name="password" />
            <input type="text" placeholder="Name" name="name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
