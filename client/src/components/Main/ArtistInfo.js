import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import PeopleAlt from '@material-ui/icons/PeopleAlt';
import Person from '@material-ui/icons/Person';
import MusicNote from '@material-ui/icons/MusicNote';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ArtistInfo = ({artist}) => (
  <>
    <div className='artistWrapper'>
      <div className='artist__column'>
        <Avatar alt="Remy Sharp" src={artist.artistInfo.avatar_url} className={'bigAvatar'}/>
        <p>{artist.artistInfo.username}</p>
      </div>
      <div className='artist__column'>
        <PeopleAlt className='icon'/>
        <p>{artist.artistInfo.followers_count} Followers</p>
      </div>
      <div className='artist__column'>
        <Person className='icon'/>
        <p>{artist.artistInfo.followings_count} Following</p>
      </div>
      <div className='artist__column'>
        <MusicNote className='icon'/>
        <p>{artist.artistInfo.track_count} Songs</p>
      </div>
    </div>
    <div>
      {artist.songs.map((song, index) => (
        <ExpansionPanel key={index}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p><i>{song.title}</i></p>
            <p><i>{song.description}</i></p>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{display: 'block'}}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
              <div>
                <p>track play count: <i>{song.playback_count || 'N/A'}</i></p>
                <p>track favoriting count: <i>{song.favoritings_count || 'N/A'}</i></p>
                <p>track comment count: <i>{song.comment_count || 'N/A'}</i></p>
                <p>URL to the SoundCloud.com page: <i>{song.permalink_url || 'N/A'}</i></p>
                <p>downloadable: <i>{song.downloadable ? 'Yes' : 'No'}</i></p>
                <p>external purchase link: <i>{song.purchase_url || 'N/A'}</i></p>
              </div>
              <div>
                <p>id of the label user: <i>{song.label_id || 'N/A'}</i></p>
                <p>label name: <i>{song.label_name || 'N/A'}</i></p>
                <p>release number: <i>{song.release || 'N/A'}</i></p>
                <p>month of the release: <i>{song.release_month || 'N/A'}</i></p>
              </div>
              <div>
                <p>genre: <i>{song.genre || 'N/A'}</i></p>
                <p>track type: <i>{song.track_type || 'N/A'}</i></p>
                <p>beats per minute: <i>{song.bpm || 'N/A'}</i></p>
                <p>duration in milliseconds: <i>{song.duration || 'N/A'}</i></p>
              </div>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>)
      )}
    </div>
  </>
);

export default ArtistInfo;

