// src/api.d.ts

// Define the Van interface
interface Van {
    id: string;
    name: string;
    price: number;
    type: string;
    imageUrl: string;
}

// Declare the getVans function
declare function getVans(): Promise<Van[]>;

// Export the function
export { getVans };