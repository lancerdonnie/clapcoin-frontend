import React from 'react';

export const Values = ({ title, body }) => {
  return (
    <li className="p-4 md:text-center">
      <div className="text-xl">{title}</div>
      <div className="mt-2 w-96 md:w-full">{body}</div>
    </li>
  );
};
