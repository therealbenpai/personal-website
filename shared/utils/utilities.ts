export class Utilities {
    static baseSEO = {
        ogImage: 'https://cdn.benshawmean.com/meta-banner.png',
        ogImageAlt: 'Profile Picture',
        ogType: 'website',
        ogSiteName: "Benpai's Website",
        twitterCard: 'summary_large_image',
        twitterImage: 'https://cdn.benshawmean.com/meta-banner.png',
        twitterImageAlt: 'Profile Picture',
        twitterSite: '@therealbenpai',
        twitterCreator: '@therealbenpai',
    }
    static generateSEOMeta(title: string, description: string, ogPath: string): Record<string, string> {
        return Object.assign({}, this.baseSEO, {
            ogUrl: `https://benshawmean.com${ogPath}`,
            ogTitle: title,
            twitterTitle: title,
            description: description,
            ogDescription: description,
            twitterDescription: description,
        });
    }
}