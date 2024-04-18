import React from 'react';
import v1 from '/home/soham/SE Projects 3/test3/with_phone/client/src/video/v1.mp4';

const ChatPage = () => {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <video 
        className='videoTag' 
        autoPlay 
        loop 
        muted
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      >
        <source src={v1} type='video/mp4' />
      </video>
    </div>
  );
};

export default ChatPage;
