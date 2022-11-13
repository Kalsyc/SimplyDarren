import { Head } from "https://deno.land/x/fresh@1.1.2/runtime.ts";

export function GeneralHead({ ...customMeta }) {
  const meta = {
    title: "Simply Darren",
    description: "Simply Darren Portfolio Website",
    type: "website",
    ...customMeta,
  };
  return (
    <Head>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/global.css" />
    </Head>
  );
}
