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

### Align `left` Card with column

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

::slider

#slide1

## Slide 1

Slide 1

#slide2

## Slide 2

Slide 2
::
