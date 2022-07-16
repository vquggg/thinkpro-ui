import { IconProps } from '.'

export function CartIcon({
    width = '20px',
    height = '20px',
    fill = 'none',
    className,
}: IconProps) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            viewBox='0 0 24 24'
            fill={fill}
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className={className}
        >
            <circle cx='9' cy='21' r='1'></circle>
            <circle cx='20' cy='21' r='1'></circle>
            <path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6'></path>
        </svg>
    )
}
