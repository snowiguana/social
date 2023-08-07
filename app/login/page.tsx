import Link from "next/link";
import styles from "./page.module.scss";

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.card}>
        <div className={styles.left}>
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi magnam
            quae culpa nostrum iusto dolores repudiandae! Ipsam, voluptates
            ullam hic facere iure voluptatum error omnis eum aperiam repudiandae
            pariatur quis.
          </p>
          <span>Don't have an account?</span>
          <Link href="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className={styles.right}>
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" name="username" />
            <input type="password" placeholder="Password" name="password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
