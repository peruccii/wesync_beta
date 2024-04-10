import { ReactNode } from 'react';

export default function MarginWidthWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col  md:ml-[75px] sm:border-r sm:border-zinc-700 min-h-screen">
      {children}
    </div>
  );
}