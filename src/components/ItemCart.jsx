import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Image, Button } from '@nextui-org/react'
import { useCart } from '../hooks/useCart'

export function ItemCart({ product }) {
    const { removeItemToCart, addToCart } = useCart()

    return (
        <div className='w-full flex justify-between'>
            <div className='flex gap-3'>
                <Image
                    radius='sm'
                    width='40px'
                    height='40px'
                    src={product.image}
                    className='w-full object-contain aspect-square p-2'
                />
                <div className='flex flex-col items-start justify-center'>
                    <h4 className='text-small font-semibold text-default-600 line-clamp-1'>
                        {product.title}
                    </h4>
                    <h5 className='text-small font-bold text-purple-500'>
                        ${product.price}
                    </h5>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <Button
                    isIconOnly
                    radius='none'
                    variant='flat'
                    color='danger'
                    aria-label='Cart'
                    className='ml-3 rounded-l-lg'
                    onPress={() => removeItemToCart(product)}
                >
                    <FontAwesomeIcon icon={faMinus} />
                </Button>
                <span className='flex min-w-[55px] h-full text-small font-semibold text-default-600 items-center justify-center border-y-2 px-4'>
                    {product.quantity}
                </span>
                <Button
                    isIconOnly
                    radius='none'
                    variant='flat'
                    color='secondary'
                    aria-label='Cart'
                    className='rounded-r-lg'
                    onPress={() => addToCart(product)}
                >
                    <FontAwesomeIcon icon={faPlus} />
                </Button>
            </div>
        </div>
    )
}