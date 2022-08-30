<script lang="ts" setup>
import { useBookings } from './store';

const bookings = useBookings();
</script>

<template>
  <div class="component">
    <p>
      Current number of bookings:
      {{bookings.numberOfBookings}}
    </p>
    <button @click="bookings.addBooking()">
      Add booking
    </button>
  </div>
</template>