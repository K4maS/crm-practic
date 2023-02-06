<template>
    <section class="delete-client window">
        <div class="delete-client__blackout window__blackout flex" @click="onOutsideClick">
            <div class="delete-client__block window__block flex">

                <div class="delete-client__top window__top flex">
                    <div class="delete-client__top-text window__top-text flex">
                        <div class="delete-client__top-text-center-block flex">
                            <h2 class="delete-client__title window__title text-black-main">
                                Удалить клиента
                            </h2>
                            <p class="delete-client__text window__text text-black-main">
                                Вы действительно хотите удалить данного клиента?
                            </p>
                        </div>

                    </div>

                    <button class="delete-client__close-btn window__close-btn btn-reset" @click="doClose()">
                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2332 7.73333L21.2665
                                 6.76666L14.4998 13.5334L7.73318 6.7667L6.76652 7.73336L13.5332 14.5L6.76654 21.2667L7.73321 22.2333L14.4998 
                                    15.4667L21.2665 22.2334L22.2332 21.2667L15.4665 14.5L22.2332 7.73333Z" />
                        </svg>
                    </button>
                </div>
                <form action="" @submit.prevent="removeClient()" class="delete-client__form window__form  form flex">
                    <div class="form_bottom flex">
                        <p v-if="loadingError" class="form__error-message flex">
                        <ul class="form__errors-list list-style">
                            <li class="form__errors-item" v-for="error of errors" :key="error">
                                {{ error.message }}</li>
                        </ul>
                        </p>
                        <button class="form__save-btn btn btn-reset flex">
                            <svg v-if="loadingProcess" width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_224_6260)">
                                    <path
                                        d="M3.00008 8.03996C3.00008 10.8234 5.2566 13.08 8.04008 13.08C10.8236 13.08 13.0801 10.8234 13.0801 8.03996C13.0801 5.25648 10.8236 2.99996 8.04008 2.99996C7.38922 2.99996 6.7672 3.1233 6.196 3.348"
                                        stroke="#B89EFF" stroke-width="2" stroke-miterlimit="10"
                                        stroke-linecap="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_224_6260">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Удалить</button>
                        <button class="form__delete-client-btn btn-reset" @click.prevent="doClose()">Отмена</button>
                    </div>

                </form>

            </div>
        </div>
    </section>

</template>
<script>
import {
    mapGetters,
    mapMutations,
    mapActions
} from 'vuex';


export default {
    data() {
        return {
            removingData: false,
            removingDataError: false,
            errorsArr: [],
        };
    },
    props:
    {

        id: { type: String },
        open: { type: Boolean },
    },

    computed: {

        ...mapGetters([
            'loadingProcess',
            'loadingError',
            'errors',
        ]),
    },
    methods: {
        ...mapMutations(['updateClients']),
        ...mapActions(['removeClients']),
        doClose() {
            this.$emit('update:open', false);
        },
        onOutsideClick($event) {
            if ($event.target !== this.$refs.content && $event.target.contains(this.$refs.content)) {
                this.doClose();
            }
        },
        removeClient() {
            this.removeClients(this.id);
            if (!this.loadingError) this.doClose
        },
    },


}
</script>