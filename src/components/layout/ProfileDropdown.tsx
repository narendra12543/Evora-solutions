"use client";

import Link from "next/link";
import { useState } from "react";

import { Role } from "@prisma/client";
import { logoutUser } from "@/actions/auth/logout";

interface ProfileDropdownProps {
  user: {
    id: string;
    name?: string | null;
    email?: string | null;
    role: Role;
  } | null;
}

export default function ProfileDropdown({
  user,
}: ProfileDropdownProps) {
  const [open, setOpen] = useState(false);

  const initial =
    user?.name?.charAt(0)?.toUpperCase() ?? "G";

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#071530] font-semibold text-white transition hover:bg-[#163A68]"
      >
        {initial}
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-3 w-64 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
          {/* Guest Menu */}
          {!user && (
            <div className="p-2">
              <Link
                href="/login"
                className="block rounded-lg px-3 py-2 text-sm font-medium text-[#071530] transition hover:bg-[#F8FAFC] hover:text-[#0865D8]"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="block rounded-lg px-3 py-2 text-sm font-medium text-[#071530] transition hover:bg-[#F8FAFC] hover:text-[#0865D8]"
              >
                Register
              </Link>
            </div>
          )}

          {/* Authenticated Menu */}
          {user && (
            <>
              <div className="border-b border-slate-200 px-4 py-3">
                <p className="font-semibold text-[#071530]">
                  {user.name}
                </p>

                <p className="mt-1 text-xs text-slate-600">
                  {user.email}
                </p>
              </div>

              <div className="p-2">
                {user.role === Role.ADMIN && (
                  <Link
                    href="/admin"
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-[#071530] transition hover:bg-[#F8FAFC] hover:text-[#0865D8]"
                  >
                    Admin Dashboard
                  </Link>
                )}

                

                <Link
                  href="/dashboard/enquiries"
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-[#071530] transition hover:bg-[#F8FAFC] hover:text-[#0865D8]"
                >
                  My Enquiries
                </Link>

                <Link
                  href="/dashboard/downloads"
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-[#071530] transition hover:bg-[#F8FAFC] hover:text-[#0865D8]"
                >
                  My Downloads
                </Link>

                <div className="my-2 border-t border-slate-200" />

                <form action={logoutUser}>
                  <button
                    type="submit"
                    className="w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-red-600 transition hover:bg-red-50"
                  >
                    Logout
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}