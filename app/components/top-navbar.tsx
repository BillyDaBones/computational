import { Link } from '@tanstack/react-router'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export const TopNavbar = () => {
    return (
        <div>
            <NavigationMenu viewport={false} className='w-[200]'>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>Link</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className='p-8'>
                                    <li>
                                        <NavigationMenuLink>
                                            <Link to="/" className='rounded-md p-8 [&.active]:bg-red-50  [&.active]:dark:text-black'>Home</Link>
                                        </NavigationMenuLink>
                                    </li>
                                    <li className='p-8'>testing</li>
                                    <li className='p-8'>testing</li>
                                </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}