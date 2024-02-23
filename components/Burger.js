import React from 'react'

export default function Burger(props) {
    return (
        <button
            onClick={props.toggleOpen}
            type="button"
            className={`w-8 h-8 flex justify-around flex-col flex-wrap z-10 cursor-pointer`}
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
