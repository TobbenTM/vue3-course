<template>
  <div class="slide">
    <img src="../assets/ft.jpg" class="slide__stamp">

    <div class="slide__content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
.slide {
  height: 100%;
  width: 100%;
  max-height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  &__stamp {
    position: absolute;
    top: 0;
    left: 0;
    width: 3.5%;
  }

  &__content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    max-height: 100%;
    width: 100%;

    h1, h2, h3, h4, p {
      display: block;
      width: 100%;

      &.subtitle {
        margin-top: 0;
      }
    }

    p {
      margin: 0;
    }

    a {
      text-decoration: underline;
      color: inherit;

      &:visited {
        color: inherit;
      }
    }

    .component {
      margin: 1em;
      padding: 1em;
      border: 1px solid #2c3e50;
      border-radius: .3em;
      max-width: 80%;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .half {
      max-width: 40%;
      margin: .5em;
    }

    .one-third {
      max-width: 25%;
      margin: .5em;
    }
    .two-thirds {
      max-width: 55%;
      margin: .5em;
    }

    img {
      max-width: 80%;
      max-height: 90%;
      padding: 2em;
    }

    ul {
      text-align: left;
      display: block;
    }

    ul.half {
      display: inline;
    }

    li {
      padding: .3em 0;
    }
  }
}
</style>
