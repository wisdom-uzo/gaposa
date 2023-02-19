import { Footer, Navbar } from '../components';
import { Hero } from '../sections';
import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>
    <body >
    <Navbar />
      {children}
    <Footer />
    </body>
  </html>
);

export default RootLayout;
