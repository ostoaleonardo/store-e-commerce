import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Card, CardBody, CardFooter, Image, Button } from '@nextui-org/react'
import { useCart } from '../hooks/useCart'

export function ProductCard({ product }) {
    const { cart, addToCart, removeFromCart } = useCart()

    const checkProductInCart = () => {
        return cart.find((item) => item.id === product.id)
    }

    return (
        <Link to={`/product/${product.id}`}>
            <Card
                isPressable
                radius='sm'
                shadow='none'
                className='w-full h-full border-2 border-foreground/5'
            >
                <CardBody className='overflow-visible p-0'>
                    <Image
                        isZoomed
                        radius='none'
                        width='100%'
                        alt={product.title}
                        src={product.image}
                        className='w-full object-contain aspect-square p-16'
                    />
                </CardBody>
                <CardFooter className='flex flex-col items-start gap-2'>
                    <p className='text-sm text-start line-clamp-2'>{product.title}</p>
                    <div className='w-full flex items-center justify-between'>
                        <p className='text-4xl font-bold text-purple-600'>${product.price}</p>
                        <Button
                            isIconOnly
                            variant='flat'
                            aria-label='Cart'
                            color={
                                checkProductInCart()
                                    ? 'danger'
                                    : 'secondary'
                            }
                            onPress={
                                checkProductInCart()
                                    ? () => removeFromCart(product)
                                    : () => addToCart(product)
                            }
                        >
                            {
                                checkProductInCart()
                                    ? <FontAwesomeIcon icon={faCartArrowDown} />
                                    : <FontAwesomeIcon icon={faCartPlus} />
                            }
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    )
}
