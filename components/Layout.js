import Head from "next/head";

export default function Layout({ children, title = "Default title" }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-mono text-white bg-gray-800">
      <Head>
        <title>{title}</title>
      </Head>
      <main className="flex flex-col items-center justify-center flex-1 w-screen">
        {children}
      </main>
      <footer className="flex items-center justify-center w-full text-sm text-gray-500">
        © 2021 nazeudon
      </footer>
    </div>
  );
}
