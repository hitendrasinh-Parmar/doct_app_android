import { Platform } from "react-native"

const font = {
    Poppins: {
        weights: {
            ExtraBold: '800',
            Bold: '700',
            Medium: '600',
            Light: '300',
            Regular: '400'
        },
        styles: {
            Italic: 'italic'
        }
    },
}

// generate styles for a font with given weight and style
export const fontMaker = (options: any = {}) => {
    let { weight, style, family } = Object.assign({
        weight: null,
        style: null,
        family: 'Poppins'
    }, options)

    const { weights, styles } = font[family]

    if (Platform.OS === 'android') {
        weight = weights[weight] ? weight : ''
        style = styles[style] ? style : ''

        const suffix = weight + style
        console.log(family + (suffix && suffix.length ? `-${suffix}` : ''));

        return {
            fontFamily: family + (suffix && suffix.length ? `-${suffix}` : '')
        }
    } else {
        weight = weights[weight] || weights.Regular
        style = styles[style] || 'normal'

        return {
            fontFamily: family,
            fontWeight: weight,
            fontStyle: style
        }
    }
}
