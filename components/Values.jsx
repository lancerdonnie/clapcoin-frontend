import React from 'react';

export const Values = ({ title, body }) => {
  return (
    <li className="p-4">
      <div className="text-xl">{title}</div>
      <div className="mt-2 w-96">{body}</div>
    </li>
  );
};
