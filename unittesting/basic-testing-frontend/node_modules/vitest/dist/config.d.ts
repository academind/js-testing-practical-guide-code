import { UserConfig as UserConfig$2 } from 'vite';
import { UserConfig as UserConfig$1, ResolvedC8Options } from 'vitest';

declare const config: {
    allowOnly: boolean;
    watch: boolean;
    globals: boolean;
    environment: "node";
    threads: boolean;
    clearMocks: boolean;
    restoreMocks: boolean;
    mockReset: boolean;
    include: string[];
    exclude: string[];
    testTimeout: number;
    hookTimeout: number;
    isolate: boolean;
    watchIgnore: RegExp[];
    update: boolean;
    reporters: never[];
    silent: boolean;
    api: boolean;
    ui: boolean;
    uiBase: string;
    open: boolean;
    coverage: ResolvedC8Options;
};
declare const configDefaults: Required<Pick<UserConfig$1, keyof typeof config>>;

interface UserConfig extends UserConfig$2 {
    test?: UserConfig$2['test'];
}

declare function defineConfig(config: UserConfig): UserConfig;

export { UserConfig, configDefaults, defineConfig };
