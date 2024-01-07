import Link from "next/link";

export default function NavLink({ active = true, className = '', children, ...props }: any) {
    return (
        <Link
            {...props}
            className={
                'text-white inline-flex items-center text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active ?
                    'font-bold ' :
                    'font-thin text-white ') +
                className
            }
        >
            {children}
        </Link>
    );
}
