<template>
  <div>
    <h3 class="text-center">Student Registration Form</h3>
    <form @submit.prevent="submitdata" class="admissionform">
      <label for="firstName"
        >First Name : <span class="required">*</span></label
      >
      <input
        id="firstName"
        class="w-100"
        type="text"
        v-model="student.Name.firstName"
        @blur="v$.student.Name.firstName.$touch"
      />
      <span class="text-danger" v-if="v$.student.Name.firstName.$error">
        <small>First Name is required</small>
      </span>
      <br /><br />
      <label for="mname">Middle Name :<span class="required">*</span></label>
      <input
        id="mname"
        class="w-100"
        type="text"
        v-model="student.Name.middleName"
        @blur="v$.student.Name.middleName.$touch"
      />
      <span class="text-danger" v-if="v$.student.Name.middleName.$error">
        <small>Middle Name is required</small>
      </span>
      <br /><br />
      <label for="lname">Last Name :<span class="required">*</span></label>
      <input
        id="lname"
        class="w-100"
        type="text"
        v-model="student.Name.lastName"
        @blur="v$.student.Name.lastName.$touch"
      />
      <span class="text-danger" v-if="v$.student.Name.lastName.$error">
        <small>Last Name is required</small>
      </span>
      <br /><br />
      <label for="dob">Date of Birth : <span class="required">*</span> </label>
      <input
        id="dob"
        class="w-100"
        type="date"
        v-model="student.DOB"
        @blur="v$.student.DOB.$touch"
      />
      <span class="text-danger" v-if="v$.student.DOB.$error">
        <small>Date of Birth is required</small>
      </span>
      <br /><br />
      <label for="pob">Place of Birth : </label>
      <input
        id="pob"
        class="w-100"
        type="text"
        v-model="student.place_of_birth"
      />
      <br /><br />
      <label for="flang">First Language : </label>
      <input
        id="flang"
        class="w-100"
        type="text"
        v-model="student.first_language"
      />
      <br /><br />
      <label for="city">City : </label>
      <input
        id="city"
        class="w-100"
        type="text"
        v-model="student.Address.City"
      />
      <br /><br />
      <label for="state">State : </label>
      <input
        id="state"
        class="w-100"
        type="text"
        v-model="student.Address.State"
      />
      <br /><br />
      <label for="country">Country : </label>
      <input
        id="country"
        class="w-100"
        type="text"
        v-model="student.Address.Country"
      />
      <br /><br />
      <label for="pin">Pin Code: </label>
      <input
        id="pin"
        class="w-100"
        type="text"
        v-model="student.Address.Pin"
      /><br />
      <br /><br />
      <h3>Fathers details</h3>
      <label for="ffirstname"
        >First Name : <span class="required">*</span></label
      >
      <input
        id="ffirstname"
        class="w-100"
        type="text"
        v-model="student.FathersDetails.FatherName.ffirstname"
        @blur="v$.student.FathersDetails.FatherName.ffirstname.$touch"
      />
      <span
        class="text-danger"
        v-if="v$.student.FathersDetails.FatherName.ffirstname.$error"
      >
        <small>Fathers Name is required</small>
      </span>
      <br /><br />
      <label for="fmiddlename">Middle Name : </label>
      <input
        id="fmiddlename"
        class="w-100"
        type="text"
        v-model="student.FathersDetails.FatherName.fmiddlename"
      />
      <br /><br />
      <label for="flastname">Last Name : </label>
      <input
        id="flastname"
        class="w-100"
        type="text"
        v-model="student.FathersDetails.FatherName.flastname"
      />
      <br /><br />
      <label for="femail">Email : </label>
      <input
        id="femail"
        class="w-100"
        type="email"
        v-model="student.FathersDetails.femail"
        @blur="v$.student.FathersDetails.femail.$touch"
      />
      <span class="text-danger" v-if="v$.student.FathersDetails.femail.$error">
        <small>Enter Valid Email</small>
      </span>
      <br /><br />
      <label for="feq">Education Qualification : </label>
      <textarea
        id="feq"
        class="w-100"
        cols="25"
        rows="3"
        v-model="student.FathersDetails.feq"
      ></textarea>
      <br /><br />
      <label for="fprof">Profession: </label>
      <input
        id="fprof"
        class="w-100"
        type="text"
        v-model="student.FathersDetails.fprof"
      />
      <br /><br />
      <label for="fdesg">Designation: </label>
      <input
        id="fdesg"
        class="w-100"
        type="text"
        v-model="student.FathersDetails.fdesg"
      />
      <br /><br />
      <label for="fphone">Phone: <span class="required">*</span></label>
      <input
        id="fphone"
        class="w-100"
        type="text"
        v-model="student.FathersDetails.fphone"
        @blur="v$.student.FathersDetails.fphone.$touch"
      />
      <span class="text-danger" v-if="v$.student.FathersDetails.fphone.$error">
        <small>Enter Valid Number</small>
      </span>
      <br /><br />

      <h3>Mothers details</h3>
      <label for="mfirstname"
        >First Name : <span class="required">*</span></label
      >
      <input
        id="mfirstname"
        class="w-100"
        type="text"
        v-model="student.MothersDetails.MotherName.mfirstname"
        @blur="v$.student.MothersDetails.MotherName.mfirstname.$touch"
      />
      <span
        class="text-danger"
        v-if="v$.student.MothersDetails.MotherName.mfirstname.$error"
      >
        <small>Mother's Name is required</small>
      </span>
      <br /><br />
      <label for="mmiddlename">Middle Name : </label>
      <input
        id="mmiddlename"
        class="w-100"
        type="text"
        v-model="student.MothersDetails.MotherName.mmiddlename"
      />
      <br /><br />
      <label for="mlastname">Last Name : </label>
      <input
        id="mlastname"
        class="w-100"
        type="text"
        v-model="student.MothersDetails.MotherName.mlastname"
      />
      <br /><br />
      <label for="memail">Email : </label>
      <input
        id="memail"
        class="w-100"
        type="email"
        v-model="student.MothersDetails.memail"
        @blur="v$.student.MothersDetails.memail.$touch"
      />
      <span class="text-danger" v-if="v$.student.MothersDetails.memail.$error">
        <small>Enter Valid Email</small>
      </span>
      <br /><br />
      <label for="meq">Education Qualification : </label>
      <textarea
        id="meq"
        class="w-100"
        cols="25"
        rows="3"
        v-model="student.MothersDetails.meq"
      ></textarea>
      <br /><br />
      <label for="mprof">Profession: </label>
      <input
        id="mprof"
        class="w-100"
        type="text"
        v-model="student.MothersDetails.mprof"
      />
      <br /><br />
      <label for="mdesg">Designation: </label>
      <input
        id="mdesg"
        class="w-100"
        type="text"
        v-model="student.MothersDetails.mdesg"
      />
      <br /><br />
      <label for="mphone">Phone: <span class="required">*</span></label>
      <input
        id="mphone"
        class="w-100"
        type="text"
        v-model="student.MothersDetails.mphone"
        @blur="v$.student.MothersDetails.mphone.$touch"
      />
      <span class="text-danger" v-if="v$.student.MothersDetails.mphone.$error">
        <small>Enter Valid Number</small>
      </span>

      <br /><br />
      <label for="enumber">Emergency Contact : </label> <br />
      <br />
      <div v-for="num in student.enumber" :key="num.relation">
        <label for="relation">Relation</label>
        <select
          name="relation"
          id="relation"
          v-model="num.relation"
          class="w-25"
        >
          <option value="">Select</option>
          <option value="Father">Father</option>
          <option value="Mother">Mother</option>
          <option value="Brother">Brother</option>
          <option value="Sister">Sister</option>
          <option value="Other">Other</option>
        </select>

        <label for="number">Number :</label>
        <input type="text" v-model="num.number" />
      </div>
      <button @click.prevent="addenumber">ADD</button>

      <br /><br />
      <label for="refthrough">Reference Through : </label>
      <select id="refthrough" class="w-100" v-model="student.refthrough">
        <option value="">Select</option>
        <option value="Online">Online</option>
        <option value="AdmissionCell">Admission Cell</option>
        <option value="Template">Template</option>
      </select>
      <br /><br />
      <label for="address">Address : </label>
      <textarea
        id="address"
        class="w-100"
        cols="25"
        rows="3"
        v-model="student.address"
      ></textarea>
      <br /><br />
      <label for="contact">Contact : <span class="required">*</span></label>
      <input
        id="contact"
        class="w-100"
        type="text"
        v-model="student.contact"
        @blur="v$.student.contact.$touch"
      />
      <span class="text-danger" v-if="v$.student.contact.$error">
        <small>Number is invalid</small>
      </span>
      <br /><br />
      <input type="submit" value="Submit" />
      <input type="reset" value="Reset" />
    </form>

    <table class="table table-responsive table-bordered">
      <caption></caption>
      <thead>
        <tr>
          <th rowspan="2" scope="">FirstName</th>
          <th rowspan="2" scope="">MiddleName</th>
          <th rowspan="2" scope="">LastName</th>
          <th rowspan="2" scope="">DOB</th>
          <th rowspan="2" scope="">Place of Birth</th>
          <th rowspan="2" scope="">First Language</th>
          <th colspan="4" scope="">Address</th>
          <th colspan="8" scope="">Fathers Details</th>
          <th colspan="8" scope="">Mothers Details</th>
          <th colspan="2" scope="">Emergency Contact</th>
          <th rowspan="2" scope="">Reference Through</th>
          <th rowspan="2" scope="">Address</th>
          <th rowspan="2" scope="">Contact</th>
        </tr>
        <tr>
          <th scope="">City</th>
          <th scope="">State</th>
          <th scope="">Country</th>
          <th scope="">Pin</th>
          <th scope="">firstName</th>
          <th scope="">middleName</th>
          <th scope="">lastName</th>
          <th scope="">Email</th>
          <th scope="">Education_q</th>
          <th scope="">profession</th>
          <th scope="">designation</th>
          <th scope="">phone</th>
          <th scope="">firstName</th>
          <th scope="">middleName</th>
          <th scope="">lastName</th>
          <th scope="">Email</th>
          <th scope="">Education_q</th>
          <th scope="">profession</th>
          <th scope="">designation</th>
          <th scope="">phone</th>
          <th scope="">Relation</th>
          <th scope="">Number</th>
        </tr>
      </thead>
      <tbody v-for="item in allentries" :key="item.Name.firstName">
        <tr>
          <td>{{ item.Name.firstName }}</td>
          <td>{{ item.Name.middleName }}</td>
          <td>{{ item.Name.lastName }}</td>
          <td>{{ item.DOB }}</td>
          <td>{{ item.place_of_birth }}</td>
          <td>{{ item.first_language }}</td>
          <td>{{ item.Address.City }}</td>
          <td>{{ item.Address.State }}</td>
          <td>{{ item.Address.Country }}</td>
          <td>{{ item.Address.Pin }}</td>
          <td>{{ item.FathersDetails.FatherName.ffirstname }}</td>
          <td>{{ item.FathersDetails.FatherName.fmiddlename }}</td>
          <td>{{ item.FathersDetails.FatherName.flastname }}</td>
          <td>{{ item.FathersDetails.femail }}</td>
          <td>{{ item.FathersDetails.feq }}</td>
          <td>{{ item.FathersDetails.fprof }}</td>
          <td>{{ item.FathersDetails.fdesg }}</td>
          <td>{{ item.FathersDetails.fphone }}</td>
          <td>{{ item.MothersDetails.MotherName.mfirstname }}</td>
          <td>{{ item.MothersDetails.MotherName.mmiddlename }}</td>
          <td>{{ item.MothersDetails.MotherName.mlastname }}</td>
          <td>{{ item.MothersDetails.memail }}</td>
          <td>{{ item.MothersDetails.meq }}</td>
          <td>{{ item.MothersDetails.mprof }}</td>
          <td>{{ item.MothersDetails.mdesg }}</td>
          <td>{{ item.MothersDetails.mphone }}</td>

          <td colspan="2">
            <ul v-for="n in item.enumber" :key="n.relation">
              <li>{{ n.relation }} : {{ n.number }}</li>
            </ul>
          </td>

          <td>{{ item.refthrough }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.contact }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

const mustbe10digit = (value) => value.match("^((\\+91-?)|0)?[0-9]{10}$");

export default {
  name: "StudentAdmissionForm",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      student: {
        Name: {
          firstName: "",
          middleName: "",
          lastName: "",
        },

        DOB: "",
        place_of_birth: "",
        first_language: "",
        Address: {
          City: "",
          State: "",
          Country: "",
          Pin: "",
        },
        FathersDetails: {
          FatherName: {
            ffirstname: "",
            flastname: "",
            fmiddlename: "",
          },
          femail: "",
          feq: "",
          fprof: "",
          fdesg: "",
          fphone: "",
        },
        MothersDetails: {
          MotherName: {
            mfirstname: "",
            mlastname: "",
            mmiddlename: "",
          },
          memail: "",
          meq: "",
          mprof: "",
          mdesg: "",
          mphone: "",
        },

        enumber: [
          {
            relation: "",
            number: "",
          },
        ],
        refthrough: "",
        address: "",
        contact: "",
      },
      allentries: [],
    };
  },
  validations() {
    return {
      student: {
        Name: {
          firstName: { required },
          middleName: { required },
          lastName: { required },
        },
        DOB: { required },
        FathersDetails: {
          FatherName: {
            ffirstname: { required },
          },
          femail: { email },
          fphone: { mustbe10digit },
        },
        MothersDetails: {
          MotherName: {
            mfirstname: { required },
          },
          memail: { email },
          mphone: { mustbe10digit },
        },
        contact: { required, mustbe10digit },
      },
    };
  },

  methods: {
    addenumber: function () {
      this.student.enumber.push({
        relation: "",
        number: "",
      });
    },

    async submitdata() {
      const isFormCorrect = await this.v$.$validate();

      if (!isFormCorrect) {
        alert("please fill all the required details");
        return;
      }

      let temp = JSON.parse(JSON.stringify(this.student));

      this.allentries.push(temp);

      console.log(this.allentries);
    },
  },
};
</script>

<style>
.required {
  color: red;
}
.admissionform {
  width: 600px;
  margin: 15px auto;
  padding: 15px;
  background: whitesmoke;
  box-sizing: border-box;
  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.4);
}
</style>