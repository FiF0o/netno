/**
 * Created by jonlazarini on 12/08/16.
 */

const React = require('react');

module.exports = class Home extends React.Component {
  render() {
    return (
      <div>
          <h2 className='text-center'>
           {this.props.title}
            Search section here
          </h2>
        </div>
    );
  }
};
