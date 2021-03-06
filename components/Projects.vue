<template>
    <div class="ma-0">
        <v-container fluid class=" ma-0 pb-10">

            <v-row class="pa-15">
                <v-divider></v-divider>
            </v-row>
            <v-row class="px-15 text-center justify-center" id="process">
                <v-col>
                    <h2>My Process</h2>
                </v-col>
            </v-row>
            <v-row class="py-15 pl-15">
                <v-col 
                    cols="12" sm="4"
                    class="pr-15"
                >
                    <h2 class="py-5">1. Research &#128269;</h2>
                    <p class="py-3">Utilising research skills, in particular: Surveys, Persona-building, Market Research and Competitor Analysis.</p>
                </v-col>
                <v-col 
                    cols="12" sm="4" 
                    class="pr-15"
                >
                    <h2 class="py-5">2. Design &#127912;</h2>
                    <p class="py-3">I favour an iterative and User-Centred Design approach to Product Design. I believe in validating design often with users and stakeholders.</p>
                </v-col>
                <v-col cols="12" sm="4"
                    class="pr-15"
                >
                    <h2 class="py-5">3. Develop &#128736;</h2>
                    <p class="py-3">Having the ability to code allows me to design with a deeper understanding of framework possibilites as well as actively developing the front end.</p>
                </v-col>
            </v-row>
            <v-row class="pa-15">
                <v-divider></v-divider>
            </v-row>
            <v-row id="design">
                <v-col class="px-15 text-center justify-center">
                    <h2>Case Studies</h2>
                </v-col>
            </v-row>
            
            <v-row 
                class="my-15 px-15 justify-center"
                :class="{'ma-15': $vuetify.breakpoint.mdAndUp}"
                >
                
                <v-col cols="12" md="5">
                    <nuxt-link to="/design">
                    <v-img
                        class="text-center img-round"
                        :src="require('~/assets/images/LowFi.png')"
                     />
                     </nuxt-link>
                </v-col>
                
                <v-col cols="12" md="5 cases">
                    <nuxt-link to="/design">
                    <h2 class="mb-5 under">
                        Designing interactive skill-building tools to support student wellbeing
                    </h2>
                    <p class="sub under">
                        I collaborated with the MyUse team of University College Cork to design a set of web tools aimed at supporting student health and wellbeing.
                    </p>
                    </nuxt-link>
                    <div class="py-2"
                    >
                            <v-chip outlined  class="ma-1 chip">
                                UX DESIGN
                            </v-chip>
                            <v-chip outlined class="ma-1">
                                SKETCH
                            </v-chip>
                            <v-chip outlined class="ma-1">
                                PROTOTYPING
                            </v-chip>
                            <v-chip outlined class="ma-1">
                                USER INTERVIEWS
                            </v-chip>
                            <v-chip outlined class="ma-1">
                                USER RESEARCH
                            </v-chip>
                        </div>
                </v-col>
            </v-row>
            
            <nuxt-link to="/dev_breath">
            <v-row 
                class="my-15 px-15  justify-center"
                :class="{'ma-15': $vuetify.breakpoint.mdAndUp}"
            >
                    <v-col cols="12" md="5">
                        <v-img
                            class="text-center img-round"
                            :src="require('~/assets/images/MB_thumb.png')"
                        />
                    </v-col>
                    <v-col cols="12" md="5">
                        <h2 class="mb-5">
                            Developing the Mindful Breath tool
                        </h2>
                        <p class="sub">
                            This case study goes into more detail about how I implemented the usability findings from the design stage.
                             This case study details the implementation and how I used front end technology to create the Mindful Breath exercise. 
                        </p>
                        <div class="py-2"
                    >
                            <v-chip outlined  class="ma-1 chip">
                                UX DESIGN
                            </v-chip>
                            <v-chip outlined class="ma-1">
                                FRONT END DEV
                            </v-chip>
                            <v-chip outlined class="ma-1">
                                VUE JS
                            </v-chip>
                            <v-chip outlined class="ma-1">
                                NUXT JS
                            </v-chip>
                            <v-chip outlined class="ma-1">
                                VUETIFY
                            </v-chip>
                        </div>
                    </v-col>
                
            </v-row>
            </nuxt-link>
            <nuxt-link to="/dev_values">
            <v-row 
                class="my-15 px-15  justify-center"
                :class="{'ma-15': $vuetify.breakpoint.mdAndUp}"
            >
                <v-col cols="12" md="5">
                    <v-img
                        class="text-center img-round"
                        :src="require('~/assets/images/VC_thumb.png')"
                     />
                </v-col>
                <v-col cols="12" md="5">
                    <h2 class="mb-5">
                        Developing the Values Compass tool
                    </h2>
                    <p class="sub">
                            This case study goes into more detail about how I implemented the usability findings from the design stage.
                             This case study details the implementation and how I used front end technology to create the Values Compass tool. 
                    </p>
                    <div class="py-2"
                    >
                            <v-chip outlined  class="ma-1 chip">
                                UX DESIGN
                            </v-chip>
                            <v-chip outlined class="ma-1">
                                FRONT END DEV
                            </v-chip>
                            <v-chip outlined class="ma-1">
                                VUE JS
                            </v-chip>
                            <v-chip outlined class="ma-1">
                                NUXT JS
                            </v-chip>
                            <v-chip outlined class="ma-1">
                                VUETIFY
                            </v-chip>
                        </div>
                </v-col>
            </v-row>
            </nuxt-link>
            <v-row class="px-10">
                <v-divider></v-divider>
            </v-row>
            <!--<v-row class="text-center justify-center">
                <v-col>
                    <p>DEVELOPMENT</p>
                </v-col>
            </v-row>
            <v-row justify="center" class="mind_img">
                <v-col cols="12" sm="8" class="pa-10">
                    <v-img
                        class="text-center img"
                        :src="require('~/assets/images/Breath_Main.png')"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="12" sm="6" offset-md="4" class="pa-10">
                    <div class="px-8 py-5 project_blurb white">
                        <p>MyUse</p>
                        <h2 class="pb-2">Mindful Breath</h2>
                        <p class="desc">
                            A mindful breathing tool as part of a larger health and
                            wellness platform for university students in Ireland.
                        </p>
                        <!--<div>
                            <v-chip  class="ma-1 chip">
                                <label>WEB</label>
                                
                            </v-chip>
                            <v-chip  class="ma-1">
                                MOBILE
                            </v-chip>
                            <v-chip  class="ma-1">
                                UCD
                            </v-chip>
                            <v-chip  class="ma-1">
                                VUE.JS
                            </v-chip>
                            <v-chip  class="ma-1">
                                UX
                            </v-chip>
                            <v-chip  class="ma-1">
                                USER RESEARCH
                            </v-chip>
                        </div>
                        <div class="view_main">
                            <hr class="preview_link"><label class="view"><b>VIEW PROJECT</b></label>
                        </div>
                    </div>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row justify="center" class="mind_img">
                <v-col cols="12" sm="8" class="pa-10 ">
                    <v-img
                        class="text-center"
                        :src="require('~/assets/images/VC_Main.png')"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="12" sm="6" offset-md="4" class="pa-10">
                    <div class="px-8 py-5 project_blurb white">
                        <p>MyUse</p>
                        <h2>Values Compass</h2>
                        <p>
                            The values compass web application is a responsive, mobile-first 
                            tool for university students to evaluate different domains of life.
                        </p>
                        <p>
                            This tool is part of a larger student wellbeing website being rolled out in 2021.
                        </p>
                    </div>
                </v-col>
            </v-row>-->
        </v-container>
        <v-container>
            <v-row class=" my-10 px-15 text-center justify-center" id="research">
                <v-col class="text-center justify-center">
                    <h2>About Me</h2>
                </v-col>
            </v-row>
             <v-row class=" px-15 text-center justify-center">
                <v-col cols="12" md="8">
                    <p class="text-center">
                    Currently I work as a <b>UX researcher</b> and <b>Project Manager </b> (as well as assisting the lead <b>UX Designer</b>)
                        for <a href="https://www.testbirds.com/" target="_blank"><b>Testbirds</b></a> where
                        I collaborate with clients on a range of UX research studies. I use the following research approaches 
                        to help clients at different stages of their research and development cycles:</p>
                </v-col>
            </v-row>
            <v-row class="my-5 px-15 text-center justify-center">
                <v-col cols="12" md="8">
                    <div class="py-2 text-center"
                    >
                            <v-chip outlined  class="ma-1 chip">
                                USER INTERVIEWS
                            </v-chip>
                            <v-chip outlined class="ma-1">
                                REMOTE USABILITY STUDIES
                            </v-chip>
                            <v-chip outlined class="ma-1">
                                DIARY STUDIES
                            </v-chip>
                            <v-chip outlined class="ma-1">
                                COMPETITOR ANALYSIS
                            </v-chip>
                            <v-chip outlined class="ma-1">
                                PROTOTYPE EVALUATION
                            </v-chip>
                            <v-chip outlined class="ma-1">
                                USER RESEARCH
                            </v-chip>
                        </div>
                </v-col>
            </v-row>
            <v-row class="mt-5 px-15 text-center justify-center">
                <v-col cols="12" md="8">
                    <p 
                        class="py-2 text-center"
                    >
                        Some of the clients that I have had the opportunity of working with include:
                    </p>
                </v-col>
            </v-row>
             <v-row class="mx-10 px-10 text-center justify-center">
                 <v-col cols="12" md="8">
                <ul class="clients justify-center pb-10">
                    <li class="clients_item">
                        <v-img
                        class="text-center svg"
                        :src="require('~/assets/images/clients/huawei.svg')"
                     />
                    </li>
                    <li>
                        <v-img
                        class="text-center svg"
                        :src="require('~/assets/images/clients/Philips.svg')"
                     />
                    </li>
                    <li>
                        <v-img
                        class="text-center svg"
                        :src="require('~/assets/images/clients/F1.svg')"
                     />
                    </li>
                    <li>
                        <v-img
                        class="text-center svg"
                        :src="require('~/assets/images/clients/DAZN.svg')"
                     />
                    </li>
                    <li>
                        <v-img
                        class="text-center svg"
                        :src="require('~/assets/images/clients/TV2.svg')"
                     />
                    </li>
                </ul>
                <v-divider class="pb-10"></v-divider>
                </v-col>
            </v-row>
            <v-row class="px-15 text-center justify-center">
                <v-col cols="12" md="4">
                    <h2 class="py-5">Tools</h2>
                    <p>
                        Figma, Sketch
                    </p>
                    <p>
                        VueJS, NuxtJS
                    </p>
                    <p>
                        HTML, CSS
                    </p>
                    <p>
                        Adobe Suite (Ps, Ai, Id)
                    </p>
                    <p>
                        JIRA, Confluence
                    </p>
                </v-col>
                <v-col cols="12" md="4">
                    <h2 class="py-5">Skills</h2>
                    <p>
                        UI / UX Design
                    </p>
                    <p>
                        User Interviews
                    </p>
                    <p>
                        User Research
                    </p>
                    <p>
                        Workshop facilitation
                    </p>
                    <p>
                        Design Sprints
                    </p>
                </v-col>
            </v-row>
            <v-row class="mt-10 px-10 text-center justify-center">
                <v-col cols="12" md="8">
                    <v-divider class="pt-10"></v-divider>
                </v-col>
            </v-row>
            <v-row class="ma-10 px-10 text-center justify-center">
                <v-col cols="12" md="8">
                    <h2 class="py-5">Let's Connect! &#x1F517;</h2>
                    <ul class="clients social_links justify-center pb-10">
                    <li>
                        <a href="https://www.linkedin.com/in/barraoleary/" target="_blank">
                            <v-img
                            class="text-center social "
                            :src="require('~/assets/images/social/linkedin.svg')"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.behance.net/barraoleary" target="_blank">
                            <v-img
                            class="text-center social"
                            :src="require('~/assets/images/social/behance.svg')"
                            />
                     </a>
                    </li>
                    <li>
                        <a href="https://github.com/olearyb?tab=repositories" target="_blank">
                            <v-img
                            class="text-center social "
                            src="~/assets/images/social/github.svg"
                            />
                     </a>
                    </li>
                </ul>
                </v-col>
            </v-row>
            

            <!--<v-row class="mx-10 px-10 text-center justify-center">      
                <v-col cols="4" md="1" class="mx-5">
                    <v-img
                        class="text-center svg"
                        :src="require('~/assets/images/clients/huawei.svg')"
                     />
                </v-col>
                <v-col cols="4" md="1" class="mx-5">
                    <v-img
                        class="text-center svg"
                        :src="require('~/assets/images/clients/Philips.svg')"
                     />
                </v-col>
                <v-col cols="4" md="1" class="mx-5">
                    <v-img
                        class="text-center svg"
                        :src="require('~/assets/images/clients/DAZN.svg')"
                     />
                </v-col>
            </v-row>
            <v-row class="ma-10 px-10 text-center justify-center">
                <v-col cols="6" md="2">
                    <v-img
                        class="text-center ma-5 svg"
                        :src="require('~/assets/images/clients/F1.svg')"
                     />
                </v-col>
                <v-col cols="6" md="2">
                    <v-img
                        class="text-center ma-5 svg"
                        :src="require('~/assets/images/clients/TV2.svg')"
                     />
                </v-col>
            </v-row>-->
        </v-container>
    </div>
</template>

<style>
body {
    color: #000;
}

h2 {
    color: #000;
}

a {
    text-decoration: none;
}

.svg {
    width: 100%;
    height: auto;
    opacity: 0.5;
}

.svg:hover {
    opacity: 1;
}

.social {
     width: 100%;
    height: auto;
    opacity: 1;
}


.social:hover {
    opacity: 0.5;
}


ul {
    list-style: none;
    padding-left: 0 !important;
}

li {
    margin: 1.25rem;
    padding-left: 0;
}


.clients {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
}

.social_Links {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
}

.sub {
    text-decoration: none;
    color: #000;
}

.sub:hover {
     text-decoration: none;
    color: #000;
}

.cases a.under:hover {
    text-decoration: underline;
    color: #665DF5;
    cursor: pointer;
}

.nuxt-link {
    color: #000;
}

.nuxt-link-active {
    color: #000;
}


.img-round {
    border-radius: 5%;
}

.dev {
    background-color: #F8F8F8;
}

.project_blurb {
    position: relative;
   /* margin-top: -120px; */
    transform: translateY(-7.5rem);
    box-shadow: 0 1em 2em 0 rgb(0 0 0 / 30%);
}

.img {
    box-shadow: 0px 0px 31px -9px rgb(0 0 0 / 20%);
}

.chip {
    color: #000;
}

.preview_link {
    display: inline-block;
    width: 5rem;
    height: 0.3rem;
    background-color:#3376CC;
    border: none;
    outline: none;
    margin-block-start: 0;
    margin-block-end: 0;
}

.view {
    display: inline-block;
    margin-left: 1rem;
    color: #3376CC;
    font-size: 12px;
}

.view_main {
    display: flex;
    align-items: center;
    padding-top: 1rem;
}

.desc {
    font-size: 1rem;
}

</style>

<script>
export default {
    name: 'Projects'
}
</script>