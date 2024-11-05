import Image from 'next/image'

export default function Header() {
    return (
        <div className='flex items-center rounded-xl overflow-hidden mb-4 shadow-lg bg-white h-32 lg:h-auto'>
            <div className="rounded-r-full overflow-hidden">
                <Image
                    src="dark-avatar-2.png"
                    width={200}
                    height={200}
                    style={{ objectFit: "cover" }}
                    alt="Anna Serova"
                />
            </div>
            <div className='p-4'>
                <p className='font-bold text-xl mb-2'>Серова Анна</p>
                <p className='font-semibold text-sm text-stone-500'>Frontend разработчик</p>
            </div>
        </div>
    )
}