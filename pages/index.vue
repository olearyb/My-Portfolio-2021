<!--<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-text>
          <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>
          <p>
            For more information on Vuetify, check out the <a
              href="https://vuetifyjs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation
            </a>.
          </p>
          <p>
            If you have questions, please join the official <a
              href="https://chat.vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="chat"
            >
              discord
            </a>.
          </p>
          <p>
            Find a bug? Report it on the github <a
              href="https://github.com/vuetifyjs/vuetify/issues"
              target="_blank"
              rel="noopener noreferrer"
              title="contribute"
            >
              issue board
            </a>.
          </p>
          <p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.</p>
          <div class="text-xs-right">
            <em><small>&mdash; John Leider</small></em>
          </div>
          <hr class="my-3">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt Documentation
          </a>
          <br>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt GitHub
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>-->
<template>
  <div>
    <div class="text-center justify-center min-vh-100">
      <h1>Hello!</h1>
      <v-row align="center" justify="center">
        <vue-typed-js 
        class="flex-0"
        :strings="['Im Barra, <b><span>UX Designer</span></b> and <b><span>Researcher</span></b> &#128075;']" 
        :showCursor="false" 
        :typeSpeed="75">
          <p class="typing"></p>
        </vue-typed-js>
      </v-row>
      <transition name="scroll" appear>
        <div class="scrolldown-wrapper" v-if="show">
          <div class="scrolldown">
            <svg height="30" width="10">
              <circle class="scrolldown-p1" cx="5" cy="15" r="2" />
              <circle class="scrolldown-p2" cx="5" cy="15" r="2" />
            </svg>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
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
body { 
    padding-top: 50px; 
}

/*html {
  box-sizing: border-box;
  transform-origin: 50% 50%;
} */
span {
  color: #665DF5;
}

h1 {
  font-size: 90px;
}

p {
  opacity: 1;
  transition: opacity 7s ease-out;
}


/* Transitions */

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
	bottom: 0;
	transform: translate(-50%, -50%);
}
  
.scrolldown {
	border: 2px solid #ffffff;
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
	animation-iteration-count: 10;
	fill: #ffffff;
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


