// @flow
import React from 'react';
import { Modal } from 'modal/modal';
import Card from 'component/common/card';

type Props = {
  closeModal: () => void,
};

export default function ModalPurchaseCredits(props: Props) {
  const { closeModal } = props;
  // window.open(
  //   'https://buy-staging.moonpay.io?apiKey=pk_test_123&currencyCode=LBC&colorCode=%23257761',
  //   'Purchase LBC',
  //   'height=600,width=800'
  // );
  return (
    <Modal isOpen contentLabel={'Purchase LBRY Credits'} type="card" onAborted={closeModal}>
      <Card
        body={
          <iframe
            allow="accelerometer; autoplay; camera; gyroscope; payment"
            frameBorder="0"
            height="350px"
            src="https://buy-staging.moonpay.io?apiKey=pk_test_123&colorCode=%23123123&currencyCode=btc"
            width="100%"
          >
            <p>Your browser does not support iframes.</p>
          </iframe>
        }
      />
    </Modal>
  );
}
