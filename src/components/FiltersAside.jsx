import { useId } from 'react'
import { Select, SelectItem } from '@nextui-org/react'
import { useFilters } from '../hooks/useFilters'

const categories = [
    { label: 'All', value: 'all' },
    { label: 'Electronics', value: 'electronics' },
    { label: 'Jewelery', value: 'jewelery' },
    { label: 'Men\'s clothing', value: 'men\'s clothing' },
    { label: 'Women\'s clothing', value: 'women\'s clothing' },
]

export function FiltersAside() {
    const { filters, setFilters } = useFilters()
    const maxPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleMaxPriceChange = (e) => {
        setFilters(
            prevState => ({
                ...prevState,
                maxPrice: e.target.value
            })
        )
    }

    const handleCategoryChange = (e) => {
        setFilters(
            prevState => ({
                ...prevState,
                category: e.target.value
            })
        )
    }

    return (
        <aside className='w-full h-full bg-white border-r-2 border-foreground/5 p-8'>
            <h2 className='text-3xl font-bold mb-4'>Filters</h2>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <label
                        htmlFor={maxPriceFilterId}
                        className='font-semibold'
                    >
                        Maximum price: <span className='text-purple-500'>${filters.maxPrice}</span>
                    </label>
                    <input
                        min='0'
                        max='1000'
                        type='range'
                        id={maxPriceFilterId}
                        value={filters.maxPrice}
                        className='w-full accent-purple-500'
                        onChange={handleMaxPriceChange}
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label
                        htmlFor={categoryFilterId}
                        className='font-semibold'
                    >
                        Category
                    </label>
                    <Select
                        label='Category'
                        items={categories}
                        className='max-w-xs'
                        id={categoryFilterId}
                        disallowEmptySelection={true}
                        defaultSelectedKeys={[categories[0].value]}
                        onChange={handleCategoryChange}
                    >
                        {(category) => <SelectItem key={category.value}>{category.label}</SelectItem>}
                    </Select>
                </div>
            </div>
        </aside>
    )
}