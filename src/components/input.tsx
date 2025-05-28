'use client';
import { useEffect } from 'react';

export default function SubscribeForm() {
  useEffect(() => {
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
        var handlersAdded = formContainer.classList.contains('newsletter-handlers-added');
        if (handlersAdded) continue;
        formContainer.querySelector(".newsletter-form").addEventListener("submit", submitHandler);
        formContainer.querySelector(".newsletter-back-button").addEventListener("click", resetFormHandler);
        formContainer.classList.add("newsletter-handlers-added");
      }
    `;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
      />
      <div className="newsletter-form-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <form
          className="newsletter-form"
          action="https://app.loops.so/api/newsletter-form/cm1ug0ds500axv01rauxw7wnf"
          method="POST"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <input
            className="newsletter-name-input"
            name="firstName"
            type="text"
            placeholder="First name"
            style={{
              fontFamily: 'Inter, sans-serif',
              color: '#000',
              fontSize: '14px',
              margin: '0 0 10px',
              width: '100%',
              maxWidth: '300px',
              background: '#fff',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              padding: '8px 12px',
              boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px',
            }}
          />
          <input
            className="newsletter-form-input"
            name="newsletter-form-input"
            type="email"
            placeholder="you@example.com"
            required
            style={{
              fontFamily: 'Inter, sans-serif',
              color: '#000',
              fontSize: '14px',
              margin: '0 0 10px',
              width: '100%',
              maxWidth: '300px',
              background: '#fff',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              padding: '8px 12px',
              boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px',
            }}
          />
          <button
            type="submit"
            className="newsletter-form-button"
            style={{
              background: '#0d9488',
              fontSize: '14px',
              color: '#fff',
              fontFamily: 'Inter, sans-serif',
              display: 'flex',
              width: '100%',
              maxWidth: '300px',
              height: '38px',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '9px 17px',
              borderRadius: '6px',
              fontWeight: 500,
              cursor: 'pointer',
              boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px',
            }}
          >
            Submit
          </button>
          <button
            type="button"
            className="newsletter-loading-button"
            style={{
              display: 'none',
              background: '#0d9488',
              fontSize: '14px',
              color: '#fff',
              fontFamily: 'Inter, sans-serif',
              width: '100%',
              maxWidth: '300px',
              height: '38px',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '9px 17px',
              borderRadius: '6px',
              fontWeight: 500,
              cursor: 'pointer',
              boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px',
            }}
          >
            Please wait...
          </button>
        </form>

        <div
          className="newsletter-success"
          style={{
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <p
            className="newsletter-success-message"
            style={{
              fontFamily: 'Inter, sans-serif',
              color: '#000',
              fontSize: '14px',
            }}
          >
            Thanks! I'll be in touch!
          </p>
        </div>

        <div
          className="newsletter-error"
          style={{
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <p
            className="newsletter-error-message"
            style={{
              fontFamily: 'Inter, sans-serif',
              color: '#b91c1c',
              fontSize: '14px',
            }}
          >
            Oops! Something went wrong, please try again
          </p>
        </div>

        <button
          className="newsletter-back-button"
          type="button"
          style={{
            color: '#6b7280',
            fontSize: '14px',
            fontFamily: 'Inter, sans-serif',
            margin: '10px auto',
            textAlign: 'center',
            display: 'none',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
          onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
          onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
        >
          &larr; Back
        </button>
      </div>
    </>
  );
}