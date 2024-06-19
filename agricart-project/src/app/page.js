import Image from "next/image";

export default function Home() {
  return (
    <header className="flex justify-between items-center">
      <div className="justify-start">
        <Link className="text-aqua-forest-600 font-semibold text-2xl" href="">Agrimarket</Link>
      </div>
      <nav className="flex gap-7">
        <Link href={''}>Home</Link>
        <Link href={''}>Menu</Link>
        <Link href={''}>About</Link>
        <Link href={''}>Cart</Link>
        <Link href={''}>Contact</Link>
        <Link href={''}>Login</Link>
      </nav>
    </header>
  );
}
