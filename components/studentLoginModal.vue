<script setup lang="ts">
// interface StudentLoginModalProps {
//   signupType?: string;
// }
// const stduentLoginModalProps = defineProps<StudentLoginModalProps>();


</script>

<template>
<!-- The button to open modal -->
<label for="student-modal" class="btn modal-button">Sign Up as Student</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="student-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Studnet sign up</h3>
    <p class="py-4">fourms</p>
    <div class="modal-action">
      <label for="student-modal" class="btn">Yay!</label>
    </div>
  </div>
</div>
</template>