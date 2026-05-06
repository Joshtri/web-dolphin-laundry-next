import {routing} from '@/i18n/routing';
import {ReactNode} from 'react';
import './globals.css';
import '../public/assets/css/bubble.css';
import '../public/assets/css/clock.css';

type Props = {
  children: ReactNode;
};

// Since we have a root `not-found.tsx` page, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({children}: Props) {
  return children;
}
