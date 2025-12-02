import React, { ReactNode } from 'react';
import ChatBot from '../components/ChatBot';
import { JSX } from 'react/jsx-runtime';

// Props Interface
interface RootProps {
  children: ReactNode;
}

export default function Root({ children }: RootProps): JSX.Element {
  return (
    <>
      {children}
      <ChatBot />
    </>
  );
}