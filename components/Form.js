"use client"
import { useState } from 'react';
import Cta from './Cta';

export default function BasicForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [error, setError] = useState('')

    function onSubmit(e) {
        e.preventDefault();
        e.stopPropagation();

        fetch("https://formcarry.com/s/WUqCW7dYVzM", {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, message })
        })
            .then(response => response.json())
            .then(response => {
                if (response.code === 200) {
                    alert("We received your submission, thank you!");
                }
                else if (response.code === 422) {
                    // Field validation failed
                    setError(response.message)
                }
                else {
                    // other error from formcarry
                    setError(response.message)
                }
            })
            .catch(error => {
                // request related error.
                setError(error.message ? error.message : error);
            });
    }

    return (
        <form onSubmit={(e) => onSubmit(e)} className='flex flex-col gap-6'>

            <div className="formcarry-block">

                <label
                    htmlFor="Name"
                    className="relative block rounded-md border border-black shadow-sm focus-within:border-black focus-within:ring-1 focus-within:ring-black"
                >
                    <input
                    required
                        value={name} onChange={(e) => setName(e.target.value)}
                        type="text"
                        id="Name"
                        className="w-full peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-3"
                        placeholder="Name"
                    />

                    <span
                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                    >
                        Username
                    </span>
                </label>
            </div>

            <div className="formcarry-block">

                <label
                    htmlFor="Email"
                    className="relative block rounded-md border border-black shadow-sm focus-within:border-black focus-within:ring-1 focus-within:ring-black"
                >
                    <input
                    required
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        id="Email"
                        className="w-full peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-3"
                        placeholder="Email"
                    />

                    <span
                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                    >
                        Email
                    </span>
                </label>

            </div>

            <div className="formcarry-block">
                <label
                    htmlFor="message"
                    className="relative block rounded-md border border-black shadow-sm focus-within:border-black focus-within:ring-1 focus-within:ring-black"
                >
                    <textarea
                        value={message} onChange={(e) => setMessage(e.target.value)}
                        id="message"
                        placeholder='How can I help ?'
                        className="w-full peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-3"
                    ></textarea>

                    <span
                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                    >
                        How can I help ?
                    </span>
                </label>



            </div>

            <div className="formcarry-block">
                
                <button type="submit">
                <Cta value="Send">
                    <svg height={18} width={18} className='invert' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>
                </Cta>

                </button>
            </div>
        </form>
    )
}