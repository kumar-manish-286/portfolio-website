

document.addEventListener("DOMContentLoaded", () => {

    const contactSection = document.querySelector(".contact-section");

    if (!contactSection) return;




    const contactDetails = [
        {
            icon: "ph ph-phone",
            label: "Phone",
            value: "+91 7717260650",
            link: "tel:+917717260650",
            title: "Call Manish Kumar"
        },
        {
            icon: "ph ph-envelope",
            label: "Email",
            value: "mk887236286@gmail.com",
            link: "mailto:mk887236286@gmail.com",
            title: "Email Manish Kumar"
        },
        {
            icon: "ph ph-map-pin",
            label: "Location",
            value: "India",
            link: "https://www.google.com/maps/search/?api=1&query=India",
            title: "View India on Google Maps"
        }
    ];




    const contactMedia =
        contactSection.querySelector(".contact-media");

    if (contactMedia) {

        contactMedia.innerHTML = contactDetails
            .map(
                (item) => `
                    <a
                        class="contact-item"
                        href="${item.link}"
                        title="${item.title}"
                        ${item.link.startsWith("http")
                            ? 'target="_blank" rel="noopener noreferrer"'
                            : ""}
                    >
                        <span class="icon">
                            <i class="${item.icon}"></i>
                        </span>

                        <span class="contact-item-content">
                            <span class="contact-label">
                                ${item.label}
                            </span>

                            <span class="contact-value">
                                ${item.value}
                            </span>
                        </span>
                    </a>
                `
            )
            .join("");
    }




    const form = document.querySelector("#contact-form");

    if (!form) return;

    const submitButton = form.querySelector(".submit-btn");

    const nameInput = form.querySelector(
        'input[name="name"], input[name="user_name"]'
    );

    const emailInput = form.querySelector(
        'input[name="email"], input[name="user_email"]'
    );

    const subjectInput = form.querySelector(
        'input[name="subject"], input[name="user_subject"]'
    );

    const messageInput = form.querySelector(
        'textarea[name="message"], textarea[name="user_message"]'
    );



    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }




    function showToast(message, type = "success") {

        if (typeof Toastify === "undefined") {
            alert(message);
            return;
        }

        Toastify({
            text: message,
            duration: 3500,
            gravity: "top",
            position: "right",
            close: true,
            stopOnFocus: true,
            style: {
                background:
                    type === "success"
                        ? "linear-gradient(135deg, #00b894, #00a884)"
                        : "linear-gradient(135deg, #ff5f6d, #d63031)"
            }
        }).showToast();
    }



    function setButtonLoading(isLoading) {

        if (!submitButton) return;

        if (isLoading) {

            submitButton.disabled = true;

            submitButton.innerHTML = `
                <i class="ph ph-spinner-gap"></i>
                <span>Sending...</span>
            `;

        } else {

            submitButton.disabled = false;

            submitButton.innerHTML = `
                <span>Send Message</span>
                <i class="ph ph-paper-plane-tilt"></i>
            `;
        }
    }



    let isSubmitting = false;

    form.addEventListener("submit", async (event) => {

        event.preventDefault();

        if (isSubmitting) {
            return;
        }

        const name = nameInput
            ? nameInput.value.trim()
            : "";

        const email = emailInput
            ? emailInput.value.trim()
            : "";

        const subject = subjectInput
            ? subjectInput.value.trim()
            : "";

        const message = messageInput
            ? messageInput.value.trim()
            : "";


  

        if (!name) {
            showToast(
                "Please enter your name.",
                "error"
            );

            nameInput?.focus();
            return;
        }


        if (!email) {
            showToast(
                "Please enter your email address.",
                "error"
            );

            emailInput?.focus();
            return;
        }


        if (!isValidEmail(email)) {
            showToast(
                "Please enter a valid email address.",
                "error"
            );

            emailInput?.focus();
            return;
        }


        if (!message) {
            showToast(
                "Please enter your message.",
                "error"
            );

            messageInput?.focus();
            return;
        }


        if (message.length < 10) {
            showToast(
                "Please write a little more detail in your message.",
                "error"
            );

            messageInput?.focus();
            return;
        }



        isSubmitting = true;
        setButtonLoading(true);

        try {

            const response = await fetch(form.action, {
                method: form.method || "POST",
                body: new FormData(form),
                headers: {
                    Accept: "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`Form submission failed: ${response.status}`);
            }




            showToast(
                "Message sent successfully! I'll get back to you soon.",
                "success"
            );

            form.reset();


        } catch (error) {

            console.error(
                "Form submission error:",
                error
            );

            showToast(
                "Message could not be sent. Please try again.",
                "error"
            );

        } finally {

            setButtonLoading(false);
            isSubmitting = false;
        }
    });


    const inputs = form.querySelectorAll(
        "input, textarea"
    );

    inputs.forEach((input) => {

        input.addEventListener("input", () => {

            input.classList.remove("error");

            if (input.value.trim() !== "") {
                input.classList.add("has-value");
            } else {
                input.classList.remove("has-value");
            }
        });


        input.addEventListener("blur", () => {

            if (
                input.hasAttribute("required") &&
                input.value.trim() === ""
            ) {
                input.classList.add("error");
            }
        });
    });



    const phoneInput = form.querySelector(
        'input[type="tel"]'
    );

    if (phoneInput) {

        phoneInput.addEventListener(
            "input",
            () => {

                phoneInput.value =
                    phoneInput.value.replace(
                        /[^0-9+\-\s()]/g,
                        ""
                    );
            }
        );
    }


});