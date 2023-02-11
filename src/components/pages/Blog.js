import React from 'react';
import Download from '../../test.txt';

export default function Blog() {
  return (
    <div>
      <h1>Blog Page</h1>
      <p>
        Insert resume here
      </p>
<a href={Download} download>Download Resume</a>
    </div>
  );
}
