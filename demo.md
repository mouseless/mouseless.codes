---
title: Demo
seo-title: Mouseless Demo
seo-description: This is Demo page
seo-image: merged.svg
---

::block{:debug=true}

## Banner

### Banner Option 1

:::banner{:hr=true}

#### Our Collective

:::

### Banner Option 2

:::banner{:hr="false" align="right"}

**We** Offer

:::

## Bullet List

:::bullet-list{align=left}

- task 1
- task 2

:::

:::bullet-list{align=center}

- task 1
- task 2

:::

:::bullet-list{align=right}

- task 1
- task 2

:::

## Buttons

### Default

:link-button{to="#buttons" type="default" text="Default Button"}

### CTA

:link-button{to="#buttons" type="cta" text="CTA Button"}

## Box

:::box{title="Box Header" image-align="left"}
---
image: //mouseless.github.io/brand/assets/logo/svg/logo-mark-primary.svg
---

Lorem ipsum dolor sit amet consectetur adipisicing elit.
:::

## Box Layout

### Box Option 1

:::box-layout{display="stack" align="left"}

#item 1

::::box{title="Box 1"}
Lorem ipsum dolor sit amet consectetur adipisicing elit
::::

#item 2

::::box{title="Box 2"}
Maxime mollitia, molestiae quas vel sint commodi repudiandae
::::

:::

### Box Option 2

:::box-layout{display="flex" align="center"}

#item 1

::::box{title="Box 1"}
Lorem ipsum dolor sit amet consectetur adipisicing elit
::::

#item 2

::::box{title="Box 2"}
Maxime mollitia, molestiae quas vel sint commodi repudiandae
::::

:::

## Call To Action

:::call-to-action

### We value trust

:link-button{to="https://www.mouseless.codes" type="cta" text="Reach out!"}

:::

## Card

:::box-layout{display="flex" align="center"}

#item 1

::::card{image="/draft.svg"}

## An Epic on DO

Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum
::::

#item 2

::::card{image="/card-bg-wall.jpg"}

## An Epic on Learn-Nuxt

Iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo
autem.
::::

:::

:::box-layout{display="stack" align="left" itemWidth="30ch" :itemWidths='["35ch", "45ch"]'}

#item 1

::::card

## An Epic on DO

Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat
::::

#item 2

::::card

## An Epic on Learn-Nuxt

Iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo
autem.
::::

#item 3

::::card

## An Epic on Prebuild

Veritatis obcaecati tenetur iure eius earum ut molestias architecto
::::

:::

:::card{image="/merged.svg"}

## An Epic on Learn-Nuxt

Completely clear and straightforward
:::

## Inline Frame

:::box-layout{display="stack" align="center" :itemWidths='["37%", "60%"]'}

#item 1

:inline-frame{source="https://docs.google.com/forms/d/e/1FAIpQLScTupsQqnyg6-SJgZLY_RG6dkzhl0I84FE_CC0DlxxFLJ8WpA/viewform?embedded=true" height="900px" width="100%"}

#item 2

:inline-frame{source="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1JvSZEhFcpTFazLdx54wKj2WdrCH8vL58t7oqIla5YbPVgrrbGd2oB-gy7UfqNjhLt_8NZyIc8?gv=true" height="900px" width="100%"}

:::

## People

:people{align=left}
:people{align=center}
:people{align=right}

## PR List

:pr-list{:repos='["mouseless.codes", "do", "learn-nuxt", "learn-css", "prebuild"]'}

## Slider

:::slider

#slide1

### Slide 1

Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum!

#slide2

### Slide 2

Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid.
:::

## Steps

:::steps{:stepsName='["Step 1", "Step 2 Long Text", "Step 3", "Step 4", "Step 5"]'}

#step1

::::card
# Step 1

Step 1 body
::::

#step2

::::card
# Step 2

Step 2 body
::::

#step3

::::card
# Step 3

Step 3 body
::::

#step4

::::card
# Step 4

Step 4 body
::::

#step5

# Step 5

Step 5 body

:::

## Prose

Normal Text

**Bold Text**

__Bold Text__

*Italic Text*

_Italic Text_

> Blockquotes

[Link](#demo)

[External Link](http://mouseless.codes)

![](/images/explosion-star.png)

# Head1

## Head2

### Head3

#### Head4

##### Head5

###### Head6

::
