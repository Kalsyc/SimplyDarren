import { Handlers, PageProps } from "$fresh/server.ts";
import { render } from "https://deno.land/x/gfm@0.1.26/mod.ts";
import { GeneralLayout } from "../../components/layouts/GeneralLayout.tsx";
import ProjectPost from "../../islands/ProjectPost.tsx";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const project = ctx.params.project;
    const decoder = new TextDecoder("utf-8");
    console.log(Deno.cwd());
    const markdown = decoder.decode(
      await Deno.readFile(`${Deno.cwd()}/static/markdown/${project}.md`),
    );

    const markup = render(markdown);
    return ctx.render({ markup: markup });
  },
};

export default function ProjectPage(props: PageProps) {
  if (!props.data.markup) {
    return <h1>Not found</h1>;
  }
  return (
    <GeneralLayout
      title={`Simply Darren | ${props.params.project}`}
      name={props.params.project}
      description={`Project Description for ${props.params.project}`}
    >
      <article class="w-full h-full my-8 flex text-justify justify-center">
        <ProjectPost markup={props.data.markup} />
      </article>
    </GeneralLayout>
  );
}
