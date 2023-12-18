type TCertificate = {
    name: string;
    position: string;
    image: string;
}

export const fetchCertificate = async (certificate: TCertificate[]): Promise<TCertificate[]> => {
    return certificate.slice(0, 6);
}