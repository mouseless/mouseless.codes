# Demo

## Banner

### Option 1

::banner{:hr=true}
## Our Collective
::

### Option 2

::banner{:hr="false" align="right"}
**We** Offer
::

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

::card
---
title: Card Header
imageAlign: left
image: //mouseless.github.io/brand/assets/logo/svg/logo-mark-primary.svg
---
Lorem ipsum dolor sit amet consectetur adipisicing elit.
::

---

## Card Layout

### Option 1

::card-layout{display="stack" align="left"}

#item 1

::::card
---
title: Card 1
---
Lorem ipsum dolor sit amet consectetur adipisicing elit
::::

#item 2

::::card
---
title: Card 2
---
Maxime mollitia, molestiae quas vel sint commodi repudiandae
::::

::

### Option 2

::card-layout{display="flex" align="center"}

#item 1

::::card
---
title: Card 1
---
Lorem ipsum dolor sit amet consectetur adipisicing elit
::::

#item 2

::::card
---
title: Card 2
---
Maxime mollitia, molestiae quas vel sint commodi repudiandae
::::

::

---

## PR List

:pr-list{:repos='["mouseless.codes", "do"]'}

---

## Slider

::slider

#slide1

## Slide 1

Slide 1

#slide2

## Slide 2

Slide 2
::
