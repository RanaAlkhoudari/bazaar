import React from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { FaRegEye } from 'react-icons/fa';

const Notifications = ({ refreshMyAccount, notifications }) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const deleteNotifyButton = async (e) => {
    const notificationId = e.target.id;
    try {
      await axios.delete(`http://localhost:3000/api/v1/notifications/${notificationId}`);
      refreshMyAccount();
    } catch (error) {
      console.error(`Error ${error}`);
    }
  };
  const readNotifyButton = async (e) => {
    const notificationId = e.target.id;
    try {
      await axios.patch(`http://localhost:3000/api/v1/notifications/${notificationId}`);
      refreshMyAccount();
      e.target.hidden = true;
    } catch (error) {
      console.error(`Error ${error}`);
    }
  };
  if (notifications) {
    const notificationsItems = notifications.map((notification) => {
      const date = new Date(notification.createdAt);
      const variant = notification.seen ? 'success' : 'warning';

      return (
        <div key={notification._id} style={{ marginTop: '1em' }}>
          <Alert variant={variant}>
            <Alert.Heading>{notification.type}</Alert.Heading>
            <p>{notification.text}</p>
            <p>
              Created: {date.getDate()}-{monthNames[date.getMonth()]}-{date.getFullYear()}
            </p>
            <hr />
            <div className="d-flex justify-content-end">
              {!notification.seen ? (
                <Button
                  id={notification._id}
                  onClick={(e) => readNotifyButton(e)}
                  variant="outline-success"
                >
                  Set as Seen!
                </Button>
              ) : (
                <>
                  <FaRegEye
                    size="1.5em"
                    color="green"
                    style={{ marginRight: '2rem', marginTop: '0.5rem' }}
                  />
                </>
              )}

              <span>&nbsp;</span>
              <Button
                id={notification._id}
                onClick={(e) => deleteNotifyButton(e)}
                variant="outline-danger"
              >
                Delete!
              </Button>
            </div>
          </Alert>
        </div>
      );
    });
    return notificationsItems;
  }
  return (
    <div style={{ paddingTop: '1em', paddingBottom: '1em' }}>
      {notifications && notificationsItems}
    </div>
  );
};

export default Notifications;
