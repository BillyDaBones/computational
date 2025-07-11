import { Link } from '@tanstack/react-router'

const sidebarLinks = [
    {
        href: "/",
        alt: "Home navigation"
    }
]

export const SideBar = () => {
    return (
        <div>
            <div className="flex w-[300px] h-full absolute left-0 bg-gray-700 z-10 flex-wrap">
                <div className='w-full flex h-10 p-8'>
                    <img width="100" height="100"  src="https://cdn.freebiesupply.com/logos/large/2x/random-logo-png-transparent.png" alt="website logo"></img>
                </div>
                <div className='w-full relative'>
                    <div className='w-full] p-8 '>
                        <div>
                            <ul className='w-full'>
                                <li className='p-8'>Testing </li>
                                <li>Testing two</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}