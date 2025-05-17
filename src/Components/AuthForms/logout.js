import auth from "../../../firebase.config";
import { signOut } from "firebase/auth";

import Swal from "sweetalert2";

export const logout = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Logout me!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await signOut(auth);
      } catch (error) {
        throw new Error(error);
      }
    }
  });
};
