'use client'

import { Languages } from 'lucide-react'
import { Button } from '../ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import Image from 'next/image'
import { lngs } from '@/constants'
import Link from 'next/link'
import { cn, getCurrentLng } from '@/lib/utils'
import { useParams } from 'next/navigation'

interface Props {
	isMobile?: boolean
}

const LanguageDropDown = ({ isMobile }: Props) => {
	const { lng } = useParams()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant={'ghost'}
					size={'icon'}
					className={cn(
						isMobile && 'w-full bg-primary hover:bg-primary/70 h-12'
					)}
				>
					<Languages />
					{isMobile && <span> {getCurrentLng(lng as string)} </span>}
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent>
				<DropdownMenuGroup>
					{lngs.map(item => (
						<Link key={item.route} href={`${item.route}`}>
							<DropdownMenuItem
								className={cn(item.route === lng && 'bg-secondary')}
							>
								<Image
									src={`/assets/locales/${item.route}.png`}
									alt={item.label}
									width={30}
									height={30}
								/>
								<span> {item.label} </span>
							</DropdownMenuItem>
						</Link>
					))}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default LanguageDropDown
