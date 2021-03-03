<template>
    <v-container>
        <v-row class="pa-10 justify-center">
            <v-col cols="10" md="8" class="text-center">
                <h2>Designing Interactive, Skill-Building Tools to Support Student Wellbeing</h2>
            </v-col>
        </v-row>
        <v-row class="justify-center my-5 mb-10">
            <v-col class="text-center">
                <h2 class="MidFi">Select a case study</h2>
            </v-col>
        </v-row>
        <v-row class="mb-15 justify-center">
            <v-col cols="10" md="4" >
                <nuxt-link to="/design_breath">
                    <v-card>
                        <v-card-text>
                            <h2 class="pa-10 text-center justify-center">Mindful Breathing &#127788;</h2>
                            <div class="pa-5 text-center">
                                <v-btn color="#665DF5"  dark large>view case study</v-btn>
                            </div>
                        </v-card-text>
                    </v-card>
                </nuxt-link>
            </v-col>
            <v-col cols="10" md="4" >
                <nuxt-link to="/design_values_v1">
                    <v-card>
                        <v-card-text>
                            <h2 class="pa-10 text-center justify-center">Values Compass &#x1F9ED;</h2>
                            <div class="pa-5 text-center">
                                <v-btn color="#665DF5" dark large>view case study</v-btn>
                            </div>
                        </v-card-text>
                    </v-card>
                </nuxt-link>
            </v-col>
        </v-row>
        <!--<div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#665DF5" fill-opacity="0.25" d="M0,256L1440,32L1440,320L0,320Z"></path>
            </svg>
        </div>-->
        <v-row></v-row>
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