<template>
  <v-app dark>
    <v-app-bar
      color="rgb(255, 255, 255, 0.8)"
      flat
      fixed
      app
    >
    <nuxt-link to="/">
      <v-toolbar-title v-text="title" />
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
      <v-toolbar>
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
    </v-card>
    </v-dialog>
    <v-footer
      :absolute="!fixed"
      app
    >
    <v-col
      class="text-center"
    >
      <span>Designed & built by Barra O'Leary &copy; {{ new Date().getFullYear() }}</span>
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
</style>
