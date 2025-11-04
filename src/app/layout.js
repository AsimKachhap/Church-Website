import "./globals.css";

export const metadata = {
  title: "St. Mary's Assumption Church ",
  description:
    "St. Mary's Assumption Church is a Roman Catholic Church located in Mariam Nagar Ghaziabad, Uttar Pradesh.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
