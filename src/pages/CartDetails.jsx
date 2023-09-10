import { Link } from 'react-router-dom'
import { Button, Divider, Image, Skeleton } from '@nextui-org/react'
import { useCart } from '../hooks/useCart'
import { ItemCart } from '../components/ItemCart'

const CartDetails = () => {
    const { cart } = useCart()

    return (
        <div className='w-full min-h-screen'>
            <div className='grid grid-cols-12 gap-4 p-10'>
                <div className='flex flex-col col-start-1 col-end-9 items-center justify-start rounded-2xl border-2 gap-3 p-10'>
                    {cart.length == 0 ? (
                        <h4 className='text-small font-semibold leading-none text-default-600 py-8'>
                            Your cart is empty
                        </h4>
                    ) : (
                        cart.map((item) => (
                            <ItemCart
                                key={item.id}
                                product={item}
                            />
                        ))
                    )}
                </div>
                <div className='flex flex-col col-start-9 col-end-13 justify-between rounded-2xl border-2 gap-8 px-10 py-8'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-base font-bold text-foreground'>Purchase summary</h1>
                        <Divider className='mt-2 mb-4' />
                        <div className='flex flex-row justify-between'>
                            <p className='text-base'>Quantity of products:</p>
                            <p className='text-base text-purple-500 font-medium'>
                                {cart.reduce((acc, item) => acc + item.quantity, 0)}
                            </p>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <p className='text-base'>Total: </p>
                            <p className='text-base text-purple-500 font-medium'>
                                $ {cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Link to='/cart'>
                            <Button color='secondary' className='w-full'>
                                Buy now
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartDetails
