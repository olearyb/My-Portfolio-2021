<template>
  <div>
    <hero />
    <projects />
    <about />
  </div>
</template>

<script>
import Projects from '~/components/Projects.vue';
import Hero from '~/components/Hero.vue';
import About from '~/components/About.vue';


export default {
  components: {
    Projects,
    Hero,
    About
  }
}
</script>



<style>
.v-application {
  background-color: #2F3437;
}
body { 
    padding-top: 50px; 
    height: 100%;
}

.hero {
    width: 100%;
    height: 100vh;
}

.projects {
  width: 100vw;

}

/*html {
  box-sizing: border-box;
  transform-origin: 50% 50%;
} */


h1 {
  font-size: 90px;
}

p {
  opacity: 1;
  transition: opacity 7s ease-out;
}
.projects {
    background-color: #F8F8F8;
}

</style>


