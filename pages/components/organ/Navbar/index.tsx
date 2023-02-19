import Link from "next/link"

const Navbar = (props : any) => {
    return(
        <header>
            <div className="h-16 md:h-[105px] flex items-center bg-primary">
                <Link href='/'>
                    <h1 className="text-xl md:text-3xl text-slate-50 ml-5 font-semibold">TO DO LIST PAY</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar