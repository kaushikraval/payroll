import React from 'react';
import Like from '../../Assets/images/like.gif';
import Love from '../../Assets/images/love.gif';
import HaHa from '../../Assets/images/haha.gif';
import Shock from '../../Assets/images/shock.gif';
import Sad from '../../Assets/images/sad.gif';
import Angry from '../../Assets/images/angry.gif';
import { Button } from 'primereact/button';

export default function Reactions({
  onClick,
  reactionClass,
  initButtonClass,
  onMouseOver,
  handleResetReaction,
}) {
  return (
    <div id="app" className="reaction_wrap">
      <div
        id={initButtonClass}
        className="init-btn"
        onMouseOver={onMouseOver}
        onClick={handleResetReaction}
      ></div>
      <div className="reactions" onMouseOver={onClick}>
        <div id="reactions-cover" className="reactions-cover">
          <Button
            tooltip="Like"
            tooltipOptions={{
              position: 'top',
            }}
            className={`${reactionClass} tooltip_button`}
          >
            <img src={Like} alt="" />
          </Button>
          <Button
            tooltip="Love"
            tooltipOptions={{
              position: 'top',
            }}
            className={`${reactionClass} tooltip_button`}
          >
            <img src={Love} alt="" />
          </Button>
          <Button
            tooltip="Haha"
            tooltipOptions={{
              position: 'top',
            }}
            className={`${reactionClass} tooltip_button`}
          >
            <img src={HaHa} alt="" />
          </Button>
          <Button
            tooltip="Shock"
            tooltipOptions={{
              position: 'top',
            }}
            className={`${reactionClass} tooltip_button`}
          >
            <img src={Shock} alt="" />
          </Button>
          <Button
            tooltip="Sad"
            tooltipOptions={{
              position: 'top',
            }}
            className={`${reactionClass} tooltip_button`}
          >
            <img src={Sad} alt="" />
          </Button>
          <Button
            tooltip="Angry"
            tooltipOptions={{
              position: 'top',
            }}
            className={`${reactionClass} tooltip_button`}
          >
            <img src={Angry} alt="" />
          </Button>
        </div>
      </div>
    </div>
  );
}
