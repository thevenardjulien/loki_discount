export default function Button({ children, onClick, type }: { children: React.ReactNode, onClick?: () => void, type?: "button" | "submit" }) {
    return (
        <button onClick={onClick} className="bg-neutral-600 hover:bg-neutral-800 hover:cursor-pointer text-white px-10 py-3 rounded-md w-fit" type={type}>
            {children}
        </button>
    );
}