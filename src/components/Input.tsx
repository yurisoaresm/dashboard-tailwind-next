import { ComponentProps } from 'react';

type InputPrefixProps = ComponentProps<'div'>;
type InputControlProps = ComponentProps<'input'>;
type InputRootProps = ComponentProps<'div'>;

function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />;
}

function InputControl(props: InputControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
      {...props}
    />
  );
}

function InputRoot(props: InputRootProps) {
  return (
    <div
      className="mx-1 flex w-full  items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  );
}

export { InputPrefix, InputControl, InputRoot };
