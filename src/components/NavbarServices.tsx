'use client';

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NavbarServices() {
    const router = useRouter();

    const handleBack = () => {
        router.push("/#services");
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-offwhite backdrop-blur-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Left: Back button */}
                    <button
                        className="flex items-center mr-4 text-primary hover:text-bordeux transition-colors"
                        onClick={handleBack}
                        aria-label="Voltar"
                    >
                        <ArrowLeft className="w-6 h-6 mr-1" />
                        Voltar
                    </button>

                    {/* Center: Logo */}
                    <Link href="/" className="flex items-center mx-auto">
                        <Image
                            src="/logocopinski.avif"
                            alt="Copinski Films Logo"
                            width={120}
                            height={50}
                            className="mt-4 h-auto w-auto"
                            priority
                        />
                    </Link>
                </div>
            </div>
        </nav>
    );
}