import "../styles/global.scss";


export const metadata = {
  title: "mds-tips",
  description: "mds-tips",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
