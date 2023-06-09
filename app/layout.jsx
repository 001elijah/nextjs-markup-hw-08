'use client';

import '@styles/globals.css';

import { createContext, useContext } from 'react';
import Head from 'next/head';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { useState } from 'react';
import ModalWindow from '@components/ModalWindow.jsx';
import clsx from 'clsx';

// export const metadata = {
//     title: "Studio",
//     description: "Effective business solutions"
// }

const AppContext = createContext();

const RootLayout = ({ children }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [current, setCurrent] = useState();
    const toggleModal = () => {
        if (!showModal) {
            setShowModal(true);
            return;
        }
        setShowModal(false);
    }
    const props = {
        toggleModal
    }
  return (
      <html lang="uk">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@700&family=Roboto:wght@400;500;700;900&family=Unbounded:wght@500&display=swap" rel="stylesheet" />
            </Head>
          <body className={clsx((showMenu || showModal) && "no-scroll")}>
              {/* <div className='main'>
                  <div className='background'/>
              </div> */}
              <Header showMenu={showMenu} setShowMenu={setShowMenu} />
              <main className='page'>
                <AppContext.Provider value={props}>
                    {children}
                </AppContext.Provider>
              </main>
              <Footer />
              <ModalWindow showModal={showModal} setShowModal={setShowModal} toggleModal={toggleModal} />
          </body>
      </html>
  )
}

export function useAppContext() {
  return useContext(AppContext);
}

export default RootLayout