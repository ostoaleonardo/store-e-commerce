import { useCart } from '../hooks/useCart'
import { Card, CardBody, CardFooter, ScrollShadow } from '@nextui-org/react'
import { ItemCart } from './ItemCart'

export function Cart() {
    const { cart } = useCart()

    return (
        <Card shadow='none' className='w-[400px] border-none bg-transparent'>
            <CardBody className='flex flex-col justify-between items-center p-3'>
                {cart.length == 0 ? (
                    <h4 className='text-small font-semibold leading-none text-default-600 py-8'>
                        Your cart is empty
                    </h4>
                ) : (
                    <ScrollShadow
                        hideScrollBar
                        className='w-full max-h-[400px] flex flex-col gap-3'
                    >
                        {cart.map((item) => (
                            <ItemCart
                                key={item.id}
                                product={item}
                            />
                        ))}
                    </ScrollShadow>
                )}
            </CardBody>
            {cart.length != 0 && (
                <CardFooter className='flex flex-col items-center justify-center border-t-2 p-3 m-0'>
                    <h4 className='text-small font-semibold leading-none text-default-600'>
                        Total
                    </h4>
                    <h5 className='text-small font-bold text-purple-500'>
                        ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
                    </h5>
                </CardFooter>
            )}
        </Card>
    )
}