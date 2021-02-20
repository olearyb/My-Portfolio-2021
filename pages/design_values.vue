<template>
    <v-container>
        <v-row class="pa-10 justify-center">
            <v-col cols="10" md="8" class="text-center">
                <h2>Designing Interactive, Skill-Building Tools to Support Student Wellbeing: Values Compass</h2>
            </v-col>
        </v-row>
        <v-row class="justify-center">
            <v-col cols="10" md="8" class="text-center lo">
                <v-img
                    class="text-center"
                    :src="require('~/assets/images/LowFi.png')"
                     />
            </v-col>
        </v-row>
        <v-row class="justify-center mt-10">
            <v-col cols="10" md="8">
                <p><b>Project: </b>Design a set of Skill-Building Tools to support a student wellbeing app.</p>
                <p><b>Overview: </b>The skill building tools form part of a wider wellbeing platform known as MyUse. MyUse was in the Develop and Deliver phase of its product life cycle (The final 6 months of a 3 year product cycle). THey had reached out to our MSc class
                 to recruit interested designer/developers. </p>
                <p><b>My Role: </b>UX Design, UI Design, Research, Ideation.</p>
                <p><b>Schedule: </b>May 2020 - July 2020</p>
                <p><b>Lessons Learned: </b>The need to understand the full technology stack and design systems that are being used by overall platforms. This understanding was critical in designing efficiently and within the bounds of
                what was possible and achievable within a particular technology stack. The importance of frequent feedback from stakeholders as well as from the target users. </p>
            </v-col>
        </v-row>
        <v-row class="justify-center text-center mb-10">
            <v-col cols="10" md="8">
                <v-btn 
                    color="#665DF5" 
                    outlined
                    @click="$vuetify.goTo('#prototypes')"
                >
                Skip to Prototype
                </v-btn>
            </v-col>
        </v-row>
        <v-row class="px-15 mx-15">
            <v-divider></v-divider>
        </v-row>
        <v-row 
                class="justify-center my-10"
            >
            <v-col cols="10" md="4"  
                :class="{'pr-15': $vuetify.breakpoint.lgAndUp}"
            >
                    <h2 class="pb-10">
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
            <v-col cols="6" md="4" class="px-10" 
                :class="{'px-0': $vuetify.breakpoint.lgAndUp}"
            >
                    <v-img
                        contain
                        class="context-img"
                        :src="require('~/assets/images/Context_FlowL.png')"
                     />
            </v-col>
        </v-row>
        <v-row class="px-15 mx-15">
            <v-divider></v-divider>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <h2 class="pb-10">The Challenge</h2>
                <p>The tools needed to be engaging for university students, but most importantly they needed to follow:</p>
            </v-col>
        </v-row>
        <v-row class="justify-center my-10" align="center">
            <v-col cols="10" md="4">
                    <h2>1. a <b>Mobile-First Design</b></h2>
            </v-col>
            <v-col cols="8" md="4">
                <v-img
                        class="challenge-img"
                        :src="require('~/assets/images/Responsive.png')"
                />
            </v-col>
        </v-row>
        <v-row class="justify-center">
            <v-col cols="10" md="8">
                <p>This platform follows a User Centred Design process with third level students being the primary users. This meant that the main access to this PWA
                    would be via mobile devices, with desktop devices likely to be secondary. Therefore, the designs needed to be mobile-first. 
                </p>
            </v-col>
        </v-row>
        <v-row class="justify-center my-10" align="center">
            <v-col cols="10" md="4">
                <h2>2. an <b>Iterative Design Process.</b></h2>
            </v-col>
            <v-col cols="8" md="4">
                 <v-img
                        class="challenge-img"
                        :src="require('~/assets/images/IDP.png')"
                />
            </v-col>
        </v-row>
        <v-row class="justify-center my-5">
            <v-col cols="10" md="8">
                <p>The entire MyUse platform was built upon a larger body of research founded on a persona-building approach. As target personas were identified, all the tools needed to
                    follow an iterative design process whereby low-mid fidelity prototypes would be tested frequently with both the project stakeholders and users. 
                </p>
                <div  class="papers my-5">
                    <div class="pa-3">
                    <p >&#128269;</p>
                </div>
                <div class="pa-3">
                    <p>The research papers that the MyUse project and in turn, my web tools are based upon can be found via the following links:</p>
                    <ul>
                        <li>https://cora.ucc.ie/handle/10468/6859</li>
                        <li>https://scholarspace.manoa.hawaii.edu/handle/10125/64157</li>
                        <li>https://link.springer.com/article/10.1186/s12889-019-7583-6</li>
                    </ul>
                </div>
                </div>
                
            </v-col>
        </v-row>
        <v-row class="px-15 mx-15">
            <v-divider></v-divider>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <h2 class="pb-10">Preliminary Research</h2>
                <p>
                    The tools needed to be engaging for University students, follow a mobile-first design and follow an Iterative Design Process.
                </p>
            </v-col>
        </v-row>
        <v-row class="px-15 mx-15">
            <v-divider></v-divider>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <h2 class="pb-10">Competitor Analysis</h2>
                <p>
                    The tools needed to be engaging for University students, follow a mobile-first design and follow an Iterative Design Process.
                </p>
            </v-col>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8"
                :class="{'px-0': $vuetify.breakpoint.mdAndUp}"
            >
                    <v-img
                        class="challenge-img"
                        :src="require('~/assets/images/Competitors.png')"
                     />
            </v-col>
        </v-row>
        <v-row class="px-15 mx-15">
            <v-divider></v-divider>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <h2 class="pb-10">Ideation and Wireframes</h2>
                <p>
                    The ideation phase began with pen and paper. I utilised the <b>Crazy 8</b> design sprint method to 
                    generate as many ideas as possible keeping in mind the Key Product Features that I wanted to 
                    include in the first wireframes. 
                </p>
            </v-col>
        </v-row>
        <v-row class="px-15 mx-15">
            <v-divider></v-divider>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <h2 class="pb-10">From Wireframes to Prototypes</h2>
                <p>
                    In terms of collaboration, we propose to use an iterative design process, by validating design concepts 
                    from low- to-high fidelity through a user-centred methodology. Low-fidelity prototypes, including sketches, 
                    storyboards and wire-frames, are encouraged to help our team of content experts, as well as the Student 
                    Advisory Group, to provide feedback as early as possible.
                </p>
            </v-col>
        </v-row>
        <v-row class="px-15 mx-15">
            <v-divider></v-divider>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col cols="10" md="8">
                <h2 class="pb-10">Evaluation</h2>
                <p>
                    In terms of collaboration, we propose to use an iterative design process, by validating design concepts 
                    from low- to-high fidelity through a user-centred methodology. Low-fidelity prototypes, including sketches, 
                    storyboards and wire-frames, are encouraged to help our team of content experts, as well as the Student 
                    Advisory Group, to provide feedback as early as possible.
                </p>
            </v-col>
        </v-row>
        <v-row class="px-15 mx-15">
            <v-divider></v-divider>
        </v-row>
        <v-row class="justify-center my-10">
            <v-col class="text-center">
                <h2 class="MidFi">Low-Mid Fidelity Prototypes</h2>
            </v-col>
        </v-row>
        <v-row class="justify-center my-10" id="prototypes">
            <v-col cols="10" md="4" class="text-center my-5">
                <h2 class="pb-10">
                    Mindful Breath
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
            
            <v-col cols="10" md="4" class="text-center my-5">
                <h2 class="pb-10">
                    Values Compass
                </h2>
                <a href="https://www.sketch.com/s/9e8ec0ab-02cc-4ade-9406-1a53d0227b96/a/qg7aV3/play" target="_blank">
                    <v-btn
                        color="#665DF5"
                        class="white--text"
                    >
                        Prototype (Mobile)
                    </v-btn>
                </a>
            </v-col>
        </v-row>
    </v-container>
</template>

<style>
.context-img {
    height: 100%;
    width: 100%;
}

.lo {
    height: 50%;
}

.challenge-img {
}
.MidFi {
    color: grey;
}

.papers {
    background-color: #F9F9F9;
    display: flex;
}

</style>