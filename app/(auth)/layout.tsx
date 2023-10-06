import classNames from 'classnames'
import './styles.css'

import { Inter } from 'next/font/google'

const font = Inter({
    subsets : ['latin']
})

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className={classNames('h-screen bg-primary flex flex-col items-center justify-center', 'background', font.className)}>
            {children}
        </div>
    )
}