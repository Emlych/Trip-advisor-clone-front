document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  const openModal = document.getElementById("open-modal");
  const close = document.getElementById("close");

  //  submit element
  modalContent.addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = {
      firstname: document.getElementById("firstname").value,
      lastname: document.getElementById("lastname").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
    // const response = await axios.get("http://localhost:4000/hello", data);
    const response = await axios.post("http://localhost:4000/form", data);
    console.log(response.data);
  });

  //    Open modal with open button
  openModal.addEventListener("click", () => {
    modal.style.display = "block";
  });

  //   Close modal when click on (x)
  close.addEventListener("click", () => {
    modal.style.display = "none";
  });

  //    Close modal when click anywhere outside of modal
  //   window.addEventListener("click", (event) => {
  //     console.log("i am in the window event");
  //     if (modal.style.display == "block" && event.target !== modalContent) {
  //       modal.style.display = "none";
  //     }
  //   });
});
