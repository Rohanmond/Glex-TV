import { ChipsContainer } from '../../components';
import { useData } from '../../contexts';
import { useFilter } from '../../custom-hooks/FilterHook';
import VideoCard from './components/VideoCard/VideoCard';
import './VideoList.css';

export const VideoList = () => {
  const { filteredData } = useFilter();
  const { setShowPlaylistModal } = useData();

  const clickHandler = (e, video, id, setShowModal) => {
    switch (id) {
      case 1: {
        console.log('hello');
        break;
      }
      case 2: {
        console.log('heY');
        setShowPlaylistModal(true);
        break;
      }
      case 3: {
        console.log('3rd');
        break;
      }
      default:
        break;
    }
  };
  const VIDEO_CARD_HOME_MENU = [
    {
      id: 1,
      clickHandler: clickHandler,
      icon: <span className='material-icons-outlined'>watch_later</span>,
      text: 'Save to Watch Later',
    },
    {
      id: 2,
      clickHandler,
      icon: <span className='material-icons-outlined'>playlist_play</span>,
      text: 'Save to Playlist',
    },
    {
      id: 3,
      clickHandler,
      icon: <span className='material-icons-outlined'>share</span>,
      text: 'Share',
    },
  ];

  return (
    <>
      {/* <PlayListModal /> */}
      <ChipsContainer />
      <div className='video-list-container'>
        {filteredData.length > 0 &&
          filteredData.map((el) => {
            return (
              <VideoCard
                video={el}
                key={el._id}
                menuItems={VIDEO_CARD_HOME_MENU}
                type={'videos'}
              />
            );
          })}
      </div>
    </>
  );
};
