import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react/cjs/react.production.min';
import { ACTION_TYPE } from '../../../../constants/constant';
import { useData } from '../../../../contexts';
import { useOutsideClickHandler } from '../../../../custom-hooks/OutSideClickHandlerHook';
import './PlayListCard.css';

export const PlayListCard = ({ playlist, menuItems, type }) => {
  const navigate = useNavigate();
  const { dispatch } = useData();
  // const ref = useRef(null);
  // const { resetMenu } = useOutsideClickHandler(ref);
  const { _id, vidoes, title } = playlist;

  // useEffect(() => {
  //   if (resetMenu) {
  //     dispatch({
  //       type: ACTION_TYPE.RESET_MENU,
  //     });
  //   }
  // }, [resetMenu, dispatch]);
  console.log(playlist);
  return (
    <div className='playlist-card-outer-container'>
      <div className='playlist-card-container'>
        <div className='playlist-card-image-container'>
          {/* <img
            className='img-responsive playlist-card-image'
            src={
              vidoes.length > 0
                ? `https://i.ytimg.com/vi/${vidoes[0]._id}/maxresdefault.jpg`
                : ''
            }
            alt={title}
          /> */}
        </div>
        <div className='playlist-card-header-container font-wt-bold'>
          <p className='playlist-card-header'>{title}</p>
          <div className='playlist-card-header-menu'>
            <span className='material-icons-outlined'>more_vert</span>
          </div>
        </div>
      </div>
      <div className='playlist-card-number-wrapper'>
        {/* <p>{vidoes.length}</p> */}
        <span class='material-icons-outlined'>playlist_play</span>
      </div>
    </div>
  );
};
