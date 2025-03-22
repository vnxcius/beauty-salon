"use client";

import { cn } from "@/lib/utils";
import Input from "./ui/input";
import Label from "./ui/label";
import Link from "next/link";
import GoogleIcon from "./google-icon";

export default function SignInForm() {
  return (
    <>
      <form className="flex flex-col space-y-5">
        <Label name={"email"} htmlFor="email" />
        <Input
          type="email"
          name="email"
          placeholder="email@exemplo.com"
          autoFocus
        />

        <Label name={"senha"} htmlFor="password" />
        <Input type="password" name="password" placeholder="•••••••••••" />

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className={cn(
                "h-4 w-4 rounded border-gray-300 text-violet-600",
                "accent-violet-500 focus:ring-violet-500",
              )}
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-900"
            >
              Permanecer conectado
            </label>
          </div>
          <div className="text-sm">
            <Link
              href={"/esqueci-a-senha"}
              className={cn(
                "font-medium text-violet-600 hover:text-violet-500",
                "hover:underline",
              )}
            >
              Esqueceu sua senha?
            </Link>
          </div>
        </div>

        <button
          type="submit"
          className={cn(
            "rounded-lg bg-violet-600 py-2.5 text-sm font-medium text-white",
            "my-5 cursor-pointer shadow-sm hover:bg-violet-700",
          )}
        >
          Entrar
        </button>
      </form>
      <div className="flex items-center justify-center gap-1 mb-3">
        <p className="text-sm text-neutral-500">
          Não possui uma conta?
        </p>
        <Link
          href="/registrar"
          className={cn(
            "text-sm font-medium text-violet-600 hover:text-violet-500",
            "hover:underline",
          )}
        >
          Crie uma conta
        </Link>
      </div>
      <div className="flex items-center justify-center gap-4 text-neutral-300">
        <hr className="w-full" />
        ou
        <hr className="w-full" />
      </div>

      <button
        className={cn(
          "flex w-full items-center rounded-lg border border-neutral-300 px-4",
          "py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100",
          "my-5 cursor-pointer justify-center shadow-sm",
        )}
      >
        <GoogleIcon />
        <span className="ml-2 font-medium">Entrar com Google</span>
      </button>
    </>
  );
}
