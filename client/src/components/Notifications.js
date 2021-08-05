import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

const Notifications = ({ notifications }) => {
  const [show, setShow] = useState(true);
  if (notifications) {
    const notificationsItems = notifications.map((notification) => {
      const date = new Date(notification.createdAt);

      return (
        <div key={notification.id} style={{ marginTop: '1em' }}>
          <Alert variant="info" onClose={() => setShow(false)} dismissible>
            <span style={{ fontWeight: 'bold' }}>{notification.type} :</span> {notification.text}{' '}
            {date.getDate()}-{date.getMonth()}-{date.getFullYear()}
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
