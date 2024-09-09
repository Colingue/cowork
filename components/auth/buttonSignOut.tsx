'use client';

import { signOut } from 'next-auth/react';

export default function ButtonSignOut({ ...props }) {
  return (
    <button
      onClick={async () => {
        await signOut();
      }}
      {...props}
    >
      Se déconnecter
    </button>
  );
}
