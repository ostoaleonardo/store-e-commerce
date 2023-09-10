import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button, Image, Skeleton } from '@nextui-org/react'
import { getProductById } from '../api/getProductById'
import { useCart } from '../hooks/useCart'

const ProductDetails = () => {
    const { id } = useParams()
    const { addToCart } = useCart()
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetchGetProductById(id)
    }, [])

    const fetchGetProductById = async (id) => {
        const res = await getProductById(id)
        setProduct(res)
    }

    return (
        <div className='w-full min-h-screen'>
            <div className='min-h-[650px] grid grid-cols-12 gap-4 p-10'>
                <div className='flex col-start-1 col-end-6 items-center rounded-2xl border-2'>
                    <Image
                        isZoomed
                        radius='none'
                        width='100%'
                        alt={product.title}
                        src={product.image}
                        className='object-contain aspect-square p-32'
                    />
                </div>
                <div className='flex flex-col col-start-6 col-end-13 justify-between rounded-2xl border-2 p-10'>
                    {product.length === 0
                        ? (
                            <div className='space-y-3'>
                                <Skeleton className='rounded-2xl'>
                                    <div className='h-24 rounded-lg bg-default-300'></div>
                                </Skeleton>
                                <Skeleton className='w-3/5 rounded-lg'>
                                    <div className='h-3 w-3/5 rounded-lg bg-default-200'></div>
                                </Skeleton>
                                <Skeleton className='w-4/5 rounded-lg'>
                                    <div className='h-3 w-4/5 rounded-lg bg-default-200'></div>
                                </Skeleton>
                                <Skeleton className='w-2/5 rounded-lg'>
                                    <div className='h-3 w-2/5 rounded-lg bg-default-300'></div>
                                </Skeleton>
                                <Skeleton className='w-1/5 rounded-2xl'>
                                    <div className='h-16 rounded-lg bg-default-300'></div>
                                </Skeleton>
                            </div>
                        ) : (
                            <>
                                <div className='flex flex-col gap-6'>
                                    <h1 className='text-4xl font-bold text-foreground'>{product.title}</h1>
                                    <p className='text-base text-start'>{product.description}</p>
                                    <p className='text-5xl font-bold text-purple-600'>${product.price}</p>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Link to='/cart'>
                                        <Button color='secondary' className='w-full'>
                                            Buy now
                                        </Button>
                                    </Link>
                                    <Button
                                        variant='flat'
                                        color='secondary'
                                        onPress={() => addToCart(product)}
                                    >
                                        Add to cart
                                    </Button>
                                </div>
                            </>
                        )}
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
