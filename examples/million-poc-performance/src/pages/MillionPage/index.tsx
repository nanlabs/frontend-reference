import React from 'react';
import { Outlet } from 'react-router';
import './styles.css';

const links = [
  { href: '/react', text: 'react ⚛️' },
  { href: '/million', text: 'million 🦁' },
  { href: '/million/1', text: 'million example 1 🦁' },
  { href: '/million/2/only-root-block', text: 'million example 2 only root block 🦁' },
  { href: '/million/2/root-block-and-map-blocks', text: 'million example 2 root block and map blocks 🦁' },
  { href: '/million/2/root-block-for-without-block', text: 'million example 2 root block only for 🦁' },
  { href: '/million/3', text: 'million example 3 🦁' },
  { href: '/million/4', text: 'million example 4 🦁' },
];

//million-ignore
const MillionPage = () => {
  return (
    <div className="root-million-page">
      <h1>MillionPage 🦁</h1>
      <p>
        The Virtual DOM Replacement for React. Gain big performance wins for UI and data heavy React apps. Dead simple
        to use – try it out today with just a <a href="https://million.dev/">block()</a>
      </p>
      <div>
        {links.map(({ href, text }) => (
          <a key={href} href={href}>
            {text}
          </a>
        ))}
      </div>
      <hr />
      <Outlet />
    </div>
  );
};

export default MillionPage;
