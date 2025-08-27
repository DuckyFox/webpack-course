export type BuildMode = "development" | "production";

export interface BuildPath {
    entry: string;
    output: string;
    template: string;
}

export interface BuildOptions {
    mode: BuildMode;
    port: number;
    paths: BuildPath
    isDev: boolean;
}


