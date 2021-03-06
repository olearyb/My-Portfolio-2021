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
                        <a href="#context" class="scrollactive-item">Context</a>
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
                        <a href="#research" class="scrollactive-item my-0 py-0">Research</a>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item class="toc pa-0">
                <v-list-item-content class="my-0 py-0">
                    <v-list-item-title>
                        <a href="#brief" class="scrollactive-item my-0 py-0">Design Brief</a>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item class="toc pa-0">
                <v-list-item-content class="my-0 py-0">
                    <v-list-item-title>
                        <a href="#competitors" class="scrollactive-item my-0 py-0">Competitors</a>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item class="toc pa-0">
                <v-list-item-content class="my-0 py-0">
                    <v-list-item-title>
                        <a href="#wireframes" class="scrollactive-item my-0 py-0">Wireframes</a>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item class="toc pa-0">
                <v-list-item-content class="my-0 py-0">
                    <v-list-item-title>
                        <a href="#prototyping" class="scrollactive-item my-0 py-0">Prototyping</a>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item class="toc pa-0">
                <v-list-item-content class="my-0 py-0">
                    <v-list-item-title>
                        <a href="#evaluation" class="scrollactive-item my-0 py-0">Evaluation</a>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item class="toc pa-0">
                <v-list-item-content class="my-0 py-0">
                    <v-list-item-title>
                        <a href="#findings" class="scrollactive-item my-0 py-0">Findings</a>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        </scrollactive>

        <!--<scrollactive>
            <div>
                <ul >
                    <li>
                        <b>Contents</b>
                    </li>
                    <li class="drawer_toc my-0 pl-3 py-1">
                        <a href="#context" class="vue-scrollactive-item">Context</a>
                    </li>
                    <li  class="drawer_toc my-0 pl-3 py-1">
                        <a href="#challenge" class="vue-scrollactive-item">Challenge</a>
                    </li>
                    <li class="drawer_toc my-0 pl-3 py-1">
                        <a href="/design_breath/#context" class="vue-scrollactive-item">Context</a>
                    </li>
                    <li class="drawer_toc my-0 pl-3 py-1">
                        <a href="/design_breath/#context" class="vue-scrollactive-item">Context</a>
                    </li>
                </ul>
            </div>
            </scrollactive>-->
        </v-navigation-drawer>
        <v-row class="pa-10 justify-center">
            <v-col cols="10" md="8" class="text-center">
                <h2 id="title">Designing Interactive, Skill-Building Tools to Support Student Wellbeing:<br> Mindful Breathing Exercise</h2>
            </v-col>
        </v-row>
        <v-row class="justify-center" id="overview">
            <v-col cols="10" md="6" class="text-center lo">
                <v-img
                    eager
                    class="text-center"
                    :src="main_img_breath"
                     />
            </v-col>
        </v-row>
        <v-row class="justify-center mt-10">
            <v-col cols="10" md="8">
                <p><b>Project: </b>Design a set of Skill-Building Tools to support a student wellbeing app.</p>
                <p><b>Overview: </b>The skill building tools form part of a wider wellbeing platform known as MyUse. MyUse was in the Develop and Deliver phase of its product life cycle (The final 6 months of a 3 year product cycle). They had reached out to our MSc class
                 to recruit interested designer/developers. </p>
                <p><b>My Role: </b>UX Design, UI Design, Research, Ideation.</p>
                <p><b>Schedule: </b>May 2020 - July 2020</p>
                <p><b>Lessons Learned: </b>The importance of frequent stakeholder feedback and user testing. Usability testing outlined the importance of context and educating the user.</p>
                <p><b>Result: </b> Valuable user feedback to create a second iteration of designs prior to development.</p>
            </v-col>
        </v-row>
        <v-row class="justify-center text-center mb-10">
            <v-col cols="10" md="4">
                <v-btn 
                    color="#665DF5" 
                    outlined
                    @click="$vuetify.goTo('#prototypes')"
                >
                Skip to Prototype
                </v-btn>
            </v-col>
            <v-col cols="10" md="4">
                <v-btn 
                    color="#665DF5" 
                    outlined
                    @click="$vuetify.goTo('#application')"
                >
                Skip to Finished Application
                </v-btn>
            </v-col>
        </v-row>
        <v-row class="px-15 mx-15" id="context">
            <v-divider></v-divider>
        </v-row>
        <v-row 
                class="justify-center my-10"
                
            >
            <v-col cols="10" md="5"  
                :class="{'pr-15': $vuetify.breakpoint.lgAndUp}"
            >
                    <h2 class="pb-10" >
                        Context
                    </h2>
                    <p>
                        My tools would form part of a wider, student health and wellbeing web-based platform for university students in Ireland. This wellbeing platform is known as <b>MyUSe.</b> 
                        <br>
                    </p>
                    <p>
                        MyUse is a website which aims to support higher education students in making informed and more mindful decisions about substance use.<br>
                    </p>
                    <p>
                        Students are directed to use the support tools to explore how substance use may impact their life as a student, by completing an assessment 
                        and receiving personalised feedback.
                    </p>
                    <p>  
                    <b>The tools also help students learn skills for mindful decision making that align with their own personal 
                        values and long-term goals.</b> This is where my tools would fit into the overall platform. 
                    </p>
            </v-col>
            <v-col cols="12" md="3" class="px-10" 
                :class="{'px-0': $vuetify.breakpoint.lgAndUp}"
            >
                    <v-img
                        eager
                        contain
                        class="context-img"
                        :src="require('~/assets/images/Context_Flow.png')"
                     />
            </v-col>
        </v-row>
        <v-row class="px-15 mx-15">
            <v-divider></v-divider>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <h2 class="pb-10" id="challenge">The Challenge</h2>
                <p class="obj">
                    To implement a <mark><b>User-Centred Design</b></mark> approach to <mark><b>analyse the end-users needs</b></mark> and apply these to <mark><b>increase the potential engagement</b></mark> of the tool by involving the target audience in key stages of the development process
                </p>
            </v-col>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <p>The tools needed to be engaging for university students, but most importantly they needed to follow:</p>
            </v-col>
        </v-row>
        <v-row class="justify-center text-center my-10">
            <v-col cols="10" md="4">
                    <h2>1. Mobile-First Design</h2>
            </v-col>
        </v-row>
        <v-row class="justify-center my-10 py-10" align="center">
            <v-col cols="10" md="4">
                <p>This platform follows a User Centred Design process with third level students being the primary users. This meant that the main access to this PWA
                    would be via mobile devices, with desktop devices likely to be secondary. Therefore, the designs needed to be mobile-first. 
                </p>
            </v-col>
            <v-col cols="8" md="4">
                <v-img
                        eager
                        class="challenge-img"
                        :src="require('~/assets/images/Responsive.png')"
                />
            </v-col>
        </v-row>
        <v-row class="justify-center text-center my-10">
            <v-col cols="10" md="4">
                    <h2>2. Iterative Design Process</h2>
            </v-col>
        </v-row>
        <v-row class="justify-center my-10 py-10" align="center">
            <v-col cols="8" md="4">
                <v-img
                        eager
                        class="challenge-img"
                        :src="require('~/assets/images/IDP.png')"
                />
            </v-col>
            <v-col cols="10" md="4">
                <p>
                    The entire MyUse platform was built upon a larger body of research founded on a persona-building approach. As target personas had been identified, all the web tools had to
                    follow an iterative design process whereby low-mid fidelity prototypes would be tested frequently with both the project stakeholders and users. 
                </p>
            </v-col>
            
        </v-row>
        <v-row class="px-15 mx-15" id="research">
            <v-divider></v-divider>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <h2>Preliminary Research</h2>
            </v-col>
        </v-row>
        <v-row class="justify-center my-5">
            <v-col cols="10" md="8">
                <div  class="papers mb-5">
                    <div class="pa-3">
                    <p >&#128269;</p>
                </div>
                <div class="pa-3 pubs">
                    <p>The research papers that form the foundation of the target user groups of the MyUse platform and my web tools can be found via the following links:</p>
                    <p>&#128215;
                        <a href="https://cora.ucc.ie/handle/10468/6859" target="_blank">
                            A systematic review of user-centred design practices in illicit substance use interventions for higher education students
                        </a>
                    </p>
                    <p>&#128216;
                        <a href="https://scholarspace.manoa.hawaii.edu/handle/10125/64157" target="_blank">
                            The Design of a Digital Behaviour Change Intervention for Third-Level Student Illicit Substance Use: A Persona Building Approach
                        </a>
                    </p>
                    <p>&#128217;
                        <a href="https://link.springer.com/article/10.1186/s12889-019-7583-6" target="_blank">
                            A systematic review of the effectiveness of digital interventions for illicit substance misuse harm reduction in third-level students
                        </a>
                    </p>
                    
                </div>
                </div>
                
            </v-col>
        </v-row>
        <v-row class="px-15 mx-15" id="brief">
            <v-divider></v-divider>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <h2 class="pb-10">Design Brief</h2>
                <p>
                    I was given a suggestion by the project owners to design a tool inspired by a simple mindfulness exercise of being present. 
                </p>
            </v-col>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="6"
                :class="{'px-0': $vuetify.breakpoint.mdAndUp}"
            >
                    <v-img
                        eager
                        contain
                        class="challenge-img"
                        :src="require('~/assets/images/Brief.png')"
                     />
            </v-col>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col  cols="10" md="8">
                <p>As I practice mindfulness semi-regularly in my own life, 
                     I already had a similar idea in mind to the design brief that was given to me.</p>
            </v-col>
        </v-row>
        <v-row 
                class="justify-center my-10"
                
            >
            <v-col cols="10" md="4"  
                :class="{'pr-15': $vuetify.breakpoint.lgAndUp}"
                class="pt-10 "
                
            ><div></div>
                     <p>I was previously introduced to the practice of <b>Square Breathing</b>, whereby one 
                     focuses on each stage of their breath by counting an equal set of numbers. </p> 
                    <p> For example: Inhale for 5 seconds, hold for 5, exhale for 5, hold for 5 and repeat for 2 to 3 minutes. </p>
            </v-col>
            <v-col cols="10" md="4" class="px-10" 
                :class="{'px-0': $vuetify.breakpoint.lgAndUp}"
            >
                    <v-img
                        contain
                        eager
                        class="context-img"
                        :src="require('~/assets/images/lungs.png')"
                     />
            </v-col>
        </v-row>
        <v-row class="px-15 mx-15" id="competitors">
            <v-divider></v-divider>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <h2 class="pb-10">Competitor Analysis</h2>
                <p>
                    While I knew I wanted to design a web tool that was essentially a walkthrough 
                    of performing a mindful breathing exercise known as Square Breathing, the first step was to perform a competitive 
                    analysis of a handful of competitor web tools and native apps that offered something 
                    similar in terms of either breathing exercies or mindfulness in general. 
                </p>
                <p>    
                    The goal of the competitor analysis was twofold:
                    <ol>
                        <li>
                            Identify <b>Key Product Features</b> that I felt were necessary, given the characteristics identified from the Persona-building workshops (see The Challenge section above).
                        </li>
                        <li>
                            Identify areas that are lacking or could be <b>improved</b>, especially in terms of <b>interaction.</b> 
                        </li>
                    </ol>
                </p>
            </v-col>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8"
                :class="{'px-0': $vuetify.breakpoint.mdAndUp}"
            >
                    <v-img
                        class="challenge-img"
                        eager
                        :src="require('~/assets/images/Competitors.png')"
                     />
            </v-col>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <div class="highlight pa-3">
                    <p>
                        <b>Competitor Analysis Results:</b>
                    </p>
                    <p>
                        <b>Xhalr</b> and <b>Breathe</b> were the closest competitors 
                        in terms of <i>accessibility</i> (both were free) and the <i>functionaility</i> 
                        that I wanted to incorporate into my mindful breathing tool. 
                    </p>
                    <p>
                        <ul>
                            <li>&#128273;<b>Key Product Features:</b> Xhalr had a <u>pulse animation</u> while both Breathe and Xhalr had <u>adjustable breath lengths, 
                            ,dynamic instructions and audio.</u></li>
                            <li>
                                &#128309;<b>Interaction Improvements:</b> I wanted to improve and build upon Xhalr's pulse animation by
                                allowing the user to <u>manipulate</u> it, like it was a malleable blob. 
                            </li>
                        </ul>
                    </p>
                </div>
            </v-col>
        </v-row>
        <v-row class="px-15 mx-15" id="wireframes">
            <v-divider></v-divider>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                 <h2 class="pb-10" >
                        Ideation and Wireframes
                    </h2>
            </v-col>
        </v-row>
        <v-row 
                class="justify-center my-10"
                align="center"
                
            >
            <v-col cols="10" md="4"  
                :class="{'pr-15': $vuetify.breakpoint.lgAndUp}"
            >
                    <p class="pubs">
                        The ideation phase began with pen and paper. 
                        I utilised the <a href="https://designsprintkit.withgoogle.com/methodology/phase3-sketch/crazy-8s" target="_blank"><b>Crazy 8</b></a> design sprint method to 
                        generate as many ideas as possible keeping in 
                        mind the Key Product Features that I wanted to 
                        include in the first wireframes. 
                    </p>
            </v-col>
            <v-col cols="12" md="4" class="px-10" 
                :class="{'px-0': $vuetify.breakpoint.lgAndUp}"
            >
                    <v-img
                        contain
                        eager
                        class="context-img"
                        :src="require('~/assets/images/crazy_8_breath.png')"
                     />
            </v-col>
        </v-row>
        <v-row 
                class="justify-center my-10"
                align="center"
                
            >
            <v-col cols="12" md="4" class="px-10" 
                :class="{'px-0': $vuetify.breakpoint.lgAndUp}"
            >
                    <v-img
                        contain
                        eager
                        class="context-img"
                        :src="require('~/assets/images/Wireframe_V1.png')"
                     />
            </v-col>
            <v-col cols="10" md="4"  
                :class="{'pr-15': $vuetify.breakpoint.lgAndUp}"
                
            >
                    <p>
                        The first version of my wireframes were limited to the “Square Breath” 
                        main application page, with Sub Pages that represented 2 control panels 
                        (1 for the animation, 1 for the audio) and 2 informational pages where 
                        users could learn more about the breathing technique and about its benefits.
                    </p>
            </v-col>
        </v-row>
        <v-row 
                class="justify-center my-10"
                align="center"
                
            >
            <v-col cols="10" md="4"  
                :class="{'pr-15': $vuetify.breakpoint.lgAndUp}"
                
            >
                    <p>
                        With the screens defined from the user flow chart above, I created a low fidelity prototype so that I could engage stakeholders early.
                    </p>
                    <p>
                        I then presented these low fidelity Sketch prototypes to the project 
                        stakeholders (The lead UX designer, Developer and group of product owners and project managers from the Departments of Psychology and Medicine in UCC).
                    </p>
            </v-col>

            <v-col cols="12" md="4" class="px-10" 
                :class="{'px-0': $vuetify.breakpoint.lgAndUp}"
            >
                    <v-img
                        contain
                        eager
                        class="context-img"
                        :src="require('~/assets/images/wire.png')"
                     />
            </v-col>
        </v-row>
        <v-row class="px-15 mx-15" id="prototyping">
            <v-divider></v-divider>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <h2 class="pb-10">From Wireframes to Prototypes</h2>
                <p> As the overall MyUse app was primarily aimed at students aged 18-25, 
                    the majority of the users would likely not be aware of mindulness, or mindful 
                    breathing.  Therefore, it was important to provide an introduction in some way. 
                </p>
                <div class="highlight pa-3">
                    <p>
                        &#128483;
                        One of the primary pieces of stakeholder feedback that I receveived was 
                        the need for <b>User Onboarding</b> in order to give context and an introduction to the 
                        tool.
                    </p>
                </div>
            </v-col>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8"
                :class="{'px-0': $vuetify.breakpoint.mdAndUp}"
            >
                    <v-img
                        contain
                        eager
                        class="challenge-img"
                        :src="require('~/assets/images/Wireframe_V2.png')"
                     />
            </v-col>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <p class="pubs">
                    I opted for a <b>Top User Benefits</b> <a href="https://material.io/design/communication/onboarding.html#top-user-benefits-model" target="_blank">carousel</a> that would highlight the main benefits of using the tool, giving users a set of value propositions to make the benefits of this practice clear to them. 
                </p>
            </v-col>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col class="text-center">
                <h2 class="MidFi">Onboarding</h2>
            </v-col>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8"
                :class="{'px-0': $vuetify.breakpoint.mdAndUp}"
            >
                    <v-img
                        contain
                        eager
                        class="challenge-img"
                        :src="require('~/assets/images/Carousel.png')"
                     />
            </v-col>
        </v-row>
        <v-row 
                class="justify-center my-10"
                align="center"
                
            >
            <v-col cols="10" md="4"  
                :class="{'pr-15': $vuetify.breakpoint.lgAndUp}"
            >
                    <p>After going through the Value Propositions on the carousel, users were
                        brought to a page that gave prerequesite instructions in order to prepare themselves
                        for the breathing exercise. 
                    </p>
            </v-col>
            <v-col cols="8" md="3" class="px-10" 
                :class="{'px-0': $vuetify.breakpoint.lgAndUp}"
            >
                    <v-img
                        contain
                        eager
                        class="context-img"
                        :src="require('~/assets/images/Getting Started.png')"
                     />
            </v-col>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8"
                :class="{'px-0': $vuetify.breakpoint.mdAndUp}"
            ><p>Finally, after navigating to the main page of the application, users were presented with 
                another carousel that walked them through each stage of the breath before letting
                them practice on their own. 
            </p>
            </v-col>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="6"
                :class="{'px-0': $vuetify.breakpoint.mdAndUp}"
            >
                    <v-img
                        contain
                        eager
                        class="challenge-img"
                        :src="require('~/assets/images/Onboarding_walkthrough.png')"
                     />
            </v-col>
        </v-row>
        <v-row class="px-15 mx-15" id="evaluation">
            <v-divider></v-divider>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col class="text-center">
                <h2 class="MidFi">Low-Mid Fidelity Prototype</h2>
            </v-col>
        </v-row>
        <v-row class="justify-center my-10" id="prototypes">
            <v-col cols="10" md="10" class="text-center my-5">
                <h2 class="pb-10">
                    Mindful Breath - Version 1
                </h2>
                
                <a href="https://www.sketch.com/s/9e8ec0ab-02cc-4ade-9406-1a53d0227b96/a/GKRZbE/play" target="_blank">
                    <v-btn
                        color="#665DF5"
                        class="white--text"
                    >
                        Prototype (Desktop)
                    </v-btn>
                </a>
            </v-col>
        </v-row>
        <v-row class="px-15 mx-15" id="evaluation">
            <v-divider></v-divider>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <h2 class="pb-10">Evaluation</h2>
                <p>
                    I recruited 4 students from my MSc class as they fell into the target demographic of being in the age range of 18-25 and were current university students.  
                </p>
            </v-col>
        </v-row>
        <v-row 
                class="justify-center my-10"
                align="center"
                
            >
            <v-col cols="10" md="3" class="pubs"
                :class="{'pr-15': $vuetify.breakpoint.lgAndUp}"
                
            >
                    <p>
                        These 4 participants would take part in a 45 minute <a href="https://www.nngroup.com/articles/thinking-aloud-the-1-usability-tool/" target="_blank"><b>Thinking Aloud</b></a> study via Microsoft Teams, while navigating through a mid fidelity prototype of each tool that I was designing. This was acheived by sharing my prototypes via Sketch Cloud with the participant, and asking them to share their screen while they use it.
                    </p>
            </v-col>
            <v-col cols="12" md="5" class="px-10" 
                :class="{'px-0': $vuetify.breakpoint.lgAndUp}"
            >
                    <v-img
                        contain
                        eager
                        class="context-img"
                        :src="require('~/assets/images/Sessions.png')"
                     />
            </v-col>
            
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <div class="highlight pa-3 pubs">
                    <p><b>Why did I use only 4 participants?</b></p>

                    <p>
                        <ul>
                            <li>
                                &#128260; As I was following an iterative design process, it was more important for me to test designs frequently 
                                without wasting resources.
                            </li>
                            <li>
                                &#128196; According to <a href="https://dl.acm.org/doi/10.1145/169059.169166" target="_blank">Nielsen and Landauer</a> (1993), having more than 5 users to get usability feedback on a particular design 
                                will result in diminsihing returns as extra users will simply find the same issues.
                            </li>
                        </ul>  
                    </p>
                </div>
            </v-col>
        </v-row>
        <v-row 
                class="justify-center my-10"
                align="center"
                
            >
            <v-col cols="10" md="4"
                :class="{'px-0': $vuetify.breakpoint.lgAndUp}"
            >
                    <v-img
                        contain
                        eager
                        class="context-img"
                        :src="require('~/assets/images/Miro1.png')"
                     />
            </v-col>
            <v-col cols="10" md="4"  
                :class="{'pr-15': $vuetify.breakpoint.lgAndUp}"
                
            >
                    <p>
                        At the beginning of the call, I asked each participant <b>5 pre-test questions</b> to assess their internet usage, 
                        favourite apps, if they use health apps or websites and if they were familiar with mindfulness. 
                    </p>
                    <p>
                        The responses to these questions gave me important information that would determine
                        design decisions in my second iteration.  
                    </p>
            </v-col>
        </v-row>
        <v-row class="justify-center my-5">
            <v-col cols="10" md="4">
                <div  class="papers mb-5">
                    <div class="pa-3">
                        <p class="emoji_med">&#128241;</p>
                    </div>
                    <div class="pa-3 pubs">
                        <p>
                            <b>3/4</b> users use their <b>smartphone</b> to browse the web.
                        </p>
                        <p>
                            <i class="sub">This underlined the need of the design to follow a <b>Mobile-First</b> approach.</i>
                        </p>
                    </div>
                </div>
            </v-col>
            <v-col cols="10" md="4">
                <div  class="papers mb-5">
                    <div class="pa-3">
                        <p class="emoji_med">&#129496;</p>
                    </div>
                    <div class="pa-3 pubs">
                        <p>
                            Only <b>2/4</b> users had heard of <b>mindfulness</b>.
                        </p>
                        <p>
                        <i class="sub">This added to the feedback from stakeholders that
                            users would likely need more <b>context</b> before using the tool. 
                        </i>
                        </p>
                    </div>
                </div>
                
            </v-col>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <p>All sessions were recorded and my lead UX developer took notes.
                    I used both the notes along with the session recordings to create 
                    an 'Issues List'. Issues in this sense meant Usability Issues / Feedback. 
                    I created a spreadsheet on Google Sheets to keep track of each pain point 
                     that participants had. I created a simmilar spreadhseet for positive feedback 
                     in order to know what to retain for the next design iteration. 
                </p>
                <p>From this Issues List, I created a table of pain points along with the number of encounters
                    (the number of times it was mentioned by a user). As the Thinking Aloud study had just 4 participants,
                     the maximum number of encounters each pain point could have was 4. Those with 4 encounters were then given priority
                      in my next design iteration.
                </p>
            </v-col>
        </v-row>
        <v-row class="justify-center" id="overview">
            <v-col cols="10" md="6" class="text-center">
                
                <v-img
                    contain
                    eager
                    class="text-center"
                    :src="require('~/assets/images/Excel5.png')"
                     />
            </v-col>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <p>
                    At the end of each session, participants were given a link to 2 google form surveys that I created and asked to fill them out while on the call:
                    <ul>
                        <li>- <a href="https://www.usability.gov/how-to-and-tools/methods/system-usability-scale.html" target="_blank">System Usability Scale</a></li>
                        <li>- <a href="https://www.hotjar.com/net-promoter-score/" target="_blank">Net Promoter Score</a></li>
                    </ul> 
                </p>
            </v-col>
        </v-row>
        <v-row class="px-15 my-15" id="findings">
            <v-divider></v-divider>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <h2 class="pb-10">Usability Findings</h2>
            </v-col>
        </v-row>
        <v-row 
                class="justify-center my-10"
                align="center"
                
            >
            <v-col cols="10" md="4"  
                :class="{'pr-15': $vuetify.breakpoint.lgAndUp}"
            >
                <h2 class="py-5">1. Instructions</h2>
                <p class="py-3">All 4 users wanted <b>live instructions</b> to show on screen while they did the breathing exercise, rather
                    than the instructions in a carousel that could not be returned to later.
                </p>
            </v-col>
            <v-col cols="8" md="3" class="px-10" 
                :class="{'px-0': $vuetify.breakpoint.lgAndUp}"
            >
                    <v-img
                        eager
                        contain
                        class="context-img"
                        :src="require('~/assets/images/Instruct_Quotes.png')"
                     />
            </v-col>
        </v-row>
        <v-row 
                class="justify-center my-10"
                align="center"
                
            >
            <v-col cols="8" md="3" class="px-10" 
                :class="{'px-0': $vuetify.breakpoint.lgAndUp}"
            >
                    <v-img
                        contain
                        eager
                        class="context-img"
                        :src="require('~/assets/images/Quote2.png')"
                     />
            </v-col>
            <v-col cols="10" md="4"  
                :class="{'pr-15': $vuetify.breakpoint.lgAndUp}"
            >
                <h2 class="py-5">2. Context</h2>
                <p class="py-3">
                    All 4 users were unaware of what <b>Square Breathing</b> actually was. 
                        The only definition of it within the tool was a sub page that was only accessible
                        after going through all of the onboarding.
                </p>
            </v-col>
        </v-row>
        <v-row 
                class="justify-center my-10"
                align="center"
                
            >
            <v-col cols="10" md="4"  
                :class="{'pr-15': $vuetify.breakpoint.lgAndUp}"
            >
                <h2 class="py-5">3. Information Overload</h2>
                <p class="py-3">3 out of 4 users mentioned that the prototype was <b>too text-heavy.</b> 
                        Users found this overwhelming due to the excess cognitive load.
                    </p>
            </v-col>
            <v-col cols="8" md="3" class="px-10" 
                :class="{'px-0': $vuetify.breakpoint.lgAndUp}"
            >
                    <v-img
                        contain
                        eager
                        class="context-img"
                        :src="require('~/assets/images/Text_Quotes.png')"
                     />
            </v-col>
        </v-row>
        <v-row class="px-15 mx-15">
            <v-divider></v-divider>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <p>
                    The table below shows the individual SUS scores that each test participant gave to the
                    Mid-Fidelity Prototype during <b>workshop 1</b>. The figures in the last column are the corresponding 
                    percentile ranges that are defined by <a href="https://measuringu.com/interpret-sus-score/" target="_blank">Sauro (2011).</a> The Mean SUS score (in purple after the the table)
                    is the average of all 4 SUS scores. 
                </p>
            </v-col>
        </v-row>
        <v-row class="justify-center my-10 text-center">
            <v-col cols="8" md="4" class="justify-center pb-5" >
                <v-img
                        contain
                        eager
                        class="context-img"
                        :src="require('~/assets/images/sus_1.png')"
                     />
                <p>
                    <mark class="promoter"> Promoter</mark> <mark class="passive"> Passive</mark> 
                </p>
            </v-col>
            <v-col cols="8" md="4" class="text-center">
                <p>Mean SUS Score:</p>
                <h1 class="sus"><b>77.5</b></h1>
            </v-col>
        </v-row>
        <v-row class="justify-center my-10 text-center">
            <v-col cols="8" md="4" class="justify-center pb-5" >
                <v-img
                        contain
                        eager
                        class="context-img"
                        :src="require('~/assets/images/NPS breath 1.png')"
                     />
                
            </v-col>
            <v-col cols="8" md="4" class="text-center">
                <p>NPS rating:</p>
                <h1 class="sus"><b>-25</b></h1>
            </v-col>
        </v-row>
        <v-row class="px-15 mx-15">
            <v-divider></v-divider>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <p>
                    With these usability findings in mind, along with the qualitative and quantitative feedback,
                    I was able to begin a second iteration of my designs that would undergo another round of stakeholder review before going
                     to development. In the designs below, <b>V1</b> represents the inital iterations while <b>V2</b> represents the final designs.
                </p>
            </v-col>
        </v-row>
        <v-row class="justify-center" id="overview">
            <v-col cols="10" md="8" class="text-center lo">
                <v-img
                    class="text-center"
                    eager
                    :src="require('~/assets/images/Landing_comparison.png')"
                     />
            </v-col>
        </v-row>
        <v-row class="justify-center" id="overview">
            <v-col cols="10" md="8" class="text-center lo">
                <v-img
                    class="text-center"
                    eager
                    :src="require('~/assets/images/Main pg comparison.png')"
                     />
            </v-col>
        </v-row>
        <v-row class="justify-center" id="overview">
            <v-col cols="10" md="8" class="text-center lo">
                <v-img
                    class="text-center"
                    eager
                    :src="require('~/assets/images/Sub pg comparison.png')"
                     />
            </v-col>
        </v-row>
        <v-row class="px-15 mx-15">
            <v-divider></v-divider>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <p>
                    The table below shows the individual SUS scores that each test participant gave to the
                    final application during <b>workshop 2</b>. The figures in the last column are the corresponding 
                    percentile ranges that are defined by <a href="https://measuringu.com/interpret-sus-score/" target="_blank">Sauro (2011).</a> The Mean SUS score
                     is the average of all 3* SUS scores. 
                </p>
                <p>
                    <i>* Workshop 2 only had 3 users due to participant availability.</i>
                </p>
            </v-col>
        </v-row>
        <v-row class="justify-center my-10 text-center">
            <v-col cols="8" md="4" class="justify-center pb-5" >
                <v-img
                        contain
                        eager
                        class="context-img"
                        :src="require('~/assets/images/sus_2.png')"
                     />
                <p>
                    <mark class="promoter"> Promoter</mark> <mark class="passive"> Passive</mark> 
                </p>
            </v-col>
            <v-col cols="8" md="4" class="text-center">
                <p>Mean SUS Score:</p>
                <h1 class="sus"><b>86</b></h1>
            </v-col>
        </v-row>
        <v-row class="justify-center my-10 text-center">
            <v-col cols="8" md="4" class="justify-center pb-5" >
                <v-img
                        contain
                        eager
                        class="context-img"
                        :src="require('~/assets/images/NPS values 2.png')"
                     />
                
            </v-col>
            <v-col cols="8" md="4" class="text-center">
                <p>NPS rating:</p>
                <h1 class="sus"><b>66</b></h1>
            </v-col>
        </v-row>
        <v-row class="px-15 mx-15">
            <v-divider></v-divider>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col class="text-center">
                <h2 class="MidFi">Final Production Version</h2>
            </v-col>
        </v-row>
        <v-row class="justify-center my-10" id="application">
            <v-col cols="10" md="10" class="text-center my-5">
                <h2 class="pb-10">
                    Mindful Breath Tool
                </h2>
                
                <a href="https://olearyb.gitlab.io/myuse-starter-barra/" target="_blank">
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
                <nuxt-link to="/dev_breath">
                    <p class="nav_bot"><b>Next</b></p>
                    <h2>Developing the Mindful Breath Tool</h2>
                </nuxt-link>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            main_img_breath: this.$cloudinary.image.url(
          'main_img_breath',
          {
            //gravity: 'auto:subject',
            //width: '200',
            //height: 200,
            //crop: 'fill',
          }
        )
        }
    }
}
</script>

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



</style>