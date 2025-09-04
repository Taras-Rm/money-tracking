import type { PropsWithChildren } from "react"


interface PageLayoutProps extends PropsWithChildren {
    title: string
}

const PageLayout = ({ title, children }: PageLayoutProps) => {
    return <div>
        <h1>{title}</h1>
        <div>
            {children}
        </div>
    </div >
}

export default PageLayout