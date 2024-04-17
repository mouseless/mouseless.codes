---
title: mouseless -- how we work
menu-title: how we work
position: 3
seo-title: >
  > mouseless -- how we work_
seo-description: >
  run on a flexible, pay-as-you-go model.
seo-image: https://mouseless.github.io/brand/assets/logo/profile/logo-profile-mark-primary-500px.png
---

::block

:::banner

## Experiment, learn and progress

We prioritize timely feature delivery, automated testing, code refactoring, and
keeping technology up to date without extra cost.

:::

::

::block{color=black}

:::banner

### Low Cost of Change

Our approach minimizes change costs through automated testing and continuous
refactoring, ensuring adaptability without additional expenses.

::::bullet-list

- Test automation
- Refactoring
- Tech-stack update

::::

:::

:br

### See in action

:::columns

#do-builds

#### Tests and Coverage

Check out one of our open source project, DO, to see how we utilize test
automation;

:link-button{to="https://github.com/mouseless/do/actions/runs/8344718124" text="See in GitHub"}

#net-upgrade

#### Research Upgrades

We provide our customers with technology upgrades out of the box. Check out how
we manage tech upgrades.

:link-button{to="https://github.com/mouseless/learn-dotnet/pull/17" text="See in GitHub"}

#do-net-upgrade

#### Apply Upgrades

Using our headless opinionated .NET framework we manage to easily upgrade
customer projects.

:link-button{to="https://do.mouseless.codes/release-notes/v0-6#net-upgrade" text="See in DO"}

:::

::

::block

:::banner

### Continuous Delivery

We guarantee rapid delivery with a 3-day lead time and an end-to-end CI/CD
setup, prioritizing efficiency and reliability.

::::bullet-list

- 3 days of average lead-time
- No estimation, continuous planning
- End to end CI/CD setup

::::

:::

:br

### See in action

:::columns

#freq-releases

#### Frequent Releases

Check out DO releases to see frequency of our delivery cycle;

:link-button{to="https://github.com/mouseless/do/releases" text="See in GitHub"}

#lead-time

#### Lead-Time

See how we build software incrementally;

:link-button{to="https://github.com/mouseless/do/pulls?q=label%3APublish+is%3Aclosed" text="See in GitHub"}

:::

::

::block{color=black}

:::banner

### Progress Visibility

Through draft PRs from project inception, detailed task management, and clear
communication, we maintain transparency at every development stage.

::::bullet-list

- Draft PRs right from beginning
- Well detailed task lists
- Clear commit messages

::::

:::

:br

### See in action

:::columns

#do-epic

#### PRs

Check out our live work right from GitHub;

:link-button{to="https://github.com/mouseless/do/pulls" text="See in GitHub"}

#learn-task

#### Tasks

See how we care work descriptions and tasks;

:link-button{to="https://github.com/mouseless/learn-css/pull/2" text="See in GitHub"}

:::

::

::block

:::banner

### Cross Pollination

Our commitment to open source and diverse project engagement promotes knowledge
exchange, enhancing innovation across the community.

::::bullet-list

- Open Source
- Continuous Learning

::::

:::

:br

### See in action

:::columns

#do-docs

#### DO

Check out DO, our opinionated framework for .NET;

:link-button{to="https://do.mouseless.codes" text="See DO"}

#learn-nuxt

#### Learn

See how we learned, documented and use Nuxt;

:link-button{to="https://mouseless.github.io/learn-nuxt" text="Learn Nuxt"}

#all-open-source

#### Open Source

See what we've open sourced so far;

:link-button{to="https://github.com/mouseless?type=public" text="See in GitHub"}

:::

::

:block{content="contents/lets-meet.md" color=black}

::block

:::banner

### Delivering at pace

We are a __self-managing__ team with a single point of contact assigned per
client. We operate on a __time & materials__ basis without requiring a
fixed-budget or a fixed-plan thanks to our fast response time.

:::

```mermaid
flowchart TB
    R[Requirement\nEmerges]

    subgraph LC[Done in 3 days]
        W[Work starts\nwith Draft PR]
        S[Write specs\nas automated\ntests]
        DR[Develop &\nCode Review]
        C[Customer\nReviews]

        W --> S
        S --> DR
        DR --> C
        C --> S
    end

    D[Deliver]

    R --> LC
    LC --> D
```

::

:block{content="contents/become-partner.md" color=black}
:block{content="contents/lets-meet.md"}
:block{content="contents/tedious-work.md" color=black}
:block{content="contents/explore-long-term.md"}
:block{content="contents/our-collective.md" color=black}
