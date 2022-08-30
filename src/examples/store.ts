import { defineStore } from "pinia";
import { Booking } from "./booking";

export const useBookings = defineStore("bookings", {
  state: () => ({
    bookings: [] as Booking[],
  }),
  getters: {
    numberOfBookings: state => state.bookings.length,
  },
  actions: {
    addBooking() {
      this.bookings.push({
        uid: (Math.random() * 100).toString()
      });
    },
  },
});