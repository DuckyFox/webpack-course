export type BuildMode = "development" | "production";

export interface BuildPath {
    entry: string;
    output: string;
    template: string;
    src: string;
    config: string,
    public: string,
}

export interface BuildOptions {
    mode: BuildMode;
    port: number;
    paths: BuildPath
    isDev: boolean;
}


