<template>
    <v-container>
        <v-navigation-drawer 
            v-if="$vuetify.breakpoint.lgAndUp"
            open
            floating
            fixed 
            right 
            clipped 
            class="mt-10 pt-15 drawer"
        >
       <scrollactive class="my-nav">
        <v-list id="default_toc">
            <v-list-item>
                <v-list-item-content >
                    <v-list-item-title>
                       <b>Contents</b>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item class="toc pa-0">
                <v-list-item-content class="my-0 py-0">
                    <v-list-item-title>
                        <a href="#challenge" class="scrollactive-item my-0 py-0">Challenge</a>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item class="toc pa-0">
                <v-list-item-content class="my-0 py-0">
                    <v-list-item-title>
                        <a href="#solution" class="scrollactive-item my-0 py-0">Solution</a>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item class="toc pa-0">
                <v-list-item-content class="my-0 py-0">
                    <v-list-item-title>
                        <a href="#interactivity" class="scrollactive-item my-0 py-0">Interactivity</a>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item class="toc pa-0">
                <v-list-item-content class="my-0 py-0">
                    <v-list-item-title>
                        <a href="#instructions" class="scrollactive-item my-0 py-0">Instructions</a>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item class="toc pa-0">
                <v-list-item-content class="my-0 py-0">
                    <v-list-item-title>
                        <a href="#controls" class="scrollactive-item my-0 py-0">Controls</a>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item class="toc pa-0">
                <v-list-item-content class="my-0 py-0">
                    <v-list-item-title>
                        <a href="#audio" class="scrollactive-item my-0 py-0">Audio</a>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item class="toc pa-0">
                <v-list-item-content class="my-0 py-0">
                    <v-list-item-title>
                        <a href="#demo" class="scrollactive-item my-0 py-0">Demo</a>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        </scrollactive>
        </v-navigation-drawer>
        <v-row class="pa-10 justify-center">
            <v-col cols="10" md="8" class="text-center">
                <h2 id="title">
                    Developing the Mindful Breath tool
                </h2>
            </v-col>
        </v-row>
        <v-row class="justify-center" id="overview">
            <v-col cols="10" md="6" class="text-center lo">
                <v-img
                    class="text-center"
                    :src="require('~/assets/images/main dev breath.png')"
                     />
            </v-col>
        </v-row>
        <v-row class="justify-center mt-10">
            <v-col cols="10" md="8">
                <p><b>Project: </b>Develop a mindful breathing tool to be part of a larger student wellbeing application.</p>
                <p><b>Overview: </b>Development work followed on from an earlier design and usability testing phase that took place prior to development. </p>
                <p><b>My Role: </b>UX Design, Front End Development</p>
                <p><b>Schedule: </b>July 2020 - Oct 2020</p>
            </v-col>
        </v-row>
        <v-row class="justify-center text-center mb-10">
            <v-col cols="10" md="4">
                <v-btn 
                    color="#665DF5" 
                    outlined
                    @click="$vuetify.goTo('#demo')"
                >
                Skip to demo
                </v-btn>
            </v-col>
        </v-row>
        <v-row class="px-15 mx-15" id="challenge">
            <v-divider></v-divider>
        </v-row>
        <v-row 
                class="justify-center my-10"
                
            >
            <v-col cols="10" md="8">
                    <h2 class="pb-10" >
                        The Challenge
                    </h2>
                    <p class="obj mb-10">
                    To implement a <mark><b>User-Centred Design</b></mark> approach to <mark><b>analyse the end-users needs</b></mark> and apply these to <mark><b>increase the potential engagement</b></mark> of the tool by involving the target audience in key stages of the development process
                </p><br>
                    <p>
                        To ensure smooth integration into the MyUse platform, I was required to work in the following frameworks: 
                    </p>
            </v-col>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="6">
                <v-img
                    class="text-center"
                    :src="require('~/assets/images/stack.png')"
                     />
            </v-col>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <p>
                    Some key points that I had to consider included: <br>
                    <ul>
                        <li>- Responsive design for mobile, tablet and desktop</li>
                        <li>- Consistency with other parts of the MyUse platform</li>
                        <li>- Compliance with accessibility guidelines (W3C)</li>
                        <li>- Integration with MyUse back-end and server systems was not required.</li>
                    </ul>
                </p>
            </v-col>
        </v-row>
        <v-row class="px-15 mx-15" id="solution">
            <v-divider></v-divider>
        </v-row>

        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <h2 class="pb-10" id="challenge">The Solution</h2>
                <p>
                    For the mindful breathing tool, the idea was to apply something that was novel in the realm of eHealth, in particular digital breathing exercises. All of the existing applications from the Competitor Analysis did not employ a granular interactive animation. Existing breathing tools had responsive animations based on a range of <b>pre-determined settings</b>, however the extent of these animations was an alternating radius of a circle based on the breath stage. 
                    In the case of these existing applications, users could not interact with these animations at a more granular level or in real time.
                </p> 
                <p>
                    As one of the primary needs of the MyUSE project was to create an engaging web tool, I felt that having a real-time, interactive element would increase engagement and interest in the tool.
                    For my solution, I adapted an algorithm and pair of javascript object classes developed by Liam Egan. Liam is a developer for a firm known as <a href="https://www.wethecollective.com/" target="_blank"><b>“We the Collective”</b></a> based in Vancouver, BC in Canada. He shared his code on Codepen.io <a href="https://codepen.io/shubniggurath/pen/EmMzpp" target="_blank"><b>here</b></a>. <mark>This particular code took advantage of Hooke’s Law and utilises a set of points positioned using polar coordinates. Each point is animated using a basic spring algorithm interpolated with its neighbouring points in reaction to the users mouse movement</mark>.
                </p>
            </v-col>
        </v-row>
        <v-row class="px-15 mx-15">
            <v-divider></v-divider>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <h2 class="pb-10" id="interactivity">1. Interactivity</h2>
                <p>
                    The central animation of the Mindful Breathing exercise creates a wave effect as the mouse moves over each point on the blobs diameter. 
                    This wave effect ripples across each neighbouring point in a natural way that gives an effect similar to perhaps a lava lamp or water.
                </p>
            </v-col>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="6">
                <v-img
                    class="text-center"
                    :src="require('~/assets/images/wave.png')"
                     />
            </v-col>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <p>
                    In the case of implementing Liam Egan’s JavaScript blob class into a NuxtJS application, the workflow that I designed is as follows: <br>
                    <ol type="a">
                        <li>Event listeners are added to Vue’s Created() hook allowing me to access reactive data and events before the Virtual DOM have been mounted or rendered.</li>
                    </ol>
                </p>
                <pre>
                    <code v-highlight class="javascript">
created () {
    window.addEventListener("mousemove", this.mouseMove) 
    window.addEventListener("pointermove", this.mouseMove) 
    this.innerLoop = this.loop;
},
                    </code>
                </pre>
                 <p>
                    <ol type="a" start="2">
                        <li>
                            The canvas element is passed from the DOM via Vue’s Mounted() hook. 
                            This hook does not run during server side rendering but allows access to components immediately before and after the first render.
                        </li>
                    </ol>
                </p>
                <pre>
                    <code v-highlight class="javascript">
mounted () {
    // pass the canvas element from DOM
    this.init(this.$refs.canvas) },
    methods: { init(canvas) {
    // create new blob
    this.blob = new Blob(this.color, canvas.getContext("2d")) // attach canvas element to Blob
    this.blob.canvas = canvas
    // set height to be same as width (square) this.blob.canvas.height = this.blob.canvas.width
    // set default color
    this.setColor(this.color) // initialise blob this.setRadius() this.blob.init() this.blob.render()
}, }
                    </code>
                </pre>
            </v-col>
        </v-row>
        <v-row class="px-15 mx-15" id="instructions">
            <v-divider></v-divider>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <h2 class="pb-10" id="animation">2. Dynamic Instructions</h2>
                <p>
                    One of the key findings in the Thinking Aloud workshops was the high number of times the lack of instructions 
                    was mentioned (mentioned by all 4 participants). Therefore, implementing instructions within the animation was 
                    a high priority of mine for my development phase.
                </p>
            </v-col>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="6">
                <v-img
                    class="text-center"
                    contain
                    :src="require('~/assets/images/lifecycleblob.png')"
                     />
            </v-col>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <p>
                    Another benefit of displaying the instructions on top of the animation was that it 
                    <mark><b>removed the need for multiple on-boarding pages or modals that might overwhelm the 
                    user and reduce user retention.</b></mark> This solution offloads tasks as well as reducing the cognitive load of the user.
                </p>
                <p>
                    In order to implement these features, I decided to set up an array of 5 objects, called breathConfig. Each object would correspond to the breath cycles shown above.
                </p>
                <pre>
                    <code v-highlight class="javascript">
    step: 0,
    breathConfig: [
        { text: "Press Play" },
        {
          dir: 0.2,
          text: "Inhale",
          duration: 5,
        },
        {
          dir: 0,
          text: "Hold",
          duration: 5,
        },
        {
          dir: -0.2,
          text: "Exhale",
          duration: 5,
        },
        {
          dir: 0,
          text: "Hold",
          duration: 5,
        },
      ],
                    </code>
                </pre>
                <p>
                    Where “text” is the text that is displayed to the user at the current step, 
                    “dir” is a numeric value that is shorthand for ‘direction’. This sets the 
                    radius direction value. Lastly, “Duration” is a default numeric value that 
                    represents the seconds that this particular step will last for. As a default, 
                    I set this to 5 as I deemed this to be an achievable breath length for most users.
                </p>
                <p>
                    A computed property is used to return a function called currentStep(). This function 
                    returns the current step that is running in the breathConfig array and thus ensures 
                    that the step is always known when requested.
                </p>
                <pre>
                    <code v-highlight class="javascript">
computed: { currentStep() {
    // return the current step config
    return this.breathConfig[this.step] },
},
                    </code>
                </pre>
                <p>
                    Below is a simple toggle function to start and stop the blob animation. This function runs either a start method or reset method.
                </p>
                <pre>
                    <code v-highlight class="javascript">
toggle () {
    // toggle animation on/off
    this.animating = !this.animating if (this.animating) {
    // play button was clicked
    this.start() } else {
    // stop button was clicked
    this.reset() }
},
                    </code>
                </pre>
            </v-col>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <p>
                    In the case of implementing Liam Egan’s JavaScript blob class into a NuxtJS application, the workflow that I designed is as follows: <br>
                    <ol type="a">
                        <li>Event listeners are added to Vue’s Created() hook allowing me to access reactive data and events before the Virtual DOM have been mounted or rendered.</li>
                    </ol>
                </p>
                <pre>
                    <code v-highlight class="javascript">
created () {
    window.addEventListener("mousemove", this.mouseMove) 
    window.addEventListener("pointermove", this.mouseMove) 
    this.innerLoop = this.loop;
},
                    </code>
                </pre>
                 <p>
                    <ol type="a" start="2">
                        <li>
                            The canvas element is passed from the DOM via Vue’s Mounted() hook. 
                            This hook does not run during server side rendering but allows access to components immediately before and after the first render.
                        </li>
                    </ol>
                </p>
                <pre>
                    <code v-highlight class="javascript">
mounted () {
    // pass the canvas element from DOM
    this.init(this.$refs.canvas) },
    methods: { init(canvas) {
    // create new blob
    this.blob = new Blob(this.color, canvas.getContext("2d")) // attach canvas element to Blob
    this.blob.canvas = canvas
    // set height to be same as width (square) this.blob.canvas.height = this.blob.canvas.width
    // set default color
    this.setColor(this.color) // initialise blob this.setRadius() this.blob.init() this.blob.render()
}, }
                    </code>
                </pre>
                <p>
                    The start() method contains 2 functions within it:
                </p>
                <pre>
                    <code v-highlight class="javascript">
start () {
    // start animating blob immediately
    this.blobAnimate()
    // start timer to animate next step this.stepAnimate()
    }, blobAnimate() {
    // start new animation, using current step config
    this.blobAnimation = setInterval(() => { this.blob.radius += this.currentStep.dir
    }, 20) },
    stepAnimate() {
    // go to next step, after waiting current "duration"
    this.stepAnimation = setTimeout(() => { this.nextStep()
    this.time = this.currentStep.duration
    }, this.currentStep.duration * 1000) this.countDownTimer()
},
                    </code>
                </pre>
                <p>
                    It was important for the user to have some sort of feedback or visual of 
                    how long remained in the current breath stage. For example, if they were 
                    inhaling, <mark><b>having a visible timer sets an expectation that can be more easily 
                    followed as opposed to sudden, unexpected changes.</b></mark> In order to 
                    implement a visible timer, I created a function that reduced the ”duration”
                    variable within the BreathConfig array of the current step by 1, every 1000 
                    milliseconds.
                </p>
                <pre>
                    <code v-highlight class="javascript">
countDownTimer() {
    let time = this.currentStep.duration if (this.currentStep.duration > 0) {
    this.timer = setTimeout(() => { this.time -= 1 this.countDownTimer()
    }, 1000) }
},
                    </code>
                </pre>
            </v-col>
        </v-row>
        <v-row class="px-15 mx-15" id="audio">
            <v-divider></v-divider>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <h2 class="pb-10" id="controls">3. Controls</h2>
                <p>
                    For the control panel, I implemented a navigation drawer on desktop and a modal for Mobile screens.
                    The control panel that I built utilises 
                    <a href="https://vuetifyjs.com/en/components/navigation-drawers/" target="_blank">
                        <b>
                            vuetify’s Navigation Drawer component
                        </b>
                    </a>
                    that opens to the right of the screen on desktop views. In mobile views, this opens as a modal. 
                </p>
            </v-col>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="6">
                <pre>
                    <code v-highlight class="html codeblock">
&lt;v-subheader class="py-2"&gt;Animation Colour&lt;/v-subheader&gt;
&lt;v-container class="pb-5"&gt;
&lt;v-btn class="ma-0.5" elevation="0" fab small color="#8CE5EA" :value="blue" @click="changeBlue"&gt;&lt;/v-btn&gt;
&lt;v-btn class="ma-0.5" elevation="0" fab small color="#FC54A7" :value="rose" @click="changeRose"&gt;&lt;/v-btn&gt;
&lt;v-btn class="ma-0.5" elevation="0" fab small color="#03EE9B" :value="green" @click="changeGreen"&gt;&lt;/v-btn&gt;
&lt;v-btn class="ma-0.5" elevation="0" fab small color="#FEAB20" :value="orange" @click="changeOrange"&gt;&lt;/v-btn&gt;
&lt;/v-container&gt;
&lt;hr /&gt;
    &lt;v-subheader class="pl-0 pt-5"&gt;Inhale count&lt;/v-subheader&gt;
    &lt;v-slider
        v-model="breathConfig[1].duration"
        min="1"
        max="8"
        step="1"
        ticks="always"
        tick-size="1"
        class="py-5"
        :label="breathConfig[1].duration"
        inverse-label
    &gt;                      
                    </code>
                </pre>
            </v-col>
            <v-col cols="10" md="2">
                <v-img
                    class="text-center"
                    contain
                    :src="require('~/assets/images/Color Setting.png')"
                     />
            </v-col>
        </v-row>
        <v-row class="px-15 mx-15" id="audio">
            <v-divider></v-divider>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <h2 class="pb-10" id="animation">4. Audio Engagement</h2>
                <p>
                    The Mindful Breath tool also contains a built-in music player. 
                    A separate component was developed to keep the code as clean as 
                    possible for the file that holds the mindful breath code. The 
                    Music Player component that I built utilises 
                    <a href="https://vuetifyjs.com/en/components/bottom-sheets/#api" target="_blank">
                        <b>
                            vuetify’s bottom sheet component
                        </b>
                    </a>
                    to create a modal effect that focuses the users 
                    attention on the music player.
                </p>
            </v-col>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="6">
                <v-img
                    class="text-center"
                    contain
                    :src="require('~/assets/images/musicDesktop.png')"
                     />
            </v-col>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <p>
                    The track names and URL’s are stored in an array of objects, 
                    similar to the solution used in the Mindful Breathing breath 
                    configuration array and are shown in the code listing below.
                </p>
                <pre>
                    <code v-highlight class="javascript">
songs: [
    player: new Audio()
    {
        title: "Ambient Track 1",
        src: require(’~/assets/audio/ambient_wave.mp3’),
    }, {
        title: "Ambient Track 2",
        src: require(’~/assets/audio/Ambient_track_2.mp3’), },
    {
        title: "Underwater",
        src: require(’~/assets/audio/underwater.mp3’),
    } 
    ],
player: new Audio()
                    </code>
                </pre>
                <p>
                    I utilised the Audio() constructor class to create a HTMLAudioELement and 
                    assigned the name “player” to it. This class can be interacted with and 
                    listened to by the user. The interaction occurs via play, pause, next and 
                    previous functions. A variable called index is used to control which song is 
                    being played by incrementing the value (which is set to 0 by default) so that 
                    the next song will be played when a user clicks the next button.
                </p>
                <pre>
                    <code v-highlight class="javascript">
next () {
    this.index++;
    if (this.index > this.songs.length - 1) { this.index = 0;
    }
    this.current = this.songs[this.index]; this.play(this.current);
},
                    </code>
                </pre>
            </v-col>
        </v-row>
        <v-row class="px-15 mx-15" id="demo">
            <v-divider></v-divider>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col class="text-center">
                <h2 class="MidFi">Finished Application</h2>
            </v-col>
        </v-row>
        <v-row class="justify-center my-10" id="application">
            <v-col cols="10" md="10" class="text-center my-5">
                <h2 class="pb-10">
                    Mindful Breath Tool
                </h2>
                
                <a href="https://olearyb.gitlab.io/myuse-starter-barra/mindful_breath" target="_blank">
                    <v-btn
                        color="#665DF5"
                        class="white--text"
                    >
                        View Application
                    </v-btn>
                </a>
            </v-col>
        </v-row>

        <v-row class="px-15 mx-15">
            <v-divider></v-divider>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="4">
                <nuxt-link to="/design">
                    <p class="nav_bot"><b>Previous</b></p>
                    <h2>Designing Interactive, Skill-Building Tools to Support Student Wellbeing</h2>
                </nuxt-link>
            </v-col>
            <v-col cols="4" class="text-right">
                <nuxt-link to="/dev_values">
                    <p class="nav_bot"><b>Next</b></p>
                    <h2>Developing the Values Compass Tool</h2>
                </nuxt-link>
            </v-col>
        </v-row>
    </v-container>
</template>

<style>
.drawer {
    max-width: 220px;
}

.differ {
    color: green;
}

.context-img {
    height: 100%;
    width: 100%;
}

.lo {
    height: 50%;
}

.drawer_toc {
    padding-left: 24px;
    border-left: 2px solid #e5e5e5;
}

.MidFi {
    color: grey;
}

.papers {
    background-color: #F9F9F9;
    display: flex;
}

.obj {
    font-size: 1.5rem;
}

mark {
 background-color: rgba(102,93,245,0.2);
}

.my-nav .is-active {
  color: #665DF5 !important;
}

.nav_bot {
    color: #665DF5 !important;
}

.my-nav a {
    color: grey !important;
    padding-left: 24px;
    
}

.emoji_med {
    font-size: 3rem;
}

.sub {
    font-size: 0.95rem;
}

.pubs a {
    color: #665DF5 !important;
}

a {
    color: #665DF5 !important;
}


.promoter {
    color: #34a853;
    background-color: #d9ead3;
}

.passive {
    color: #bf9000;
    background-color: #ffe599;
}

.my-nav a:hover {
    text-decoration: none;
    color: #665DF5 !important;
}

.v-list-item.toc {
    border-left: 2px solid #e5e5e5;
    margin-left: 24px;
}

.sus {
    color: #665DF5;
}

.highlight {
    background-color: #F9F9F9
}

.javascript {
    background-color: #011627 !important;
    color: white !important;
}

.html {
    background-color: #011627 !important;
    color: white !important;
}



</style>