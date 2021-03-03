<template>
    <v-container fluid class="text-center justify-center hero">
      <h1 class=" mb-4">Hello!</h1>
      <v-row align="center" justify="center" class="px-10">
        <vue-typed-js 
        :strings="['Im Barra, <b><span>UX Researcher</span></b> and <b><span>Designer</span></b>']" 
        :showCursor="false" 
        :typeSpeed="50">
          <p class="typing line1"></p>
        </vue-typed-js>
      </v-row>
      <v-row align="center" justify="center" class="mt-5 px-10">
        <vue-typed-js 
        :strings="['I also dabble in <b><span>Front End development</span></b>']" 
        :showCursor="false"
        :startDelay="3000"
        :typeSpeed="50">
          <p class="typing line2"></p>
        </vue-typed-js>
      </v-row>
      <v-row align="center" justify="center" class="mt-5">
        <vue-typed-js 
        :strings="['&#128075;']" 
        :showCursor="false"
        :startDelay="6000"
        :typeSpeed="50">
          <h2 class="typing"></h2>
        </vue-typed-js>
      </v-row>
      <transition name="scroll" appear>
        <div class="scrolldown-wrapper" v-if="show">
            <p class="more">Scroll</p>
          <div 
            class="scrolldown"
            @click="$vuetify.goTo('#process')"
          >
            <svg height="30" width="10">
              <circle class="scrolldown-p1" cx="5" cy="15" r="2" />
              <circle class="scrolldown-p2" cx="5" cy="15" r="2" />
            </svg>
          </div>
        </div>
      </transition>
    </v-container>
</template>

<script>
export default {
    name: 'Hero',
    data() {
    return {
      show: false
    }
  },
  mounted() {
    this.show = true;
  }
}

</script>
<style>
span {
  color: #665DF5;
}
</style>>

</style>

<style>

p {
  font-size: 18px;
}



.more {
    font-size: 12px;
}
.intro {
    font-size: 4em;
}

.line1 {
    font-size: 1.5em;
}

.line2 {
    font-size: 1.25em;
}
.hero-enter-active,
.hero-leave-active {
  transition: opacity 10s;
}

.hero-enter,
.hero-leave-to {
  opacity: 0;
}

.scroll-enter-active,
.scroll-leave-active {
  transition: opacity 10s;
}

.scroll-enter,
.scroll-leave-to {
  opacity: 0;
}

/* Scroll Down */

.scrolldown-wrapper {
	left: 50%;
	position: absolute;
	text-align: center;
    transform: translate(-50%, -50%);
    top:70vh;
}
  
.scrolldown {
	border: 2px solid #000000;
	border-radius: 30px;
	height: 46px;
	margin: 0 auto 8px;
	text-align: center;
	width: 30px;
}

.scrolldown-p1,
.scrolldown-p2 {
	animation-duration: 1.5s;
	animation-name: scrolldown;
	animation-iteration-count: 15;
	fill: #000000;
}
  
.scrolldown-p2 {
	/*animation-delay: .75s;*/
  animation-delay: .75s;
}

@keyframes scrolldown {
	0% {
		opacity: 0;
		transform: translate(0, -8px);
	}
	50% {
		opacity: 1;
		transform: translate(0, 0);
	}
	100% {
		opacity: 0;
		transform: translate(0, 8px);
	}
}

</style>