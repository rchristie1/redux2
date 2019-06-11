import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { artistDetail, clearArtistDetail } from '../store/actions';
import { bindActionCreators } from 'redux';

import { Link } from 'react-router-dom';

class Artist extends Component {

  static propTypes = {
    clearArtistDetail: PropTypes.func.isRequired,
    artistDetail: PropTypes.func.isRequired,
    artists: PropTypes.object.isRequired,
  }

  UNSAFE_componentWillMount() {    
    this.props.artistDetail(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearArtistDetail();
  }
  

  artistTemplate = data => (    
    data.artistData ? <div className='artist_view'>
      <div
        className='artist_background'
        style={{
          background: `url(/images/${data.artistData[0].cover})`,
        }}
      >
        <Link to='/'>Back home</Link>
        <div className='name'>{data.artistData[0].name}</div>
      </div>
      <div className='artist_description'>
        <p>{data.artistData[0].bio}</p>
        <div className='tags'>
          <div>
            <strong>Style:</strong> {data.artistData[0].style}
          </div>
        </div>
      </div>
      <div className='artist_album_list'>
        {data.artistData[0].albums
          ? data.artistData[0].albums.map(item => (
            <div key={item.cover} className='albums'>
              <div
                className='cover'
                style={{
                  background: `url(/images/albums/${item.cover})`,
                }}
              />
            </div>
          ))
          : null}
      </div>
    </div>
      : null
  );

  render() {    
    return (
      <div>        
        {this.artistTemplate(this.props.artists)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    artists: state.artists,
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ artistDetail, clearArtistDetail}, dispatch );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Artist);
