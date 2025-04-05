import type {ReactNode} from 'react';

interface TextBlockProps {
  readonly children: ReactNode;
}

export function TextBlock({children}: TextBlockProps) {
  return <p>{children}</p>;
}
