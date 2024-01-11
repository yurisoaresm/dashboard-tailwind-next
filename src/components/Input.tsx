import { ComponentProps } from 'react';

type PrefixProps = ComponentProps<'div'>;
type ControlProps = ComponentProps<'input'>;
type RootProps = ComponentProps<'div'>;

export function Prefix(props: PrefixProps) {
  return <div {...props} />;
}

export function Control(props: ControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
      {...props}
    />
  );
}

export function Root(props: RootProps) {
  return (
    <div
      className="flex w-full  items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  );
}
