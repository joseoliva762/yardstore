import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Auth() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/auth/login');
  });

  return (
    <>
      <div>Auth</div>
    </>
  );
}
