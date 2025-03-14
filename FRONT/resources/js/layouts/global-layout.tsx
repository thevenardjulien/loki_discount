import Navbar from "@/components/navbar";

export default function GlobalLayout({ children }: { children: React.ReactNode }) {
    return (

        <>
            <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                <Navbar />
            </header>
            <div className="min-h-screen flex flex-col bg-[#FDFDFC] text-[#1b1b18]lg:bg-[#0a0a0a]">
                <main className="flex-1 overflow-hidden p-4 flex flex-col gap-4">{children}</main>
            </div></>
    );
}