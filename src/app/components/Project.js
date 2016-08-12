/**
 * Created by jonlazarini on 12/08/16.
 */

import React from 'react';

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    console.log('PROJECT: this:', this);
    return (
      <div>
        Project placeholder here
      </div>
    );
  }
};
