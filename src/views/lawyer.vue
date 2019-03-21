<template>
  <div class="form">
    <v-dialog v-if="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Sign Up</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Sign Up</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="First name*" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Middle name" hint="example of helper text only on focus"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-if="dialo" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Log In</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Log In</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Email*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialo = false">Close</v-btn>

          <router-link to="/profile">
            <v-btn color="blue darken-1" flat>Save</v-btn>
          </router-link>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: "",
      isIconVisible: false,
      dialog: true,
      dialo: true
    };
  },
  computed: {
    input() {
      return this.$store.state.inputs;
    }
  },
  methods: {
    save: function() {
      let input = {
        firstName: this.input.firstName,
        lastName: this.input.lastName,
        email: this.input.email,
        phone: this.input.phone,
        birthday: this.input.birthday,
        company: this.input.company,
        jobTitle: this.input.jobTitle
      };
      this.$store.commit("addContacts", input);
      this.clear();
      this.$router.push({ name: "profile" });
    },
    clear: function() {
      this.input.firstName = "";
      this.input.lastName = "";
      this.input.email = "";
      this.input.phone = "";
      this.input.birthday = "";
      this.input.company = "";
      this.input.jobTitle = "";
    },
    showIcons() {
      this.isIconVisible = true;
    },
    hideIcons() {
      this.isIconVisible = false;
    }
  }
};
</script>

<style scoped>
.move {
  margin-left: 20px;
}
input {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: solid 1px lightgrey;
}
.mdi {
  color: grey;
  position: relative;
  right: 30px;
}
.mdi::before {
  font-size: 25px;
}
.mdi.mdi-account-circle {
  color: lightgrey;
}
.mdi.mdi-account-circle::before {
  font-size: 60px !important;
  position: relative;
  left: 17px;
  top: 10px;
}
.mdi-close-circle-outline {
  position: relative;
  left: 5px;
  cursor: pointer;
}
.text-left {
  top: 50px;
  position: relative;
  font-weight: bold;
  color: black;
  padding-left: 50px;
  margin-right: 100px;
}
.foot {
  font-weight: bold;
  color: rgb(66, 66, 187);
  cursor: pointer;
  padding-left: 10px;
}
.save {
  padding: 10px;
}
a {
  text-decoration: none;
  color: rgb(66, 66, 187);
  padding: 5rem;
}
.form {
  padding: 30rem;
}
</style>