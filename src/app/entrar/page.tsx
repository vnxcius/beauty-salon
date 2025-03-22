import SignInForm from "@/components/signin-form";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex h-screen bg-neutral-200">
      <div className="relative flex-1">
        <div className={cn(
          "absolute right-0 bottom-0 h-11/12 w-11/12 bg-neutral-50",
          "rounded-tl-3xl shadow flex"
        )}>
          <div className="border-r border-neutral-200 p-6">
            <Image
              src="/icon.svg"
              className="w-9"
              alt="Example logo"
              draggable={false}
              width={200}
              height={200}
            />
          </div>
          <div className="border-r border-neutral-200 py-6 px-4">
            <p className="text-xs font-semibold text-neutral-600">Minha Loja</p>
          </div>
          <div className="p-6">
            b
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-fit flex-1 items-center bg-white">
        <div className="mx-auto max-w-sm flex-1">
          <Image
            src="/logo.svg"
            className="my-10 min-w-64"
            alt="Logo"
            width={200}
            height={200}
          />
          <h1 className="w-max text-3xl font-bold">Bem-vinda de volta!</h1>
          <p className="text-md my-1.5 mb-10 font-medium text-neutral-700">
            Para continuar, insira suas credenciais
          </p>
          <SignInForm />
        </div>
      </div>
    </div>
  );
}
