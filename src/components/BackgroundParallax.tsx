import classes from './BackgroundParallax.module.scss';
import ground from '../assets/Ground.svg';
import mountains from '../assets/Mountains.svg';
import stars from '../assets/Stars.svg';
import trees from '../assets/Trees.svg';

function BackgroundParallax() {
  return (
    <div className={classes.wrapper}>
      <img src={mountains} className={classes.mountains} alt="Mountains" />
      <img src={stars} className={classes.stars} alt="Stars" />
      <img src={ground} className={classes.ground} alt="Ground" />
      <img src={trees} className={classes.trees} alt="Trees" />
      <a href="https://www.figma.com/@yashtomar" target="_blank" className={classes.credits}>
        design by Yash Tomar
      </a>
    </div>
  );
}

export default BackgroundParallax;
