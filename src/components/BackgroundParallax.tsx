import { useEffect, useState } from 'react';
import classes from './BackgroundParallax.module.scss';
import ground from '../assets/Ground.svg';
import mountains from '../assets/Mountains.svg';
import stars from '../assets/Stars.svg';
import trees from '../assets/Trees.svg';

function BackgroundParallax() {
  const [mountainsOffset, setMountainsOffset] = useState(0);
  const [treesOffset, setTreesOffset] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMountainsOffset((e.screenX - (window.innerWidth / 2)) / 120);
      setTreesOffset((e.screenX - (window.innerWidth / 2)) / 10);
    };

    document.body.addEventListener('mousemove', handleMouseMove);
    return () => document.body.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={classes.wrapper}>
      <img src={mountains} className={classes.mountains} style={{ left: mountainsOffset }} alt="Mountains" />
      <img src={stars} className={classes.stars} alt="Stars" />
      <img src={ground} className={classes.ground} alt="Ground" />
      <img src={trees} className={classes.trees} style={{ left: treesOffset }} alt="Trees" />
      <a href="https://www.figma.com/@yashtomar" target="_blank" className={classes.credits}>
        design by Yash Tomar
      </a>
    </div>
  );
}

export default BackgroundParallax;
