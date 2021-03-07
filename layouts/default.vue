<template>
  <v-app dark>
    <v-app-bar
      color="rgb(255, 255, 255, 0.8)"
      flat
      fixed
      app
    >
    <nuxt-link to="/">
      <v-toolbar-title v-text="title" class="logo" />
    </nuxt-link>
      
      <v-spacer />
      <v-btn
        v-if="$vuetify.breakpoint.smAndDown"
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-btn 
        class="mx-5"
        depressed
        plain
        :ripple="false"
        v-if="$vuetify.breakpoint.mdAndUp && this.$route.path == '/'"
        @click="() => this.$vuetify.goTo('#design')"
      >
        Case Studies
      </v-btn>
      <v-btn 
        class="mx-5"
        depressed
        plain
        :ripple="false"
        v-if="$vuetify.breakpoint.mdAndUp && this.$route.path != '/'"
        @click="() => this.$router.push('/#design')"
      >
        Case Studies
      </v-btn>

      <v-btn 
        class="mx-5"
        depressed
        plain
        :ripple="false"
        v-if="$vuetify.breakpoint.mdAndUp && this.$route.path == '/'"
        @click="() => this.$vuetify.goTo('#research')"
      >
        About
      </v-btn>
      <v-btn 
        class="mx-5"
        depressed
        plain
        :ripple="false"
        v-if="$vuetify.breakpoint.mdAndUp && this.$route.path != '/'"
        @click="() => this.$router.push('/#research')"
      >
        About
      </v-btn>

    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-dialog
      v-model="rightDrawer"
      fullscreen
      hide-overlay
    >
    <v-card>
      <v-toolbar flat>
        <v-spacer></v-spacer>
        <v-btn
          icon
          color="#000"
          @click="rightDrawer = false"
        >
          <v-icon>
            mdi-close
          </v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-list >
          <v-list-item>
            <v-btn
              class="mx-5"
              depressed
              plain
              :ripple="false"
              v-if="$vuetify.breakpoint.mdAndDown && this.$route.path != '/'"
              @click="caseStudyAway()"
              
            >
            Case Studies
            </v-btn>
            <v-btn
              class="mx-5"
              depressed
              plain
              :ripple="false"
              v-if="$vuetify.breakpoint.mdAndDown && this.$route.path == '/'"
              @click="caseStudyHome()"
            >
            Case Studies
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn
              class="mx-5"
              depressed
              plain
              :ripple="false"
              v-if="$vuetify.breakpoint.mdAndDown && this.$route.path != '/'"
              @click="aboutAway()"
              
            >
            About
            </v-btn>
            <v-btn
              class="mx-5"
              depressed
              plain
              :ripple="false"
              v-if="$vuetify.breakpoint.mdAndDown && this.$route.path == '/'"
              @click="aboutHome()"
            >
            About
            </v-btn>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
    </v-dialog>
    <v-footer
      :absolute="!fixed"
      app
    >
    <v-col
      class="text-center"
    >
      Website designed and built by me using <b><a href="https://nuxtjs.org/" target="_blank"><span>NuxtJS</span></a></b> and
      <b><a href="https://vuetifyjs.com/en/" target="_blank"><span>Vuetify</span></a></b>. Deployed to <b><a href="https://www.netlify.com/" target="_blank"><span>Netlify</span>.</a></b> See the repo on <b><a href="https://github.com/olearyb/My-Portfolio-2021" target="_blank"><span>Github.</span></a></b>
    </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Barra O'Leary"
    }
  },
  methods: {
    caseStudyHome() {
      this.rightDrawer = false
      this.$vuetify.goTo('#design')
    },
    caseStudyAway() {
      this.rightDrawer = false
      this.$router.push('/#design')
    },
    aboutHome() {
      this.rightDrawer = false
      this.$vuetify.goTo('#research')
    },
    aboutAway() {
      this.rightDrawer = false
      this.$router.push('/#research')
    }
  }
}
</script>

<style>
html, body {
    max-width: 100%;
    overflow-x: hidden;
}

.theme--dark.v-application {
  background-color: var(--v-background-base, #121212) !important;
}
.theme--light.v-application {
  background-color: var(--v-background-base, white) !important;
}

.container {
  max-width: 100vw;
  padding: 0px;
}

.nuxt-link:hover {
    text-decoration: none;
    color: #000;
}

.nuxt-link {
    color: #000;
}

.logo {
  color: #000 !important;
}
</style>
