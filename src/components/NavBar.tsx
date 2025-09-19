import AnimatedText from './AnimatedText';
import classes from './NavBar.module.scss';

function NavBar() {
  return (
    <div className={classes.wrapper}>
      <nav className={classes.nav}>
        <a href="#about">
          <AnimatedText text="ABOUT" />
        </a>
        <a href="#socials">
          <AnimatedText text="SOCIALS" />
        </a>
        <a href="/" className={classes.logo}>
          <AnimatedText text="ELIVALE" />
        </a>
        <a href="#blog">
          <AnimatedText text="BLOG" soon />
        </a>
        <a href="#contact">
          <AnimatedText text="CONTACT" />
        </a>
      </nav>
    </div>
  );
}

export default NavBar;
