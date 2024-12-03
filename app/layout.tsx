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
      <body className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        <main>
          <header className="flex justify-center p-4 lg:px-6">
            <div className="flex-none text-sm font-medium uppercase">
              Next Tech Challange
            </div>
          </header>
          <main className="container mx-auto p-4">{children}</main>
          <footer className="  py-4 mt-8 text-center">
            <p>
              &copy; {new Date().getFullYear()} Hairus. All rights reserved.
            </p>
          </footer>
        </main>
      </body>
    </html>
  );
}
