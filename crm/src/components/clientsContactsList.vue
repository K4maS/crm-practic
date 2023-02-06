<template>
    <ul class="table__list list-style flex">

        <ClientsContactsItem :contact="contact" v-for="contact of contacts" :key="contact.value" />

        <li v-if="clientsContactsComouted.length >= 5" class="table__item item ">
            <button v-if="!allContacts" class="item__social-btn btn-reset" @click="showAllContacts">
                <div class="item__social-circle flex">
                    <p class="item__social-circle-number">+{{ clientsContactsComouted.length - 4 }}</p>
                </div>
            </button>

        </li>
    </ul>

</template>

<script>
import ClientsContactsItem from './clientsContactsItem.vue';


export default {
    data() {
        return {
            contacts: this.clientsContacts ? this.clientsContacts.slice(0, 4) : [],
            allContacts: false,
        }

    },
    components: { ClientsContactsItem },
    props: ['clientsContacts'],
    methods: {
        showAllContacts() {
            if (!this.allContacts) {
                this.contacts = this.clientsContactsComouted;
                this.allContacts = true;
            }
            else {
                this.allContacts = false;
                this.contacts = this.clientsContactsComouted.slice(0, 4);
            }

        }
    },
    computed: {
        clientsContactsComouted() {
            return this.clientsContacts ? this.clientsContacts : [];
        },
        clientsContactsSliced() {
            return this.clientsContacts ? this.clientsContacts.slice(0, 4) : [];
        },

    },

    watch: {
        clientsContacts() {
            this.contacts = this.clientsContactsSliced;
        }
    },

};
</script>