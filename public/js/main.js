import { login_email, login_otp } from './api.js';

const UUIDv4 = function b(a) { return a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b) }

// ------------------------------
// on load
$(document).ready(function () {
	$("#modal_load").load("modal.html");
	start_page();
});

// ------------------------------
async function start_page() {
	//hide otp fields
	hide_otp();
}

// ------------------------------
function hide_otp() {
	console.log(document.getElementById("show_otp"));
	var show_otp = document.getElementById("show_otp");
	if (show_otp.style.display === "none") {
		show_otp.style.display = "block";
	} else {
		show_otp.style.display = "none";
	}
};

// ------------------------------
// event handlers
$("#send_otp").click(function () {
	console.log("send_otp");
	login_email();
	hide_otp();
});

$("#login").click(function () {
	console.log("login");
	login_otp();
});

