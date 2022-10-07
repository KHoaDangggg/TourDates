var nameInput = document.querySelector("[name='name']");
var emailInput = document.querySelector("[name='email']");
var payment = document.querySelector("[name='payment']");
nameInput.onblur = function () {
    if (!nameInput.value) {
        nameInput.classList.add("invalid");
        nameInput.closest(".group").querySelector(".error").style.display =
            "block";
    }
};
nameInput.onfocus = function () {
    nameInput.classList.remove("invalid");
    nameInput.closest(".group").querySelector(".error").style.display = "none";
};
emailInput.onblur = function () {
    if (!emailInput.value) {
        emailInput.classList.add("invalid");
        emailInput.closest(".group").querySelector(".error").style.display =
            "block";
    }
};
emailInput.onfocus = function () {
    emailInput.classList.remove("invalid");
    emailInput.closest(".group").querySelector(".error").style.display = "none";
};
payment.onblur = function () {
    if (!payment.value) {
        payment.classList.add("invalid");
        payment.closest(".group").querySelector(".error").style.display =
            "block";
    }
};
payment.onfocus = function () {
    payment.classList.remove("invalid");
    payment.closest(".group").querySelector(".error").style.display = "none";
};

var closeBtn = document.querySelector(".close-form");
var submitBtn = document.querySelector(".submit");
closeBtn.onclick = function () {
    console.log(closeBtn);
    closeBtn.closest(".modal").style.display = "none";
};
submitBtn.onclick = function () {
    let c = 0;
    if (!nameInput.value) {
        nameInput.classList.add("invalid");
        nameInput.closest(".group").querySelector(".error").style.display =
            "block";
    } else {
        c++;
    }
    if (!emailInput.value) {
        emailInput.classList.add("invalid");
        emailInput.closest(".group").querySelector(".error").style.display =
            "block";
    } else {
        c++;
    }
    if (!payment.value) {
        payment.classList.add("invalid");
        payment.closest(".group").querySelector(".error").style.display =
            "block";
    } else {
        c++;
    }
    if (c === 3) {
        document.querySelector(".modal").style.display = "none";
    }
};
var buyBtn = document.getElementsByClassName("buy__btn");
Array.from(buyBtn).forEach(function (e) {
    e.onclick = function () {
        document.querySelector(".modal").style.display = "flex";
    };
});
