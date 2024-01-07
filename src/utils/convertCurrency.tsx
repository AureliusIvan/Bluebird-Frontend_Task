// sanitize IDR 200.000 to 200000

export const convertCurrency = (price: any) => {
    // sanitize "IDR 200.000" to 200000
    const sanitizedPrice = price.replace(/[^0-9]/g, "");
    return parseInt(sanitizedPrice);
}

export const formatCurrency = (price: any) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(price);
}