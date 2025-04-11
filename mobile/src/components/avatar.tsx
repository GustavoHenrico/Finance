import { Avatar as AvatarTamagui } from 'tamagui'

export type AvatarProps = {
    size?: string
    name?: string
    image?: string
    radius?: string
}

export function Avatar({ image, name, size, radius }: AvatarProps) {

    return (
        <AvatarTamagui size={size} borderRadius={radius}>
            <AvatarTamagui.Image accessibilityLabel="Gu" src="https://lh3.googleusercontent.com/-YjsxC6rlIoE/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkk7cSE0eGfXLhNFYqAo4FMHB_KwBA/photo.jpg?sz=46" />
        </AvatarTamagui>
    )
}