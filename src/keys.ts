import { getEnvVar } from "./utils";

export const Keys = {
    clientToken: getEnvVar('DISCORD_KEY'),
} as const;


export default Keys;