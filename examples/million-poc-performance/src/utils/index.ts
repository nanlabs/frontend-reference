import { nanoid } from 'nanoid';

export type TreeNodeProps = {
  id: string;
  name: string;
  children: TreeNodeProps[];
};

export const changeColorTone = (color = '#000000', value: number) =>
  '#' +
  (color.slice(1).match(/.{1,2}/g) || [])
    .map((c) => parseInt(c, 16) + (value % 230))
    .map((c) => c.toString(16).padStart(2, '0'))
    .join('');

export const generateRandomArray = (length: number) =>
  Array.from({ length }, (_, index) => ({ value: index + 1, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

export const generateRandomArrayString = (length: number) => Array.from({ length }, nanoid);

export const generateTree = (deep: number): TreeNodeProps => {
  if (!deep) return { id: nanoid(), name: 'leaf', children: [] };
  const id = nanoid();
  return {
    id,
    name: id,
    children: [generateTree(deep - 1), generateTree(deep - 1)],
  };
};

export const shuffle = (node: TreeNodeProps): TreeNodeProps => {
  return {
    ...node,
    children:
      Math.random() * 10 > 5
        ? node.children.map((childNode) => shuffle(childNode)).reverse()
        : node.children.map((childNode) => shuffle(childNode)),
  };
};
