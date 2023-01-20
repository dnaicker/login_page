import { show_modal } from './modal.js';

const ngrok_url = "http://0c60-105-226-179-220.ngrok.io";

var challenge = '';

// ------------------------------
export async function login_email() {
	const data = {}

	$.ajax({
		url: `${ngrok_url}/trinsicCreateOrLoginAccount/${$("#email").val()}`,
		type: "GET",
		success: function (result) {
			console.log(result);
			challenge = result;

			//save challenge
			show_modal('One Time Pin', 'Please check email inbox for one time password sent.');
		},
		error: function(error) {
			show_modal('Error', error.responseText);
		}
	});
}

// ------------------------------
export async function login_otp() {
	const data = {}

	data['challenge'] = JSON.stringify(challenge.challenge.data);
	data['otp'] = $("#otp").val();

	console.log('send otp request',data);

	$.ajax({
		dataType: 'json',
		data: data,
		url: `${ngrok_url}/trinsicRegisterAccountChallengeString`,
		type: "POST",
		success: function (result) {
			console.log(result);
		},
		error: function(error) {
			console.log(error);
		}
	});
}