import React from 'react';
import { Metadata } from 'next';
import { GamesPortal } from '@/components/GamesPortal';

export const metadata: Metadata = {
  title: 'Free Online Mini Games Arcade — VictorMedia',
  description: 'Play free 3D and 2D browser mini-games directly in your browser. Asteroid Dodge, Neon Snake, Tic-Tac-Toe AI, Speed Typing, and more.',
};

export default function GamesPage() {
  return <GamesPortal />;
}
