
export default function Cta({value}) {
    return (
        <a
            class="group rounded relative inline-flex items-centerrounded bg-black px-6 py-3 text-white active:bg-gray-800"
            href="#"
        >
            <span class="absolute -end-full transition-all group-hover:end-4">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 11.5V12.5C16.5 13.9001 16.5 14.6002 16.2275 15.135C15.9878 15.6054 15.6054 15.9878 15.135 16.2275C14.6002 16.5 13.9001 16.5 12.5 16.5H5.5C4.09987 16.5 3.3998 16.5 2.86502 16.2275C2.39462 15.9878 2.01217 15.6054 1.77248 15.135C1.5 14.6002 1.5 13.9001 1.5 12.5V11.5M13.1667 7.33333L9 11.5M9 11.5L4.83333 7.33333M9 11.5V1.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </span>

            <span class="text-sm font-semibold transition-all group-hover:me-6"> {value} </span>
        </a>
    ) 
}