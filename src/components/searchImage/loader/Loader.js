import React from 'react';
import Loader from 'react-loader-spinner';

const styleLoader = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  zIndex: '100000',
};
export default class App extends React.Component {
  render() {
    return (
      <div style={styleLoader}>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    );
  }
}
