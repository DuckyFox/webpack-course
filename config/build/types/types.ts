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

interface User {
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
}

const Oleg:User = {
    name: 'a',
    email: 'a',
    password: 'a',
    isAdmin: true,
}

interface Box<T> {
    value: T;
}

let testBox: Box<number> = {
    value: 32,
}

