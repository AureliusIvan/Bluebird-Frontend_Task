export function LinkFormater(url: string) {
    // lower case and remove all spaces with no space
    const formattedUrl = url.replace(/\s/g, '');
    return formattedUrl;
}