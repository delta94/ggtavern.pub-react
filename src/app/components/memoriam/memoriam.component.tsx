import React from 'react';
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import { MemoriamImage } from './memoriam-image.component';
import { ImgMap } from './img/imgMap';
import { useTitle } from 'app/hooks/useTitle.hook';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    height: '80%',
  },
  boxLarge: {
    lineHeight: 0,
    padding: 10,
    width: '80%',
    height: 600,
    borderStyle: 'double',
    borderColor: theme.palette.secondary.main,
    borderWidth: 5,
    margin: '0 auto',
    textAlign: 'center',
    columnCount: 7,
    columnGap: 0,
    MozColumnCount: 7,
    MozColumnGap: 0,
    WebkitColumnCount: 7,
    WebkitColumnGap: 0,
    '& img': {
      width: '100%',
      height: 'auto',
    },
  },
  boxMed: {
    lineHeight: 0,
    padding: 10,
    width: '80%',
    height: 600,
    borderStyle: 'double',
    borderColor: theme.palette.secondary.main,
    borderWidth: 5,
    margin: '0 auto',
    textAlign: 'center',
    columnCount: 6,
    columnGap: 0,
    MozColumnCount: 6,
    MozColumnGap: 0,
    WebkitColumnCount: 6,
    WebkitColumnGap: 0,
    '& img': {
      width: '100%',
      height: 'auto',
    },
  },
  boxSmall: {
    lineHeight: 0,
    padding: 10,
    width: '80%',
    height: 600,
    borderStyle: 'double',
    borderColor: theme.palette.secondary.main,
    borderWidth: 5,
    margin: '0 auto',
    textAlign: 'center',
    columnCount: 5,
    columnGap: 0,
    MozColumnCount: 5,
    MozColumnGap: 0,
    WebkitColumnCount: 5,
    WebkitColumnGap: 0,
    '& img': {
      width: '100%',
      height: 'auto',
    },
  },
}));

export const Memoriam = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMed = useMediaQuery(theme.breakpoints.up('md'));
  const isLarger = useMediaQuery(theme.breakpoints.up('lg'));
  useTitle('GGTavern - In Memoriam');

  return (
    <div className={classes.root}>
      <h3>This is a place to celebrate the fun that was had at Goblin.</h3>
      <p>Click/tap on the images to see them larger.</p>
      <div
        className={
          isLarger
            ? classes.boxLarge
            : isMed
            ? classes.boxMed
            : classes.boxSmall
        }>
        {ImgMap.map((img) => {
          return <MemoriamImage key={img.index} src={img.src} alt={img.alt} />;
        })}
      </div>
    </div>
  );
};
