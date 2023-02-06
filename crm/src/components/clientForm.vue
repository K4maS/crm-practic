<template>

    <form action="" @submit.prevent="onClick(wantedAction)" class="creating__form window__form  form flex">
        <div class="form__names">


            <label for="lastname" class="form__label form__label-lastname">
                <p class="label-text text-gray-main">
                    Фамилия*
                </p>
                <input v-model="lastName" type="text" class="text-black-main form__input form__input-lastname"
                    placeholder="Фамилия*" required>
            </label>
            <label for="name" class="form__label form__label-name">
                <p class="label-text text-gray-main">
                    Имя*
                </p>
                <input v-model="name" type="text" class="text-black-main form__input form__input-name"
                    placeholder="Имя*" required>
            </label>
            <label for="surname" class="form__label form__label-surname">
                <p class="label-text text-gray-main">
                    Отчество
                </p>
                <input v-model="surname" type="text" class="text-black-main form__input form__input-surname"
                    placeholder="Отчество" required>
            </label>
        </div>
        <div class="form__contact-block added-paddings flex">
            <label v-for="item in contactsArr" :key="item.id" :id="'label-' + item.id" for="contact"
                class="form__contact-label flex input-group">

                <select v-model="item.type" :name="'select-contact'" class="form__select-contact">

                    <option :value="contactType.value" :name="'select-contact-' + contactType.id"
                        v-for="contactType of contactTypes" :key="contactType.id">
                        {{ contactType.value }}
                    </option>

                </select>
                <input type="text" v-model="item.value" name="contact" class="form__input-contact "
                    placeholder="Введите данные контакта" required>

                <button v-if="item.id == contactsArr.length" @click.prevent="contactFormRemove(item.id - 1)"
                    class="form__contact-remove-btn btn-reset">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_224_6681)">
                            <path
                                d="M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z"
                                fill="#B0B0B0" />
                        </g>
                        <defs>
                            <clipPath id="clip0_224_6681">
                                <rect width="16" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>

            </label>

            <button v-if="contactsArr.length < 8" @click.prevent="contactFormAdd"
                class="form__add-contact btn-reset text-black-main">
                <svg v-if="loadingProcess" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_224_4420)">
                        <path
                            d="M7.99998 4.66665C7.63331 4.66665 7.33331 4.96665 7.33331 5.33331V7.33331H5.33331C4.96665 7.33331 4.66665 7.63331 4.66665 7.99998C4.66665 8.36665 4.96665 8.66665 5.33331 8.66665H7.33331V10.6666C7.33331 11.0333 7.63331 11.3333 7.99998 11.3333C8.36665 11.3333 8.66665 11.0333 8.66665 10.6666V8.66665H10.6666C11.0333 8.66665 11.3333 8.36665 11.3333 7.99998C11.3333 7.63331 11.0333 7.33331 10.6666 7.33331H8.66665V5.33331C8.66665 4.96665 8.36665 4.66665 7.99998 4.66665ZM7.99998 1.33331C4.31998 1.33331 1.33331 4.31998 1.33331 7.99998C1.33331 11.68 4.31998 14.6666 7.99998 14.6666C11.68 14.6666 14.6666 11.68 14.6666 7.99998C14.6666 4.31998 11.68 1.33331 7.99998 1.33331ZM7.99998 13.3333C5.05998 13.3333 2.66665 10.94 2.66665 7.99998C2.66665 5.05998 5.05998 2.66665 7.99998 2.66665C10.94 2.66665 13.3333 5.05998 13.3333 7.99998C13.3333 10.94 10.94 13.3333 7.99998 13.3333Z" />
                    </g>
                    <defs>
                        <clipPath id="clip0_224_4420">
                            <rect width="16" height="16" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                Добавить контакт
            </button>
        </div>
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
                            stroke="#B89EFF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_224_6260">
                            <rect width="16" height="16" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                Сохранить</button>
            <button @click.prevent="doClose" class="form__delete-client-btn btn-reset">Отмена</button>
        </div>

    </form>

</template>

<script>
import contactTypes from '@/data/contactTypes';
import { mapActions, mapGetters } from 'vuex';


export default {
    data() {

        return {
            name: '',
            surname: '',
            lastName: '',

            contactTypes,
            contactsArr: [],
            contactsId: 0,



        }
    },
    props: {
        open: { type: Boolean },
        wantedAction: { type: String },
    },
    computed: {

    },
    methods: {
        ...mapActions(['addClients']),
        ...mapGetters([
            'loadingProcess',
            'loadingError',
            'errors',
        ]),
        onClick(action) {
            if (action == 'create') {
                this.doAddClient()
            }
            else if (action == 'change') {
                this.doChagingClient()
            }
        },
        doAddClient() {
            this.addClients({
                name: this.name,
                surname: this.surname,
                lastName: this.lastName,
                contacts: this.contactsArr
            });
            console.log(this.contactsArr)
            if (!this.loadingError) {
                this.doClose
            }
        },
        doChagingClient() {
            this.changeClients({
                id: this.id,
                name: this.name,
                surname: this.surname,
                lastName: this.lastName,
                contacts: this.contacts
            })

        },

        CreateId(arr) {
            let max = 0;
            for (const item of arr) {

                if (item.id >= max) { max = item.id; }

            }
            return max + 1;
        },
        doClose() {
            this.$emit('update:open', false);
            this.contactsArr = [];
        },
        contactFormAdd() {
            this.contactsId = this.CreateId(this.contactsArr);
            this.contactsArr.push({ id: this.CreateId(this.contactsArr), type: 'Телефон', value: '' });

        },
        contactFormRemove(labelId) {
            this.contactsArr.splice(labelId, 1);
        },


    }
}
</script>