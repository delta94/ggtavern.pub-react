import React, { useState, useEffect } from 'react';
import { GameDrawer } from './game-drawer.component';
import { GameHome } from './game-home.component';
import { GameList } from './game-list.component';
import { Toolbar, IconButton, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useTitle } from 'app/hooks/useTitle.hook';
import { GameSystem } from './game.model';
import { getItems, sortItems } from 'app/services';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles({
  sysName: {
    marginLeft: 10,
  },
});

export const Games = () => {
  useTitle('GGTavern - Games');
  const [showDrawer, setShowDrawer] = useState(false);
  const [systemList, setSystemList] = useState<GameSystem[]>();
  const [currentSystem, setcurrentSystem] = useState<GameSystem>();
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    getSystems()
      .then((systems) => {
        setSystemList(systems);
        enqueueSnackbar('Retrieved games', { variant: 'success' });
      })
      .catch((err) => {
        console.error(err);
        enqueueSnackbar('Error retrieving games', { variant: 'error' });
      });
  }, [enqueueSnackbar]);

  return (
    <>
      <Toolbar>
        <IconButton onClick={() => setShowDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <h2 className={classes.sysName}>
          {currentSystem?.system ?? 'Game Home'}
        </h2>
      </Toolbar>
      <GameDrawer
        show={showDrawer}
        updateShow={setShowDrawer}
        systemList={systemList}
        updateCurrentSystem={setcurrentSystem}></GameDrawer>
      {currentSystem === undefined ? (
        <GameHome />
      ) : (
        <GameList gameSystem={currentSystem} />
      )}
    </>
  );
};

const getSystems = async (): Promise<GameSystem[]> => {
  const pathString = 'games';
  try {
    let systems: GameSystem[] = [];
    const itemData = await getItems<GameSystem>(pathString);
    systems = sortItems(itemData, 'system');
    systems = itemData.map((system) => {
      let games = system.games;
      games = sortItems(games!, 'name');
      system.games = games;
      return system;
    });
    return systems;
  } catch (err) {
    throw err;
  }
};
