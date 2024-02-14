
export default function Cta({value, children}) {
    return (
        <span
            className="overflow-hidden cursor-pointer group rounded relative inline-flex items-centerrounded bg-black px-6 py-3 text-white active:bg-gray-800"
        >
            <span className="absolute -end-full transition-all group-hover:end-4">
              {children}

            </span>

            <span className="text-sm font-semibold transition-all group-hover:me-6"> {value} </span>
        </span>
    ) 
}
