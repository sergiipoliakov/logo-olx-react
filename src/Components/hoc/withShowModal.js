import React from 'react';
import ShowModal from '../../context/ShowModal/ShowModal';

const withShowModal = WrappedComponent => {
  return function WithShowModalContext(props) {
    return (
      <ShowModal.Consumer>
        {ctx => <WrappedComponent {...props} value={ctx} />}
      </ShowModal.Consumer>
    );
  };
};

export default withShowModal;
