'use client';
import { useEffect, useState } from 'react';

export default function NiaPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const script = document.createElement('script');
    script.innerHTML = `
      function submitHandler(event) {
        event.preventDefault();
        var container = event.target.parentNode;
        var form = container.querySelector(".newsletter-form");
        var formInput = container.querySelector(".newsletter-form-input");
        var success = container.querySelector(".newsletter-success");
        var errorContainer = container.querySelector(".newsletter-error");
        var errorMessage = container.querySelector(".newsletter-error-message");
        var backButton = container.querySelector(".newsletter-back-button");
        var submitButton = container.querySelector(".newsletter-form-button");
        var loadingButton = container.querySelector(".newsletter-loading-button");

        const rateLimit = () => {
          errorContainer.style.display = "flex";
          errorMessage.innerText = "Too many signups, please try again in a little while";
          submitButton.style.display = "none";
          formInput.style.display = "none";
          backButton.style.display = "block";
        }

        var time = new Date();
        var timestamp = time.valueOf();
        var previousTimestamp = localStorage.getItem("loops-form-timestamp");

        if (previousTimestamp && Number(previousTimestamp) + 60000 > timestamp) {
          rateLimit();
          return;
        }
        localStorage.setItem("loops-form-timestamp", timestamp);

        submitButton.style.display = "none";
        loadingButton.style.display = "flex";

        var nameInput = container.querySelector(".newsletter-name-input");
        var formBody = "userGroup=&mailingLists=&email="
          + encodeURIComponent(formInput.value)
          + "&firstName=" + encodeURIComponent(nameInput.value);

        fetch(event.target.action, {
          method: "POST",
          body: formBody,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((res) => [res.ok, res.json(), res])
        .then(([ok, dataPromise, res]) => {
          if (ok) {
            success.style.display = "flex";
            form.reset();
          } else {
            dataPromise.then(data => {
              errorContainer.style.display = "flex";
              errorMessage.innerText = data.message || res.statusText;
            });
          }
        })
        .catch(error => {
          if (error.message === "Failed to fetch") {
            rateLimit();
            return;
          }
          errorContainer.style.display = "flex";
          if (error.message) errorMessage.innerText = error.message;
          localStorage.setItem("loops-form-timestamp", '');
        })
        .finally(() => {
          formInput.style.display = "none";
          nameInput.style.display = "none";
          loadingButton.style.display = "none";
          backButton.style.display = "block";
        });
      }

      function resetFormHandler(event) {
        var container = event.target.parentNode;
        var formInput = container.querySelector(".newsletter-form-input");
        var success = container.querySelector(".newsletter-success");
        var errorContainer = container.querySelector(".newsletter-error");
        var errorMessage = container.querySelector(".newsletter-error-message");
        var backButton = container.querySelector(".newsletter-back-button");
        var submitButton = container.querySelector(".newsletter-form-button");

        success.style.display = "none";
        errorContainer.style.display = "none";
        errorMessage.innerText = "Oops! Something went wrong, please try again";
        backButton.style.display = "none";
        formInput.style.display = "flex";
        submitButton.style.display = "flex";
      }

      var formContainers = document.getElementsByClassName("newsletter-form-container");
      for (var i = 0; i < formContainers.length; i++) {
        var formContainer = formContainers[i];
        if (formContainer.classList.contains('newsletter-handlers-added')) continue;
        formContainer.querySelector(".newsletter-form").addEventListener("submit", submitHandler);
        formContainer.querySelector(".newsletter-back-button").addEventListener("click", resetFormHandler);
        formContainer.classList.add("newsletter-handlers-added");
      }
    `;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#efeee7a4] font-inter">
      <div className="relative flex flex-col md:flex-row w-full max-w-3xl bg-[#1e3b49] text-white rounded-xl overflow-hidden shadow-xl">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-[18px] cursor-pointer bg-gray-300 px-2 rounded-full text-black text- text-xl hover:text-gray-400"
        >
          ×
        </button>

        {/* Left image area */}
        <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
          <img
            src="/m.png"
            alt="Nia character"
            className="max-h-74 w-auto"
          />
        </div>

        {/* Right form area */}
        <div className="w-full md:w-1/2 p-6 flex  flex-col justify-center items-start space-y-8">
          <h2 className="text-2xl text-center font-semibold text-[#EFEEE7] leading-snug">
            Receive Weekly Check-in from Nia AI
          </h2>

          <div className="newsletter-form-container w-full">
            <form
              className="newsletter-form w-full flex flex-col space-y-3"
              action="https://app.loops.so/api/newsletter-form/cm1ug0ds500axv01rauxw7wnf"
              method="POST"
            >
              <input
                className="newsletter-name-input bg-[#ffffff49] text-[#ffffff89] outline-none  rounded px-3 py-3 text-sm"
                name="firstName"
                type="text"
                placeholder="First name"
              />
              <input
                className="newsletter-name-input bg-[#ffffff49] text-[#ffffff89] outline-none  rounded px-3 py-3 text-sm"
                name="newsletter-form-input"
                type="email"
                placeholder="you@example.com"
                required
              />
              <button
                type="submit"
                className="newsletter-form-button bg-[#EFEEE7] cursor-pointer text-black font-medium px-4 py-2 rounded hover:opacity-90 transition"
              >
                Subscribe
              </button>
              <button
                type="button"
                className="newsletter-loading-button hidden bg-[#EFEEE7]  text-black font-medium px-4 py-2 rounded"
              >
                Please wait...
              </button>
            </form>

            <div className="newsletter-success hidden text-green-400 mt-2 text-sm">
              Thanks! I’ll be in touch!
            </div>
            <div className="newsletter-error hidden text-red-500 mt-2 text-sm">
              <p className="newsletter-error-message">Oops! Something went wrong, please try again</p>
            </div>
            <button
              className="newsletter-back-button hidden text-sm text-gray-400 mt-2 hover:underline"
              type="button"
            >
              ← Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}