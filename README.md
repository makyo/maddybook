# Maddybook

A simple Hugo theme for books.

* Chapters: welcome
* Anthologies: natch
* Footnotes and citations: modal
* Typography: pretty good
* Nice on mobile: yep
* LLM-blocking `robots.txt`: included

## How To

For works with chapters, create a folder in `content` (I usually use `read`) and put a file in it named `_index.md` containing the following:

```markdown
---
type: chapter
---
```

Then, for all of your chapters, put them in Markdown or HTML files that directory. They'll be paginated in alphabetical order, so I usually name the files `001.md`, `002.md`, etc.

For anthologies, each work can be in a Markdown/HTML file of type `story`. Create a file in `data` called e.g: `works.yaml`. For each story, create an entry:

```yaml
- title: Your story's title
  authors:
  - Author A
  - Author B
  contributors:
  - Contributor A
  type: short story # This is freeform text, just metadata for the readers
  description: This is my great short story where a bunch of neat things happen
  cw: optional content warnings go here
  spoilers: optional spoilers for other works go here
```

This is good for basic short stories. If you have short stories that are logically grouped together, you can add a `category` entry in their YAML, then create a `categories.yaml` file in `data`:

```yaml
- id: my-cateogry
  name: My Category
```

And the listing will break it up accordingly. If a work has associated works (like an essay that goes with a novella), you can add a `parent` entry to its YAML that contains the parent's `title` exactly, and it will nest it accordingly.

Authors can have their names linked out by creating an `authors.yaml` file in `data` with the key being the author's name and the value being the url:

```yaml
Author A: https://example.com
Contributor A: https://example.org
```

Then, wherever you want the story listing, you can use the shortcode:

```gotmpl
{{< works corpus="works" collections="collections" creators="creators" >}}
```

For a good example of both chapters and an anthology, see [the repo for *Marsh*](https://github.com/post-self/marsh.post-self.ink).

## Sites using Maddybook

* [Post-Self](https://post-self.ink)
    * [*Qoheleth*](https://qoheleth.post-self.ink)
    * [*Toledot*](https://toledot.post-self.ink)
    * [*Nevi'im*](https://neviim.post-self.ink)
    * [*Mitzvot*](https://mitzvot.post-self.ink)
    * [*Clade*](https://clade.post-self.ink)
    * [*Motes Played*](https://motes-played.post-self.ink)
    * [*Marsh*](https://marsh.post-self.ink)
    * [*Idumea*](https://idumea.post-self.ink)
    * [*Kaddish*](https://kaddish.post-self.ink)
    * [*Ask — An Odist Q&A*](https://ask.post-self.ink)
    * [The Post-Self TTRPG](https://rpg.post-self.ink)
* [*Restless Town*](https://restless-town.makyo.ink)
* [*A Wildness of the Heart*](https://wildness.makyo.ink)
* [*Florilegium*](https://florilegium.ink)
* [The Furry Historical Fiction Society](https://fhfs.ink)

## Custom site-wide parameters
These go in the `params` section of your site-wide `hugo.toml`.

- `author` : The name of the overall website author(s) -- used for copyright notices and metadata tags
- `copyright`: The copyright year(s) shown in the footer
- `headline`: Used to set something other than a site's short title as the social media description line
- `ogimg`: The image to use in link cards on social media. Overridable per-page.
- `subtitle`: If given, sets the subtitle of the site
- `subtitleLink`: What the subtitle links to (if specified)
- `twitter`: If given, the name of the author's Twitter, if set, including the leading `@`. Suppresses Twitter meta tags if not set
- `customCSS` and `customJS`: A list of custom CSS or Javascript files (respectively) to include on each page

The `params.tipJar` section is used to link to a way to support the author at the end of chapters. If these values are not defined, no such links are emitted.
- `link`: A link readers can use to support the author. Placed
- `name`: The link text used to link to the tip jar
