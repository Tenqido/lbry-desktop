// @flow
import React from 'react';
import { Modal } from 'modal/modal';
import SupportsLiquidate from 'component/supportsLiquidate';

type Props = {
  closeModal: () => void,
};

export default function ModalSupportsLiquidate(props: Props) {
  const { closeModal } = props;

  return (
    <Modal isOpen contentLabel={'Unlock Tips'} type="card" confirmButtonLabel="done" onAborted={closeModal}></Modal>
  );
}
