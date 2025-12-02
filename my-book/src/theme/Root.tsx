
// my-book/src/theme/Root.tsx
import React from 'react';
import { AuthProvider } from '../../context/AuthContext'; // Adjust path

// Default implementation, that you can customize
// See https://docusaurus.io/docs/api/theme/root

function Root({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default Root;
