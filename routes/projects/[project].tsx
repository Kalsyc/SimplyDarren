import { Handlers, PageProps } from "$fresh/server.ts";
import { render } from "https://deno.land/x/gfm@0.1.26/mod.ts";
import { GeneralLayout } from "../../components/layouts/GeneralLayout.tsx";
import ProjectPost from "../../islands/ProjectPost.tsx";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const project = ctx.params.project;
    console.log(project);
    const decoder = new TextDecoder("utf-8");
    const markdown = decoder.decode(
      await Deno.readFile(`/markdown/${project}.md`),
    );
    const markup = render(markdown);
    return ctx.render({ markup: markup, project: project });
  },
};

export default function ProjectPage(props: PageProps) {
  return (
    <GeneralLayout
      title={`Simply Darren | ${props.params.project}`}
    >
      <article>
        <ProjectPost markup={props.data.markup} />
      </article>
    </GeneralLayout>
  );
}
