// Type definitions for structured-data-testing-tool 3.0
// Project: https://github.com/glitchdigital/structured-data-testing-tool
// Definitions by: Steven Snoeijen <https://github.com/stevensnoeijen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import { Stream } from "stream";

interface Test {
    /**
     * Required: true
     * The value for test should be a valid <a href="http://jmespath.org/">JMESPath query</a>.
     *
     * @link https://github.com/glitchdigital/structured-data-testing-tool#test
     */
    test: string;

    /**
     * Possible values: 'json'|'rdfa'|'microdata'|'any'.
     * Default is 'any'
     *
     * @link https://github.com/glitchdigital/structured-data-testing-tool#type
     */
    type?: string;

    /**
     * Default: true
     *
     * @link https://github.com/glitchdigital/structured-data-testing-tool#expect
     */
    expect: boolean|string|RegExp;

    /**
     * Default: false
     *
     * @link https://github.com/glitchdigital/structured-data-testing-tool#warning
     */
    warning: boolean;

    /**
     * Default: false
     *
     * @link https://github.com/glitchdigital/structured-data-testing-tool#info
     */
    info: boolean;

    /**
     * Default: undefined
     *
     * @link https://github.com/glitchdigital/structured-data-testing-tool#conditional
     */
    conditional: {
        [key: string]: string
    };

    /**
     * Default: undefined
     *
     * @link https://github.com/glitchdigital/structured-data-testing-tool#group
     */
    group: string;

    /**
     * Default: undefined
     *
     * @link https://github.com/glitchdigital/structured-data-testing-tool#groups
     */
    groups: string[];

    /**
     * Default: undefined
     *
     * https://github.com/glitchdigital/structured-data-testing-tool#schema
     */
    schema: string;
}

interface TestResult extends Test {
    passed: boolean;
    error: TestError;
}

interface Preset {
    name: string;
    description: string;
    tests: Test[];
    presets: string[][];
    conditional: {
        [key: string]: string
    };
}

interface TestError {
    type: string;
    message: string;
    expected: string|boolean|RegExp;
    found: string;
}

interface Response {
    tests: any;
    passed: any;
    failed: any;
    warnings: any;
    info: TestResult;
    skipped: any;
    groups: any;
    schemas: string[];
}

export interface StructuredDataOptions {
    presets: Preset[];
    schemas: string[];
    tests: any;
}

interface StructuredData {
    rdfa: string;
    microdata?: string;
    jsonld: string;
    metatags: string;
}

export function _structuredDataTest(structuredData: StructuredData, options: StructuredDataOptions): Promise<Response>;
export function structuredDataTest(input: string|Buffer|Stream|StructuredData, options: StructuredDataOptions): Promise<Response>;
export function structuredDataTestUrl(url: string, options: StructuredDataOptions): Promise<Response>;
export function structuredDataTestHtml(html: string, options: StructuredDataOptions): Promise<Response>;

export interface presets {
    Google: Preset;
    Twitter: Preset;
    Facebook: Preset;
    Social: Preset;
}

export {};
