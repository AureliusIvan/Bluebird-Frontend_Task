export const Header = (
    { title, description }: { title: string, description: string }
) => {

    return (<>
        <div
            className='flex flex-col gap-4 w-full text-pretty text-primary'
        >
            <h1
                className='text-4xl font-bold'
            >
                {title}
            </h1>
            <div>
                {description}
            </div>
        </div>
    </>)
}