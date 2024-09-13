import { auth } from '@/auth';
import RedirectToLogin from '@/components/auth/redirectToLogin';

export default async function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (!session?.user?.id) {
    return <RedirectToLogin />;
  }

  return children;
}
