'use client';

import toast from 'react-hot-toast';
import LikeButton from '../elements/likeButton';
import { addFavorite } from '@/app/actions';
import { useSession } from 'next-auth/react';

export default function SpaceLikeButton({
  spaceId
}: Readonly<{ spaceId: string }>) {
  const { data } = useSession();
  const handleAddToFavorite = async () => {
    try {
      console.log(data);
      if (!data?.user?.id) return;
      debugger;
      await addFavorite(spaceId, data?.user.id);
      toast.success('Réservation annulée!');
    } catch (error) {
      toast.error('Une erreur est survenue');
    }
  };
  return <LikeButton handleClick={handleAddToFavorite} />;
}
