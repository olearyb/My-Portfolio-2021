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
                        <a href="#data" class="scrollactive-item my-0 py-0">Storage</a>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item class="toc pa-0">
                <v-list-item-content class="my-0 py-0">
                    <v-list-item-title>
                        <a href="#dashboard" class="scrollactive-item my-0 py-0">Dashboard</a>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item class="toc pa-0">
                <v-list-item-content class="my-0 py-0">
                    <v-list-item-title>
                        <a href="#navigation" class="scrollactive-item my-0 py-0">Navigation</a>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item class="toc pa-0">
                <v-list-item-content class="my-0 py-0">
                    <v-list-item-title>
                        <a href="#keywords" class="scrollactive-item my-0 py-0">Keywords</a>
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
                    Developing the Values Compass tool
                </h2>
            </v-col>
        </v-row>
        <v-row class="justify-center" id="overview">
            <v-col cols="10" md="6" class="text-center lo">
                <v-img
                    class="text-center"
                    :src="require('~/assets/images/values main img.png')"
                     />
            </v-col>
        </v-row>
        <v-row class="justify-center mt-10">
            <v-col cols="10" md="8">
                <p><b>Project: </b>Develop an Acceptance and Commitment Therapy (ACT) based tool to be part of a larger student wellbeing application.</p>
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
                <h2 class="pb-10" >The Solution</h2>
                <p>
                    While the development of the Mindful Breath exercise that was discussed in the previous 
                    section had a single-page focus ( in terms of engagement, interaction and primary functionality, the animation page was the focal point), 
                    <mark>the Values Compass exercise was more complex in terms of the <b>navigational structure</b> and <b>storage of user inputs</b></mark>.
                </p> 
                <p>
                    The routing and inter-related page inputs that were a core part of the MyUSE project needed a 
                    framework that could accommodate this interdependent design. The routing structure that Nuxt 
                    JS provides is one of the major benefits of building a large scale, multi page application with Nuxt JS as the framework.
                    Based on the developers file tree, Nuxt will automatically generate the vue-router of each file within the pages folder. 
                    When developing the Values Compass application, it was necessary to develop a dynamic routing structure to enable inputs for specific 
                    life domains/categories. This was possible by taking advantage of Nuxt’s dynamic directories. 
                </p>
            </v-col>
        </v-row>
        <v-row class="justify-center my-10" align="center">
            <v-col cols="10" md="5">
                <p>
                    This is achieved by creating a folder and a vue file within it that was prefixed by an underscore. Keeping the name of the underscored 
                    vue file the same as the folder name allowed for nested routing. This was necessary to achieve the workflow in Figure 4.12 
                    programmatically for the user.
                </p>
            </v-col>
            <v-col cols="10" md="3">
                <v-img
                    class="text-center"
                    :src="require('~/assets/images/folderStruct.png')"
                     />
            </v-col>
        </v-row>
        <v-row class="px-15 mx-15" id="data">
            <v-divider></v-divider>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <h2 class="pb-10">1. Data Storage</h2>
                <p>
                    The values compass was adapted from worksheets provided by Russ Harris that outline the practice of what he terms the Life Compass. 
                    The Life Compass is a method of <b>self-evaluation</b> and is utilised as a practical aspect of Acceptance and Commitment Therapy. 
                </p>
                <p> 
                    In terms of the workflow, the patient (in my case, the user) would be presented with a range of 10 different life domains or life categories. 
                    They will be asked... <br> 
                    <ol type="a">
                        <li>To provide a <mark><b>keyword</b></mark> or list of keywords that help the user identify what it is that is important or meaningful to them in this life domain</li>
                        <li>To rate, from 0-10 how <mark><b>important</b></mark> those values as a whole are to them (0 = no importance, 10 = extremely)</li>
                        <li>To rate from 0-10 how <mark><b>effectively</b></mark> they are currently living by these values (0 = not at all, 10 = extremely)</li>
                        <li>To <mark><b>review</b></mark> what they have entered and <mark><b>reflect</b></mark> on these inputs</li>
                    </ol>
A <b><a href="https://vuex.vuejs.org/guide/" target="_blank">Vuex store</a></b> is used to organise both the static and dynamic data that would be used for each life domain. it was necessary to set up a store to hold the static variables and create empty variables that would hold dynamic content.
The code snippet below gives a preview of the structure of the state object that holds the life domain data in the form of an array of objects in the cards array. The snippet only displays 2 cards objects for the purpose of illustrating the structure. In order to allow for dynamic routing, I gave each life domain a numerical variable named “id”. This id would be used to direct the user to the correct set of form inputs.
                </p>
                <pre>
                    <code v-highlight class="javascript">
export const state = () => ({ cards: [
    {
        title: "Personal Growth",
        src: require("~/assets/images/values/growth.svg"), flex: 6,
        id: "1",
        keywords: [],
        importance: "",
        effectiveness: "", },
        {
        title: "Leisure",
        src: require("~/assets/images/customize.svg"), flex: 6,
        id: "2",
        keywords: [],
        importance: "",
        effectiveness: "",
    } ,...
                    </code>
                </pre>
                <p>
                    Vuex has a built in helper function called mapGetters that allowed me to map store getters to local 
                    computed properties. I utilised a two-way computed property in order to set the value from the users 
                    input to each empty variable in the store. The example below displays the implementation of both the 
                    mapGetters helper and a two-way computed property (I have displayed the effectiveness variable).
                </p>
                <pre>
                    <code v-highlight class="javascript">
computed: {
        ...mapGetters("cards", ["getCards"]), card () {
        return this.getCards.find((el) => el.id === this.id) },
        effectiveness: { get() {
        return this.card.effectiveness },
        set(effectiveness) {
        this.$store.commit("cards/updateEffectiveness", { card: this.card,
    }, },
                    </code>
                </pre>
                <p>
                    The benefit of storing the data of each card in an array is that the code of the single Vue file of the 
                    page can contain abstractions, such as the for-loop that I implemented to display the cards. The code 
                    for this is shown in the code snippet below.
                </p>
                <pre>
                    <code v-highlight class="html">
&lt;v-container fluid&gt; 
    &lt;v-row dense&gt;
        &lt;v-col
            v-for="card in getCards" :key="card.id"
            cols="12" :sm="card.flex"
            xs="1"
            &gt;
            &lt;v-card class="pa-5"&gt;
                &lt;v-img :src="card.src"&gt;&lt;/v-img&gt; 
                &lt;v-card-title
                    class="title"
                    v-text="card.title" 
                &gt;&lt;/v-card-title&gt;
                &lt;v-row class="card_footer pl-2"&gt;
        &lt;v-col&gt;
        &lt;nuxt-link :to="‘keywords/${card.id}‘"&gt;
                    </code>
                </pre>
            </v-col>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="6">
                <v-img
                    class="text-center"
                    contain
                    :src="require('~/assets/images/cards_nomask.png')"
                     />
            </v-col>
        </v-row>
        <v-row class="px-15 mx-15" id="dashboard">
            <v-divider></v-divider>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <h2 class="pb-10">2. Values Review</h2>
                <p>
                    An important aspect of ACT and the Values Compass tool was to allow students to review
                    their inputs so that they could reflect on them and perhaps make goals in their life as 
                    a student. 
                </p>
                <p>
                    As the user flow for inputting data spanned multiple pages, I wanted to create 
                    a solution that limited the amount of times users had to navigate away from a page. The 
                    ideal solution was to display the most important and recognisable input data on one page. 
                    I decided to create a type of dashboard that would visually display the data that the user has entered. 
                    The first consideration for this was persistent data. For this, I used a Vuex library called 
                    Vuex-persistedstate. This allowed for the user inputs that were set to the Vuex store to persist
                    in the browser of that device. Next, it was necessary to utilise two separate libraries for the data 
                    visualisations. The first visualisation was a radar chart. A radar chart was my first choice as it allowed 
                    for an under- standable and simplified way to display different values across multiple categories. Displaying 
                    this in any other way would likely overwhelm the user and actually lead to confusion. As there were 10 potential 
                    categories, each with 2 distinct numerical values that the user would assign to them (importance and effectiveness), 
                    it was important to employ a visual that would allow personal reflection.
                </p>
                <p>
                   <b><a href="https://vue-chartjs.org/" target="_blank">Vue-chartjs</a></b> was used to implement the library that would create the 
                   radar chart component for me. The library allowed for the insertion of the radar chart component into the index file of the 
                   review page and bind data and options properties to the store data.
                </p>
                <pre>
                    <code v-highlight class="html">
 &lt;radar-chart :data="radarChartData" :options="radarChartOptions" :height="400" / &gt;
                    </code>
                </pre>
                <p>
                    The radarChartData method is declared in the computed properties and maps the data from the Vuex store to the radar chart 
                    component via the previously mentioned data binding.
                </p>
                <pre>
                    <code v-highlight class="javascript">
radarChartData() { 
    return {
        datasets: [ 
            {
                label: "Importance",
                backgroundColor: ’rgb(54, 162, 235, 0.75)’,
                data: this.getCards.map(card => card.importance),
            }, . . .
                    </code>
                </pre>
            </v-col>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="6">
                <v-img
                    class="text-center"
                    contain
                    :src="require('~/assets/images/radar.png')"
                     />
            </v-col>
        </v-row>
        <v-row class="justify-center my-10" align="center">
            <v-col cols="10" md="5">
                <p>
                    Finally, I added a set of cards that would represent a single life domain. 
                    Each card displays two radial progress bars. Each representing the importance 
                    value that the user entered for that life domain and the corresponding effectiveness value. 
                    I also added a dropdown in the form of a vuetify expand transition component that the user 
                    can interact with. Doing so will show them the list of keywords they entered as chips within 
                    the card. 
                </p>    
                
            </v-col>
            <v-col cols="10" md="3">
                <v-img
                    class="text-center"
                    contain
                    :src="require('~/assets/images/card_values.png')"
                     />
            </v-col>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <p>   
                    In the initial prototypes used during workshop 1, the cards displayed a score which 
                    was calculated by subtracting the Effectiveness Score from the Importance Score. 2 of the 4 
                    users found this score to have negative connotations and felt judged or that they needed to 
                    obtain a certain score. Following this feedback, the score was removed. 
                    In review of the Review tab content, by utilising two types of data visualisation, namely a 
                    spatial approach with the radar chart and a more low level, granular visualisation within domain-specific 
                    cards, users with different levels of spatial reasoning could be catered for. 
                    (Nielsen, 1996) That is not to say that there are only two categories of spatial reasoning, but within the scope this project, having two options seemed to benefit users based on workshop feedback.
                </p>
            </v-col>
        </v-row>
        <v-row class="px-15 mx-15" id="navigation">
            <v-divider></v-divider>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <h2 class="pb-10">3. Navigation</h2>
                <p>
                    In order to create an intuitive and easy navigational system, I opted for the use of Vuetify's 
                    <b><a href="https://vuetifyjs.com/en/components/tabs/" target="_blank">tab component</a></b> so 
                    that the user could navigate between editing their values and reviewing them. This element 
                    was validated prior to development, during the first usability workshop. In order to achieve this, 
                    I created a new layout within Nuxt JS. This layout sits on top of the existing layout that was developed 
                    by the MyUSE project. The existing MyUSE layout included a hamburger menu and MyUSE logo all within a toolbar 
                    that was position at the top of the page. My additional tabs would sit just below the fixed tool bar so that 
                    all main navigations were in close proximity.
                </p>
            </v-col>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="6">
                <v-img
                    class="text-center"
                    contain
                    :src="require('~/assets/images/tabs.png')"
                     />
            </v-col>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <pre>
                    <code v-highlight class="html">
&lt;template v-slot:extension&gt;
    &lt;v-tabs v-model="currentTab" centered grow slider -color="yellow"&gt;
    &lt;v-tab v-for="(i, index) in tabs" :key="index" :href="i.path"&gt; ((i.name))
    &lt;/v-tab&gt; &lt;/v-tabs&gt;
&lt;/template&gt;
                    </code>
                </pre>
                <pre>
                    <code v-highlight class="javascript">
export default { 
    data () {
        return { 
            tabs: [
                {
                    name: "values",
                    path: "/myuse -starter -barra/values/domains/",
                }, 
                {
                    name: "review",
                    path: "/myuse -starter -barra/values/review", 
                },
            ],
                    </code>
                </pre>
            </v-col>
        </v-row>
        <v-row class="px-15 mx-15" id="keywords">
            <v-divider></v-divider>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <h2 class="pb-10">4. Keywords</h2>
                <p>
                    Part of the Values Compass self-evaluation process as a user is to identify keywords 
                    in a specific life domain so that they can better rate the importance and effectiveness 
                    of their values, in their life currently. 
                 </p>
                 <p>   
                    While my initial solution was to simply present 
                    the user with a text box that they could enter any value into,<mark><b>the Thinking Aloud workshop 
                    revealed that 3 of the 4 participants would also like to see suggestions.</b></mark> 
                </p>
                 <p>    
                    My solution was 
                    to create a <a href="https://vuetifyjs.com/en/components/combobox/"><b>combo-box component</b></a> 
                    that would retain the users ability to type any set of characters they felt represented their values, 
                    but also gave a list of suggested keywords from <a href="https://thehappinesstrap.com/upimages/Complete_Worksheets_2014.pdf" target="_blank">Harris, 2008</a> 
                    that represented values. In total there are 58 keywords that a user can choose from. They appear within a drop-down window after the text box becomes active. As 
                    the user types, the suggestion list reduces based on the alphabetical match of what is being typed.
                </p>
            </v-col>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="6">
                <v-img
                    class="text-center"
                    contain
                    :src="require('~/assets/images/keywords_chips.png')"
                     />
            </v-col>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <pre>
                    <code v-highlight class="html">
&lt;v-col cols="12"&gt;
    &lt;p class="my-5"&gt;&lt;b&gt;Keywords&lt;/b&gt;&lt;/p&gt; 
    &lt;v-combobox
        v-model="keywords" :items="values" class="py-5"
        multiple
        label="Enter a keyword" append -icon
        chips
        deletable -chips
        search -input.sync="search"
    &gt;&lt;/v-combobox&gt; 
&lt;/v-col&gt;
                    </code>
                </pre>
                <p>
                    The semi-colon (within the combobox tags) is a shorthand way for a specific directive known as 
                    v-bind in Vue JS. This directive dynamically binds an attribute or a component 
                    property to an expression. In this case, the attribute is items and the expression 
                    is values. The values expression is an array of predefined keywords and is shown in 
                    line 5. Therefore, the code is dynamically setting the items attribute to an array of 
                    predefined strings, which allows for a dropdown list of different values.
                </p>
                <pre>
                    <code v-highlight class="javascript">
export default { 
    data () {
        return { 
            select: [], 
            values: [
                "Acceptance", 
                "Adventure", 
                "Assertiveness", 
                ...
                ... 
            ],
            search: "", 
        },
    }
                    </code>
                </pre>
            </v-col>
        </v-row>
        <v-row class="px-15 mx-15" id="demo">
            <v-divider></v-divider>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col class="text-center">
                <h2 class="MidFi">Final Application</h2>
            </v-col>
        </v-row>
        <v-row class="justify-center my-10" id="application">
            <v-col cols="10" md="10" class="text-center my-5">
                <h2 class="pb-10">
                    Values Compass Tool
                </h2>
                
                <a href="https://olearyb.gitlab.io/myuse-starter-barra/values/" target="_blank">
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
                <nuxt-link to="/">
                    <p class="nav_bot"><b>Next</b></p>
                    <h2>Homepage</h2>
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