'use client';

import { signIn } from 'next-auth/react';
import Button from '../elements/button';

export default function ButtonSignIn() {
  return (
    <Button
      onClick={async () => {
        await signIn();
      }}
    >
      Sign in
    </Button>
  );
}
