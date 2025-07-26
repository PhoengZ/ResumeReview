export async function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const result = reader.result as string;
            const base64 = result.split(',')[1];
            if (base64){
                resolve(base64);
            }else{
                reject(new Error("Failed to convert file to base64"));
            }
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}