import Image from 'next/image';
import type { ReactNode } from 'react';
import OperationalField from '@/components/graphics/OperationalField';

type HeroGateFrameProps = {
  children: ReactNode;
};

export default function HeroGateFrame({ children }: HeroGateFrameProps) {
  return (
    <div className="visual-hero-gate-stack">
      <div className="visual-hero-section__atmosphere" aria-hidden>
        <Image
          src="/photos/sentinel-costa-blanca-entry-hero.png"
          alt=""
          fill
          sizes="100vw"
          className="visual-hero-section__atmosphere-image object-cover"
          priority
        />
      </div>

      <div className="visual-hero-shell">
        <OperationalField variant="gate" />
        {children}
      </div>
    </div>
  );
}
