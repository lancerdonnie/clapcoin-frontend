import React from 'react';

export const Input = ({ label, register, name, errors, ...props }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm mb-2">
        {label}
      </label>
      <input
        className="bg-blue-100 focus:outline-nav rounded focus:ring ring-accent-2 px-2 p-1 w-full"
        id={name}
        {...register(name)}
        {...props}
      />
      <div className="text-red-400 text-xs">{errors[name]?.message}</div>
    </div>
  );
};
