import React, { useState, useEffect } from 'react';
import { GameDrawer } from './game-drawer.component';
import { GameHome } from './game-home.component';
import { GameList } from './game-list.component';
import { Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useTitle } from 'app/hooks/useTitle.hook';
import { GameSystem, Game } from './game.model';
import { getItems } from 'app/services/firebase';

export const Games = () => {
  useTitle('GGTavern - Games');
  const [showDrawer, setShowDrawer] = useState(false);
  const [systemList, setSystemList] = useState<GameSystem[]>();
  const [currentSystem, setcurrentSystem] = useState<GameSystem>();

  useEffect(() => {
    getSystems().then((systems) => {
      console.log(systems);
      setSystemList(systems);
    });
  }, []);

  return (
    <>
      <Toolbar>
        <IconButton onClick={() => setShowDrawer(true)}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <GameDrawer show={showDrawer} updateShow={setShowDrawer}></GameDrawer>
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
    systems = itemData.map((system) => {
      let games = system.games;
      return system;
    });
    return systems;
  } catch (err) {
    throw err;
  }
};
