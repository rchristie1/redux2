import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../store/actions';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Search from '../components/search';
import Artistlist from '../components/artistlist';

class HomeContainer extends Component {

  static propTypes = {
    allArtists: PropTypes.func.isRequired,
    updateArtists: PropTypes.func.isRequired,
    artists: PropTypes.object.isRequired,
  }

  state = {
    artists: [],
  };

  componentDidMount() {
    this.props.allArtists();
  }

  getKeywords = event => {
    const key = event.target.value;
    this.props.updateArtists(key);
  };

  render() {
    return (
      <div>
        <Search keywords={this.getKeywords} />
        {this.props.artists.artistList ? <Artistlist artists={this.props.artists.artistList} /> : null}
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
  return bindActionCreators({ allArtists: actions.artistListAll, updateArtists: actions.artistList }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
