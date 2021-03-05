# Goblin Squire Idea

From a Tabletop RPG player and enthusiast and also a developer, i found myself always trying to find a perfect tool to control my games, create characters and NPCs stat blocks and etc. So, with this project, i will try my best to create a tool that fit all my needs in the next weeks.

And of course, following the idea of "we love open source", it will be everything available here in github (frontend, backend and database migration / schemas).

## Folders and structures

All shared components, hooks, utils and etc, will be inside of `src/shared/<type>/*`, meaning that they WILL be used in multiple places, composing a bigger component or a page.

Modules are files that CAN be reused, but only within it's module. For example, if we have a module called `dungeons-and-dragon`, and a component called `StatBlock`, the path would be `src/modules/dnd/components/StatBlock` - the same for hooks, utils and etc -, it means that this stat block is specific for Dungeons and Dragon, and cannot be used anywhere else. If not, it should be inside of `src/shared/components/*` folder.

Pages components are `Next.js` specifics, it will be matched with a url following the folder structure + file name. You can read more in [routing](https://nextjs.org/docs/routing/introduction) introduction in NextJs documentation.

Structure example:

```
src/
  shared/
    components/
      Button.tsx
  hooks/
    useFetch.ts
  modules/
    dnd/
      components/
        StatBlock.tsx
      hooks/
        useStatBlock.ts
  pages/
    index.tsx
```

## Design system, themes, styling and etc

It will be used `styled-components` for theme rules and definitions.

The idea is, when needed, improve the theme, with sizes, colors, spacing, etc.

Upon time, most of prop values will be following a rule. For example, a prop like `fontSize`, would be `sm | md | lg | xl | 2xl`, instead of `3rem` or `15px`.

## Unit testing

All tests will be inside of `__tests__` folder, and the folder structure will match `components`, `modules` and `pages`.

For example, if we have a component called `<StatBlock />`, the path would be `src/components/StatBlock`, and the test path would be `src/__tests__/components/StatBlock`. Pages and modules will follow the same nomenclature and paths.

## Internationalization

All texts within the application must use the hook `useTranslation`, that returns a function called `t`.

Available languages and available files are declared inside `utils.ts` file in `src/shared/providers/TranslationProvider` folder. The file names are `availableLanguages` and `availableFiles`. Everytime a new JSON file containing translations are created, it MUST be declared inside these variables. The types `LanguagesName` and `TranslationFileName` will be automatically translated.

If a new language will be supported, it must have the same structure as the other folders for things to work correctly.

Translation files are just `JSON` objects. Parameters can be added to the string with `%paramKey%` format, `%userEmail%` for example, and with `t` function, you can just an object as second param, matching the key (without `%`).

```
// JSON
{
  "helloWorld": "Hello, %message%"
}

// React Component

<>
  {t('helloWorld', { message: 'World.' })}
</>
```
