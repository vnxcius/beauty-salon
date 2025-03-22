"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  CalendarDays,
  ChartNoAxesCombined,
  ChartSpline,
  CircleDollarSign,
  Package2,
  PanelRightOpen,
  Receipt,
  Settings,
  Shapes,
  Store,
  UsersRound,
} from "lucide-react";

export default function DashExample() {
  return (
    <div className="relative hidden flex-1 lg:block">
      <div
        className={cn(
          "absolute right-0 bottom-0 h-11/12 w-11/12 bg-neutral-50",
          "flex rounded-tl-3xl shadow",
        )}
      >
        <div className="flex flex-col justify-between border-r border-neutral-200 p-6">
          <div>
            <Image
              src="/icon.svg"
              className="mb-6 w-9"
              alt="Example logo"
              draggable={false}
              width={200}
              height={200}
            />
            <ul className="space-y-1">
              <li>
                <button
                  className={cn(
                    "cursor-pointer rounded-lg bg-neutral-200/80 p-2",
                    "transition-colors hover:bg-neutral-200",
                  )}
                >
                  <Store className="size-5" />
                </button>
              </li>
              <li>
                <button
                  className={cn(
                    "cursor-pointer rounded-lg p-2 transition-colors",
                    "hover:bg-neutral-200/80",
                  )}
                >
                  <UsersRound className="size-5" />
                </button>
              </li>
              <li>
                <button
                  className={cn(
                    "cursor-pointer rounded-lg p-2 transition-colors",
                    "hover:bg-neutral-200/80",
                  )}
                >
                  <CircleDollarSign className="size-5" />
                </button>
              </li>
            </ul>
          </div>

          <div>
            <Image
              src="/woman.jpg"
              className="w-9 rounded-full"
              alt="Example logo"
              draggable={false}
              width={200}
              height={200}
            />
            <button className="mt-4 cursor-pointer rounded-lg p-2 hover:bg-neutral-100">
              <Settings className="size-5" />
            </button>
          </div>
        </div>
        <div className="flex h-full flex-col space-y-1 border-r border-neutral-200 px-4 py-6">
          <p className="mb-1.5 text-xs font-semibold text-neutral-600">
            Meu Negócio
          </p>
          <button
            className={cn(
              "flex items-center gap-2 text-sm font-semibold text-neutral-800",
              "w-56 cursor-pointer rounded-md bg-neutral-200/60 py-2 pl-3",
              "transition-colors hover:bg-neutral-200/80",
            )}
          >
            <ChartSpline className="size-4" strokeWidth={2.5} />
            Analytics
          </button>
          <button
            className={cn(
              "flex items-center gap-2 text-sm font-medium text-neutral-800",
              "w-56 cursor-pointer rounded-md py-2 pl-3",
              "transition-colors hover:bg-neutral-200/80",
            )}
          >
            <Shapes className="size-4" />
            Serviços
          </button>
          <button
            className={cn(
              "flex items-center gap-2 text-sm font-medium text-neutral-800",
              "w-56 cursor-pointer rounded-md py-2 pl-3",
              "transition-colors hover:bg-neutral-200/80",
            )}
          >
            <Package2 className="size-4" />
            Produtos
          </button>
          <button
            className={cn(
              "flex items-center gap-2 text-sm font-medium text-neutral-800",
              "w-56 cursor-pointer rounded-md py-2 pl-3",
              "transition-colors hover:bg-neutral-200/80",
            )}
          >
            <CalendarDays className="size-4" />
            Agendamentos
          </button>

          <p className="mt-5 mb-1.5 text-xs font-semibold text-neutral-600">
            Financeiro
          </p>

          <button
            className={cn(
              "flex items-center gap-2 text-sm font-medium text-neutral-800",
              "w-56 cursor-pointer rounded-md py-2 pl-3",
              "transition-colors hover:bg-neutral-200/80",
            )}
          >
            <ChartNoAxesCombined className="size-4" />
            Painel
          </button>
          <button
            className={cn(
              "flex items-center gap-2 text-sm font-medium text-neutral-800",
              "w-56 cursor-pointer rounded-md py-2 pl-3",
              "transition-colors hover:bg-neutral-200/80",
            )}
          >
            <Receipt className="size-4" />
            Comandas
          </button>

          <PanelRightOpen
            className={cn(
              "mt-auto size-6 cursor-pointer self-end p-0.5 text-neutral-700",
              "rounded-md transition-colors hover:bg-neutral-200/80",
            )}
          />
        </div>
        <div className="p-6">b</div>
      </div>
    </div>
  );
}
