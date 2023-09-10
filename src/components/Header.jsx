export function Header() {
    return (
        <header className='w-full h-96 bg-gradient-to-r from-purple-400 to-blue-500'>
            <div className='flex flex-col items-center justify-center h-full'>
                <h1 className='text-5xl font-bold text-white'>Welcome to the store</h1>
                <p className='text-2xl font-semibold text-white'>Buy your favorite products</p>
            </div>
        </header>
    )
}