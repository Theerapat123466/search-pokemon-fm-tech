import React, { useMemo } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import type { Attack } from '@/types/pokemon';

interface AttackListProps {
  fast: Attack[];
  special: Attack[];
}

function AttackRow({ attack }: { attack: Attack }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-800">{attack.name}</span>
        <Badge label={attack.type} variant="type" />
      </div>
      <span className="text-sm font-semibold text-gray-700">{attack.damage} dmg</span>
    </div>
  );
}

export function AttackList({ fast, special }: AttackListProps) {
  const sortedFast = useMemo(() => [...fast].sort((a, b) => b.damage - a.damage), [fast]);
  const sortedSpecial = useMemo(() => [...special].sort((a, b) => b.damage - a.damage), [special]);

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Card title={`Fast Attacks (${fast.length})`}>
        {sortedFast.length > 0 ? (
          <div>
            {sortedFast.map((attack) => (
              <AttackRow key={attack.name} attack={attack} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-400">No fast attacks.</p>
        )}
      </Card>
      <Card title={`Special Attacks (${special.length})`}>
        {sortedSpecial.length > 0 ? (
          <div>
            {sortedSpecial.map((attack) => (
              <AttackRow key={attack.name} attack={attack} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-400">No special attacks.</p>
        )}
      </Card>
    </div>
  );
}
