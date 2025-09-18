import classes from './NavBar.module.css';

function NavBar() {
  return (
    <div className={classes.wrapper}>
      <nav className={classes.nav}>
        <a href="#about">About Me</a>
        <a href="#socials">Socials</a>
        <a href="/" className={classes.logo}>ELIVALE</a>
        <a href="#blog">Blog</a>
        <a href="#contacts">Contacts</a>
      </nav>
    </div>
  );
}

export default NavBar;
