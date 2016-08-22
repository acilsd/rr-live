import React, { Component, PropTypes } from 'react';

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.props.getPhotos(+e.target.textContent);
  }
  render() {
    const { year, photos, fetching, error } = this.props;
    const years = [2016,2015,2014,2013,2012,2011,2010];

    return (
      <div class="ib page">
        <p>
          {
            years.map((item, index) => {
              <button class="btn" key={index} onClick={this.handleClick}>{item}</button>;
            })
          }
        </p>
        <h3>{year} Year [{photos.length}]</h3>
        {
          error
          ?
            <p class="error">Something gone wrong and i dunno why...</p>
          :
          null
        }
        {
          fetching ?
            <p>Loading...</p>
          :
          photos.map((entry, index) => {
            <div class="photo" key={index}>
              <p><img src={entry.src}/></p>
              <p>{entry.likes.count}likes</p>
            </div>;
          })
        }
      </div>
    );
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};
