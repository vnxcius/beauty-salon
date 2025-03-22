import SignInForm from "@/components/signin-form";
import DashExample from "@/components/ui/dash-example";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex h-screen bg-neutral-200">
      <DashExample />
      <div className="z-10 mx-auto flex w-fit flex-1 items-center bg-white shadow-lg">
        <div className="mx-auto max-w-sm flex-1">
          <Image
            src="/logo.svg"
            className="my-10 min-w-64"
            alt="Logo"
            width={200}
            height={200}
          />
          <h1 className="w-max text-3xl font-bold">Bem-vindo(a) de volta!</h1>
          <p className="text-md my-1.5 mb-10 font-medium text-neutral-700">
            Para continuar, insira suas credenciais
          </p>
          <SignInForm />
        </div>
      </div>
    </div>
  );
}
