import React, { useState } from 'react';

function Profile({ name, age }) {
  const [likes, setLikes] = useState(0);

  return (
    <div style={{ border: '1px solid gray', padding: '1rem' }}>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Likes:</strong> {likes}</p>
      <button onClick={() => setLikes(likes + 1)}>Like</button>
    </div>
  );
}

export default Profile;
