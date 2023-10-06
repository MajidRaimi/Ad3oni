
export const getEnvVar = (name: string, fallback?: string): string => {
    const value = process.env[name] ?? fallback;
    if (value === undefined) {
        throw new Error(`Environment variable ${name} is not defined`);
    }
    return value;
}

export const getEnvVarAsNumber = (name: string, fallback?: number): number => {
    const value = process.env[name] ?? fallback;
    if (value === undefined) {
        throw new Error(`Environment variable ${name} is not defined`);
    }
    return Number(value);
}