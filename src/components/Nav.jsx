import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faSearch, faStore } from '@fortawesome/free-solid-svg-icons'
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Navbar, NavbarBrand, NavbarContent, Button, Popover, PopoverTrigger, PopoverContent } from '@nextui-org/react'
import { Cart } from '../components/Cart'

export function Nav() {
    return (
        <Navbar isBordered isBlurred='false' maxWidth='xl'>
            <NavbarContent justify='start'>
                <Link to='/'>
                    <NavbarBrand className='mr-4'>
                        <FontAwesomeIcon icon={faStore} size='lg' className='pr-2' />
                        <p className='hidden sm:block font-bold text-inherit'>Store</p>
                    </NavbarBrand>
                </Link>
            </NavbarContent>

            <NavbarContent as='div' className='items-center' justify='end'>
                <Input
                    classNames={{
                        base: 'max-w-full sm:max-w-[10rem] h-10',
                        mainWrapper: 'h-full',
                        input: 'text-small',
                        inputWrapper: 'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
                    }}
                    size='sm'
                    type='search'
                    placeholder='Search for products'
                    startContent={<FontAwesomeIcon icon={faSearch} />}
                />
                <Popover showArrow shouldBlockScroll='true' placement='bottom'>
                    <PopoverTrigger>
                        <Button isIconOnly variant='light' color='secondary' aria-label='Cart'>
                            <FontAwesomeIcon icon={faCartShopping} className='text-foreground' />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className='p-1'>
                        <Cart />
                    </PopoverContent>
                </Popover>
                <Dropdown placement='bottom-end'>
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as='button'
                            className='transition-transform'
                            color='secondary'
                            name='Jason Hughes'
                            size='sm'
                            src='https://unavatar.io/twitter/avicii'
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label='Profile Actions' variant='flat'>
                        <DropdownItem key='profile' className='h-14 gap-2'>
                            <p className='font-semibold'>Logged in as</p>
                            <p className='font-semibold'>example@example.com</p>
                        </DropdownItem>
                        <DropdownItem key='logout' color='danger'>
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    )
}
