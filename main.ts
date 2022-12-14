/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

import {
  Options,
} from "https://deno.land/x/fresh@1.1.2/plugins/twind/shared.ts";

const options = {
  selfURL: new URL("./twind.config.ts", import.meta.url).href,
  ...twindConfig,
  darkMode: "class",
} as Options;

await start(manifest, {
  plugins: [twindPlugin(options)],
});
