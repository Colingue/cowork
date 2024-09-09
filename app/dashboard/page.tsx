import { auth } from '@/auth';
export default async function Dashboard() {
  const session = await auth();

  if (session) {
    return (
      <div>
        <p>{JSON.stringify(session)}</p>
      </div>
    );
  }
}
