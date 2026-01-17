import { Home, User, Briefcase, BookOpen, ShoppingBag, Mail } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

/**
 * TubelightNavbarDemo - Demo component showing how to use the NavBar
 * 
 * Usage: Import this component and place it in your layout or App.jsx
 */
export function TubelightNavbarDemo() {
    const navItems = [
        { name: 'Home', url: '/', icon: Home },
        { name: 'About', url: '/about', icon: User },
        { name: 'Education', url: '/education', icon: BookOpen },
        { name: 'Shop', url: '/shop', icon: ShoppingBag },
        { name: 'Membership', url: '/membership', icon: Briefcase },
        { name: 'Contact', url: '/contact', icon: Mail }
    ]

    return <NavBar items={navItems} />
}

export default TubelightNavbarDemo
