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
            <AvatarTamagui.Image accessibilityLabel={name} src={image} />
        </AvatarTamagui>
    )
}