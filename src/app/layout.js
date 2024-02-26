import Theme from './components/Theme'
import "../styles/global.scss";



export const metadata = {
  title: "mds-tips",
  description: "mds-tips",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Theme>
          <body className='wrapper'>{children}</body>
        </Theme>
    </html>
  );
}
