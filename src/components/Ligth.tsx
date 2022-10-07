import type { Component } from 'solid-js';

type Props = {
  data: string;
};

export const Ligth: Component<Props> = ({ data }) => {
  return <article>{data}</article>;
};
