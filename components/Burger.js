export default function Burger(props) {
    return (
        <button
            onClick={props.toggleOpen}
            type="button"
            className={`w-8 h-8 flex justify-around flex-col flex-wrap z-50 cursor-pointer absolute top-0 right-0 m-5 md:hidden`}
        >
            <div
                className={`bg-black block w-8 h-[0.25rem] rounded transition-all origin-[1px] ${props.isOpen ? 'rotate-45' : 'rotate-0'
                    }`}
            />
            <div
                className={`bg-black block w-8 h-[0.25rem] rounded transition-all origin-[1px] ${props.isOpen ? 'translate-x-full bg-transparent' : 'translate-x-0'
                    }`}
            />
            <div
                className={`bg-black block w-8 h-[0.25rem] rounded transition-all origin-[1px] ${props.isOpen ? 'rotate-[-45deg]' : 'rotate-0'
                    }`}
            />
        </button>
    )
}
