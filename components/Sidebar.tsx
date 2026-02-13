"use client";

import {
    Binary,
    Braces,
    CaseUpper,
    Clock,
    Fingerprint,
    Moon,
    SearchCode,
    Settings2,
    ShieldCheck,
    Sun,
    Type
} from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const Sidebar = () => {
    const router = useRouter();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch by waiting until mounted
    useEffect(() => {
        setMounted(true);
    }, []);

    const links = [
        { title: "Word Counter", link: "/word-counter", icon: <Type size={18} /> },
        { title: "Case Converter", link: "/case-converter", icon: <CaseUpper size={18} /> },
        { title: "Base Converter", link: "/base-converter", icon: <Binary size={18} /> },
        { title: "JSON Formatter", link: "/json-formatter", icon: <Braces size={18} /> },
        { title: "Hash Generator", link: "/hash-generator", icon: <Fingerprint size={18} /> },
        { title: "JWT Decoder", link: "/jwt-decoder", icon: <ShieldCheck size={18} /> },
        { title: "Timestamp Converter", link: "/timestamp-converter", icon: <Clock size={18} /> },
        { title: "Regex Tester", link: "/regex-tester", icon: <SearchCode size={18} /> },
    ];

    return (
        <div className="flex fixed h-screen w-64 flex-col border-r bg-zinc-50/50 dark:bg-zinc-950">
            {/* Header */}
            <div className="flex h-14 items-center border-b px-6 font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                DevTools Kit
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-1 p-4">
                {links.map((link) => (
                    <button
                        onClick={() => router.push(link.link)}
                        key={link.title}
                        className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                    >
                        <span className="text-zinc-500">{link.icon}</span>
                        {link.title}
                    </button>
                ))}
            </nav>

            {/* Footer / User Section */}
            <div className="border-t p-4 flex items-center justify-between gap-2">
                <button className="flex flex-1 items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800">
                    <Settings2 size={18} />
                    Settings
                </button>

                {/* Theme Toggle */}
                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-600 shadow-sm transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-800"
                    aria-label="Toggle theme"
                >
                    {mounted && (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />)}
                </button>
            </div>
        </div>
    );
};

export default Sidebar;