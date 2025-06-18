import type { LocaleObject } from "@nuxtjs/i18n";

const defineLocale = (code: string, name: string, extra?: Record<keyof LocaleObject<string>, any>): LocaleObject<string> => ({
    code,
    iso: code,
    name,
    file: `./${code}.json`,
    dir: 'ltr',
    ...extra
})

const languages = [
    defineLocale('en-US', 'English', { isCatchallLocale: true }),
    defineLocale('es-ES', 'Español'),
]

export { languages }