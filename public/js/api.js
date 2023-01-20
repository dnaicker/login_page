const ngrok_url = "http://37b5-105-224-60-90.ngrok.io";

var challenge = '';

// ------------------------------
export async function login_email() {
	const data = {}

	$.ajax({
		url: `${ngrok_url}/trinsicCreateOrLoginAccount`,
		type: "GET",
		success: function (result) {
			const arr = parse_items(result.items);
			challenge = result.auth_token;

			//save challenge
			show_modal('OTP Sent', 'Please check email address for one time password.');
		},
		error: function(error) {
			show_modal('Error', error.responseText);
		}
	});
}

// ------------------------------
export async function login_otp() {
	const data = {}

	data['challenge'] = challenge;
	data['otp'] = $("#otp").val();

	$.ajax({
		dataType: 'json',
		data: data,
		url: `${ngrok_url}/trinsicRegisterAccount`,
		type: "POST",
		success: function (result) {
			console.log(result);
		},
		error: function(error) {
			console.log(error);
		}
	});
}