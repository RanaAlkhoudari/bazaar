import React from 'react';
import { FiFrown } from 'react-icons/fi';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { MdCached } from 'react-icons/md';

const NotifyIcon = ({ product }) => {
  const setIcon = (item) => {
    switch (item) {
      case true:
        return (
          <>
            <span style={{ color: 'green', height: '1em', fontWeight: 'bold' }}>Recommended </span>
            <HiOutlineEmojiHappy size="1.5em" color="green" />
          </>
        );
      case false:
        return (
          <>
            <span style={{ color: 'red', height: '1em', fontWeight: 'bold' }}>
              Not recommended{' '}
            </span>
            <FiFrown size="1.5em" color="red" />
          </>
        );
      case null:
        return (
          <>
            <span style={{ color: 'blue', height: '1em', fontWeight: 'bold' }}>
              Pending to Verify{' '}
            </span>

            <MdCached size="1.5em" color="blue" />
          </>
        );
    }
  };

  return <> {setIcon(product)} </>;
};
export default NotifyIcon;
