import { type ReactNode } from 'react';

interface TextColumnProps {
  children: ReactNode;
  className?: string;
}

export default function TextColumn({ children, className = '' }: TextColumnProps) {
  return (
    <div className={`text-column ${className}`.trim()}>
      {children}
    </div>
  );
}
