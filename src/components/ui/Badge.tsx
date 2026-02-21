import React from 'react';

interface BadgeProps {
  label: string;
  variant?: 'type' | 'weakness' | 'resistant' | 'default';
}

const typeColorMap: Record<string, string> = {
  Grass: 'bg-green-100 text-green-800 border-green-200',
  Fire: 'bg-red-100 text-red-800 border-red-200',
  Water: 'bg-blue-100 text-blue-800 border-blue-200',
  Electric: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  Psychic: 'bg-pink-100 text-pink-800 border-pink-200',
  Ice: 'bg-cyan-100 text-cyan-800 border-cyan-200',
  Dragon: 'bg-indigo-100 text-indigo-800 border-indigo-200',
  Dark: 'bg-gray-800 text-gray-100 border-gray-700',
  Fairy: 'bg-pink-200 text-pink-900 border-pink-300',
  Normal: 'bg-gray-100 text-gray-800 border-gray-200',
  Fighting: 'bg-orange-100 text-orange-800 border-orange-200',
  Poison: 'bg-purple-100 text-purple-800 border-purple-200',
  Ground: 'bg-yellow-200 text-yellow-900 border-yellow-300',
  Rock: 'bg-stone-100 text-stone-800 border-stone-200',
  Bug: 'bg-lime-100 text-lime-800 border-lime-200',
  Ghost: 'bg-violet-100 text-violet-800 border-violet-200',
  Steel: 'bg-slate-100 text-slate-800 border-slate-200',
  Flying: 'bg-sky-100 text-sky-800 border-sky-200',
};

export function Badge({ label, variant = 'default' }: BadgeProps) {
  const colorClass =
    variant === 'type'
      ? (typeColorMap[label] ?? 'bg-gray-100 text-gray-800 border-gray-200')
      : variant === 'weakness'
      ? 'bg-red-50 text-red-700 border-red-200'
      : variant === 'resistant'
      ? 'bg-green-50 text-green-700 border-green-200'
      : 'bg-gray-100 text-gray-700 border-gray-200';

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${colorClass}`}
    >
      {label}
    </span>
  );
}
