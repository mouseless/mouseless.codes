# Demo

## Bullet List

::bullet-list

- task 1
- task 2
::

---

## Buttons

### Default

:link-button{to="#buttons" type="default" text="Default Button"}

### CTA

:link-button{to="#buttons" type="cta" text="CTA Button"}

---

## Call To Action

::call-to-action

  # We value trust!

  :::link-button{to="https://www.mouseless.codes" type="cta" text="Reach out!"}
::

---

## Card

### Default Card

::card

![](/images/calendar.png)

## Header

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

:::link-button{to="#card" text="for more..." type="default"}
::

### Align `left` Card with `columns`

::card
---
align: left
---

  ::::columns
  #column 1

    ## Card Header

    Lorem ipsum dolor sit amet

  #column 2

    ![](//mouseless.github.io/brand/assets/logo/svg/logo-mark-primary.svg)
  ::::
::

---

## Columns

::columns

#column 1

column 1

#column 2

column 2

::

---

## PR List

:pr-list{:repos='["mouseless.codes", "do"]'}

---

## Slider

### Arrow on Sides and Code Theme

::slider{type="arrow-on-sides" content-theme="code-block"}

#slide1

## Slide 1

Slide 1

#slide2

## Slide 2

Slide 2
::

### Arrow on Bottom and Card Theme

::slider{type="arrow-on-bottom" content-theme="card"}

#slide1

  ::::card
  ![](/images/calendar.png)

  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

  ![C#][logo-csharp]![DO][logo-do]![Vue.js][logo-vue]![Docker][logo-docker]
  ![.NET][logo-dotnet]![MySQL][logo-mysql]![SQL Server][logo-sqlserver]
  ::::

#slide2

## Slide 2

Slide 2
::

[logo-csharp]: //img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white
[logo-do]: //img.shields.io/badge/DO-000000?style=for-the-badge&label=&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzEwMV8xNTE4IiBzdHlsZT0ibWFzay10eXBlOmFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiPgo8cGF0aCBkPSJNMTAgMEgyMFYxMEgxMFYwWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTIwIDEwSDMwVjIwSDIwVjEwWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTMwIDIwSDQwVjMwSDMwVjIwWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTIwIDMwSDMwVjQwSDIwVjMwWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEwIDQwSDIwVjUwSDEwVjQwWiIgZmlsbD0id2hpdGUiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swXzEwMV8xNTE4KSI+CjxyZWN0IHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI0Y5NDY1QiIvPgo8L2c+Cjwvc3ZnPgo=
[logo-docker]: //img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[logo-dotnet]: //img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white
[logo-mysql]: //img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white
[logo-sqlserver]: //img.shields.io/badge/SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white
[logo-vue]: //img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D
