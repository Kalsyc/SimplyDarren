import { Handlers, PageProps } from "$fresh/server.ts";
import { render } from "https://deno.land/x/gfm@0.1.26/mod.ts";
import { GeneralLayout } from "../../components/layouts/GeneralLayout.tsx";
import ProjectPost from "../../islands/ProjectPost.tsx";
import { titleNameToPageMap } from "../../constants/Projects.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const project = ctx.params.project;
    const decoder = new TextDecoder("utf-8");
    let markdown;
    try {
      markdown = decoder.decode(
        await Deno.readFile(`./markdown/${project}.md`),
      );
    } catch (err) {
      console.log(err);
      return ctx.render({ markup: "Not found" });
    }

    const markup = render(markdown, {});
    return ctx.render({ markup: markup, title: titleNameToPageMap[project] });
  },
};

export default function ProjectPage(props: PageProps) {
  if (!props.data.markup) {
    return <h1>Not found</h1>;
  }
  return (
    <GeneralLayout
      title={`Simply Darren | ${props.data.title}`}
      name={props.params.project}
      description={`Project Description for ${props.params.project}`}
    >
      <article class="w-full h-full my-8 flex text-justify justify-center">
        <ProjectPost markup={props.data.markup} />
      </article>
    </GeneralLayout>
  );
}
