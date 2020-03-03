import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import '../index.css';

const ComponentWithLoading = (Component) => ({ isLoading, ...props }) => {
  if (!isLoading) {
    return (
      <Component {...props} />
    );
  }
  return (
    <Loader
      type="ThreeDots"
      color="#00407f"
      height={100}
      width={100}
      className="loader"
    />
  );
};
export default ComponentWithLoading;
