import "@/styles/globals.css";

export const metadata = {
  title: "Next Tech Challange - Hairus",
  description: "Product Optimization",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <header className="border-b-2 border-b-gray-200 py-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">Next Tech Challange</h1>
          </div>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="  py-4 mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Hairus. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
