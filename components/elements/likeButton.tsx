'use client';

import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

type LikeButtonProps = {
  handleClick: () => void;
};

export default function LikeButton({ handleClick }: Readonly<LikeButtonProps>) {
  const [isLiked, setIsLiked] = useState(false);

  // Définition des variantes pour l'animation de "blob"
  const variants = {
    open: { scale: [1, 3], opacity: [1, 0] },
    closed: { opacity: 0 }
  };

  return (
    <motion.button
      onClick={() => {
        setIsLiked(!isLiked);
        handleClick(); // Exécute la fonction passée en prop
      }}
      className='flex items-center gap-2 p-2 rounded-md hover:bg-slate-100'
    >
      <div className='relative flex justify-center items-center w-4 h-full'>
        {/* Icône de coeur */}
        <Heart
          size={18}
          color={isLiked ? '#FF0000' : '#000000'}
          fill={isLiked ? '#FF0000' : 'none'}
        />

        {/* Cercle rouge qui s'agrandit et disparaît */}
        <motion.div
          className='absolute w-4 h-4 bg-red-300 rounded-full z-10'
          variants={variants}
          initial='closed'
          animate={isLiked ? 'open' : 'closed'}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        ></motion.div>
      </div>

      <u className='text-gray-800 text-sm font-medium'>Enregistrer</u>
    </motion.button>
  );
}
