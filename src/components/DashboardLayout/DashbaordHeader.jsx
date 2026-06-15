const DashboardHeader = ({ title, description, children }) => {
    return (
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
                <h1
                    className="text-3xl font-medium text-foreground tracking-tight text-primary"
                >
                    {title}
                </h1>
                <p
                    className="text-sm text-dark-gray"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                    {description}
                </p>
            </div>

            {children}
        </header>
    )
}

export default DashboardHeader