import Cookie from "universal-cookie";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../components/Layout";

const cookie = new Cookie();

export default function MainPage() {
  const router = useRouter();

  const logout = () => {
    cookie.remove("access_token");
    router.push("/");
  };

  return (
    <Layout title="Main page">
      <div className="mb-10">
        <Link href="/blog-page">
          <a className="px-4 py-12 mr-8 text-white bg-indigo-500 rounded hover:bg-indigo-600">
            Visit Blog by SSG + ISR
          </a>
        </Link>
        <Link href="/task-page">
          <a className="px-4 py-12 mr-8 text-white bg-gray-500 rounded hover:bg-gray-600">
            Visit Task by ISR + CRS
          </a>
        </Link>
      </div>
      <svg
        onClick={logout}
        className="w-6 h-6 mt-10 cursor-pointer"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        ></path>
      </svg>
    </Layout>
  );
}
