<template class='overlay'> 
<v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Log In</v-btn>
      </template>
  <form class="form">
    <v-text-field
      v-model="name"
      v-validate="'required|max:15'"
      :counter="15"
      :error-messages="errors.collect('name')"
      label="Username"
      data-vv-name="name"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      v-validate="'required|password'"
      :error-messages="errors.collect('password')"
      label="Password"
      data-vv-name="password"
      required
    ></v-text-field>
    <div>
<input type="checkbox"> Remember me
    </div>
   <br>
<v-btn @click="dialog = false">Cancel</v-btn>
    <v-btn @click="submit">Log In</v-btn>
    <v-btn @click="clear">Clear</v-btn>
  </form>
  </v-dialog>
  </v-layout>
</template>

<script>
export default {
    $_veeValidate: {
      validator: 'new'
    },

    data: () => ({
      name: '',
      email: '',
      dialog: false,
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ],
      checkbox: null,
      dictionary: {
        attributes: {
          email: 'E-mail Address'
          // custom attributes
        },
        custom: {
          name: {
            required: () => 'Name can not be empty',
            max: 'The name field may not be greater than 10 characters'
            // custom messages
          },
          select: {
            required: 'Select field is required'
          }
        }
      }
    }),

    mounted () {
      this.$validator.localize('en', this.dictionary)
    },

    methods: {
      submit () {
        this.$validator.validateAll()
      },
      clear () {
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = null
        this.$validator.reset()
      }
    }
  }
</script>

<style scoped>

.v-dialog__content .v-dialog__content--active{
  background: rgba(1,1,1,0.9)
}

.form{
  background-color: white;
  border-radius: 10px;
  height: 300px;
  padding-left: 5px;
  padding-right: 5px;
}
</style>
