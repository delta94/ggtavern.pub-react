import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { GameSystem } from './game.model';

export const GameList = (props: { gameSystem: GameSystem | undefined }) => {
  return (
    <div className='container'>
      {props.gameSystem?.note !== null && (
        <div>Note: {props.gameSystem?.note}</div>
      )}
      {props.gameSystem?.games && (
        <List>
          {props.gameSystem?.games.map((game, i) => {
            return (
              <ListItem key={i}>
                <ListItemText primary={game.name} />
              </ListItem>
            );
          })}
        </List>
      )}
    </div>
  );
};
