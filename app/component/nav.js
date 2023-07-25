import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const NavRedirect = async () => {
  const session = await getServerSession(authOptions);
  return session || null;
};

export default NavRedirect;
