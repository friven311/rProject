# Contributing to this project

If you have any questions or need more information about the project,
feel free to reach out [Viktor Shalamov](https://bitbucket.effective-soft.com/users/viktor.shalamov).

## Branching

TBA

To start contributing:

1. Create branch from appropriate branch
2. Please, follow the general branch naming convention: **TBA**
3. Commit your work and create pull request (PR) into appropriate branch.

   1. Double check the changes of the PR.
   2. Please, use meaningful titles for PRs as they will be included in the release notes.
   3. Please, do not ignore the description of the PR.
   4. Add code reviewers.
   5. Assign PR to the person, responsible for its merging.

## Naming

We are using:

1. `UpperCamelCase` for folders, containing components.
2. `camelCase` for hooks.
3. `kebab-case` for other files and folders (including module names).

```plaintext
components
└── ActiveList
    ├── index.js
    └── styled.js

utils
├── note-helpers.js
└── date-formatters.js

hooks
└── useAnalytics.js
```

## Styles

We are using [styled-components](https://styled-components.com) for writing styles.
Please, follow the rules:

1. For the set of styled components we create file named `styled.js`.
2. We use namespace imports for styled components.

```javascript
import * as S from './styled';

const Example = () => (
  <S.Container>
    <S.Text>Some example of styled components</S.Text>
  </S.Container>
);
```
