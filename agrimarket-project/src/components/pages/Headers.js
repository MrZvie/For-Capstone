import Link from "next/link";

export default function Headers() {
    return(
        <header className="flex items-center justify-between">
            <Link className="text-aqua-forest-600 font-semibold text-2xl" href="">Agrimarket</Link>
            <nav className="flex gap-8 items-center text-aqua-forest-500 font-semibold">
                <Link href={''}>Home</Link>
                <Link href={''}>Shop</Link>
                <Link href={''}>Forum</Link>
                <Link href={''}>About</Link>
                <Link href={''}>Cart</Link>
                <Link href={''}>Contact</Link>
                <Link href={''} className="bg-aqua-forest-600 rounded-full text-white px-6 py-2" >Login</Link>
            </nav>
        </header>
    );
}