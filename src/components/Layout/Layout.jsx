
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import Loader from '../Loader/Loader';
import Navigation from '../Navigation/Navigation';

export default function Layout() {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <Navigation />
      </header>
      <main className={css.main}>
        <Suspense fallback={<Loader />}>
          <Outlet /> {/* Render the matched child route */}
        </Suspense>
      </main>
    </div>
  );
}
