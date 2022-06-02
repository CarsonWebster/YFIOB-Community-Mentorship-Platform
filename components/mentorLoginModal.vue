<script setup lang="ts">
// interface MentorLoginModalProps {
//   signupType?: string;
// }
// const mentorLoginModalProps = defineProps<MentorLoginModalProps>();


</script>

<template>
<!-- The button to open modal -->
<label for="mentor-modal" class="btn modal-button">Sign Up as Mentor</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="mentor-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Mentor sign up</h3>
    <p class="py-4">fourms</p>
    <div class="modal-action">
      <label for="mentor-modal" class="btn">Yay!</label>
    </div>
  </div>
</div>
</template>