/** @jsxImportSource solid-js */

import { Component, createSignal } from 'solid-js';

type Props = {};

export const Counter: Component<Props> = ({}) => {
  const [count, setCount] = createSignal(0);
  const add = () => setCount(count() + 1);
  const subtract = () => setCount(count() - 1);

  return (
    <div class='text-3xl flex justify-around mt-3 items-center'>
      <button type='button' onClick={subtract}>
        -
      </button>
      <pre class='w-12'>{count()}</pre>
      <button type='button' onClick={add}>
        +
      </button>
    </div>
  );
};
