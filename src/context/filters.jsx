import { createContext, useState } from 'react'

// Create context
export const FiltersContext = createContext()

// Provider component
export function FiltersProvider({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        maxPrice: 1000
    })

    return (
        <FiltersContext.Provider
            value={{
                filters,
                setFilters,
            }}
        >
            {children}
        </FiltersContext.Provider>
    )
}
