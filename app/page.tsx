"use client";
import { usePrivy } from "@privy-io/react-auth";
import { useAccount } from "wagmi";

export default function Home() {
  const { login, user, logout } = usePrivy();
  const { isConnected, address } = useAccount();
  return (
    <main className="flex min-h-screen min-w-full bg-white">
      <div className="flex bg-privy-light-blue flex-1 p-6 justify-center items-center">
        <div>
          <div className="mt-6 flex justify-center text-center">
            {!isConnected ? (
              <button
                className="bg-violet-600 hover:bg-violet-700 py-3 px-6 text-white rounded-lg"
                onClick={login}
              >
                Log in
              </button>
            ) : (
              <div>
                <div className="mt-4 text-black">
                  <span>Welcome back, {address}!</span>
                </div>
                <button
                  className="bg-violet-600 hover:bg-violet-700 py-3 px-6 text-white rounded-lg"
                  onClick={logout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
