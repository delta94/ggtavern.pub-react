import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import MemoriamImage from './memoriam-image';
import { ImgMap } from './img/imgMap';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    fontFamily: '"Press Start 2P"',
    height: '100%',
  },
  carousel: {
    width: '100%',
    height: 500,
  },
  box: {
    padding: 10,
    width: '100%',
    height: 600,
    borderStyle: 'double',
    borderColor: theme.palette.secondary.main,
    borderWidth: 5,
    margin: '5px auto',
    '& img': {
      width: '100%',
      maxWidth: 700,
    },
  },
  uglyButton: {
    backgroundColor: '#303030',
    border: 'none',
  },
}));

export default function Memoriam() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h3>This is a place to celebrate the fun to be had at Goblin.</h3>
      <div className={classes.box}>
        <CarouselProvider
          naturalSlideWidth={300}
          naturalSlideHeight={300}
          totalSlides={ImgMap.length}
          infinite
          className={classes.carousel}>
          <Slider className={classes.carousel}>
            {ImgMap.map((img) => {
              return (
                <Slide index={img.index}>
                  <MemoriamImage src={img.src} alt={img.alt} />
                </Slide>
              );
            })}
          </Slider>
          <ButtonBack className={classes.uglyButton}>
            <Button color='primary' variant='contained'>
              Back
            </Button>
          </ButtonBack>
          <ButtonNext className={classes.uglyButton}>
            <Button color='primary' variant='contained'>
              Next
            </Button>
          </ButtonNext>
        </CarouselProvider>
      </div>
    </div>
  );
}
