import { ButtonHTMLAttributes } from 'react';

export function BtnCircle({ className = '', ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`w-10 h-10 rounded-full bg-gray-800 flex justify-center items-center ${className}`}
      {...props}
    />
  );
}
