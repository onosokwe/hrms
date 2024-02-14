// SET UP
function MemberApprovedAlert() {
	swal({
		closeOnClickOutside: false, closeOnEsc: false, timer: 4500,
		title: "Member Approved", text: "The member was approved successfully!",
		buttons: { confirm: true, confirm: { text: "OK", closeModal: false }, },
	});
}
function MemberDisapprovedAlert() {
	swal({
		closeOnClickOutside: false, closeOnEsc: false, timer: 4500,
		title: "Member Disapproved", text: "The member was disapproved successfully!",
		buttons: { confirm: true, confirm: { text: "OK", closeModal: false }, },
	});
}
function MemberActivatedAlert() {
	swal({
		closeOnClickOutside: false, closeOnEsc: false, timer: 4500,
		title: "Member Activated", text: "The member was activated successfully!",
		buttons: { confirm: true, confirm: { text: "OK", closeModal: false }, },
	});
}
function MemberDeactivatedAlert() {
	swal({
		closeOnClickOutside: false, closeOnEsc: false, timer: 4500,
		title: "Member Deactivated", text: "The member was deactivated successfully!",
		buttons: { confirm: true, confirm: { text: "OK", closeModal: false }, },
	});
}
function EmailExistsAlert() {
	swal({
		closeOnClickOutside: false, closeOnEsc: false, timer: 4500,
		title: "Email Exists", text: "The email has already been taken. Please try another",
		buttons: { confirm: true, confirm: { text: "OK", closeModal: false }, },
	});
}
function PasswordMismatchAlert() {
	swal({
		closeOnClickOutside: false, closeOnEsc: false, timer: 4500,
		title: "Passwords Dont Match", text: "The passwords do not match",
		buttons: { confirm: true, confirm: { text: "OK", closeModal: false }, },
	});
}
function RegistrationFailedAlert() {
	swal({
		closeOnClickOutside: false, closeOnEsc: false, timer: 4500,
		title: "Registration Failed", text: "Your registration process failed",
		buttons: { confirm: true, confirm: { text: "OK", closeModal: false }, },
	});
}
function RegistrationSuccessAlert() {
	swal({
		closeOnClickOutside: false, closeOnEsc: false, timer: 4500,
		title: "Registration Success", text: "Your registration was successful. Check your email for more info",
		buttons: { confirm: true, confirm: { text: "OK", closeModal: false }, },
	});
}
function ProfileUpdatedAlert() {
	swal({
		closeOnClickOutside: false, closeOnEsc: false, timer: 4500,
		title: "Profile Updated", text: "Your Profile was updated successfully",
		buttons: { confirm: true, confirm: { text: "OK", closeModal: false }, },
	});
}
function PaymentEmptyAlert() {
	swal({
		closeOnClickOutside: false, closeOnEsc: false, timer: 6500,
		title: "Empty Payment Details", text: "The payment details are empty. Payment could not be verified!",
		buttons: { confirm: true, confirm: { text: "OK", closeModal: false }, },
	});
}
function PayNoResponseAlert() {
	swal({
		closeOnClickOutside: false, closeOnEsc: false, timer: 6500,
		title: "No Response", text: "We could not get a response from payment gateway for verification. Please contact your admin!",
		buttons: { confirm: true, confirm: { text: "OK", closeModal: false }, },
	});
}
function PayErrorResponseAlert() {
	swal({
		closeOnClickOutside: false, closeOnEsc: false, timer: 6500,
		title: "Error Response", text: "Error response from payment gateway. Please make payment for this invoice.",
		buttons: { confirm: true, confirm: { text: "OK", closeModal: false }, },
	});
}
function PayUnsuccessfulAlert() {
	swal({
		closeOnClickOutside: false, closeOnEsc: false, timer: 6500,
		title: "Payment Unsuccessful", text: "There is an error with this payment process! Please contact your admin",
		buttons: { confirm: true, confirm: { text: "OK", closeModal: false }, },
	});
}
function PayNoUserAlert() {
	swal({
		closeOnClickOutside: false, closeOnEsc: false, timer: 6500,
		title: "User Error", text: "We could not verify the user for this payment process. Some user details are missing. Please contact your admin",
		buttons: { confirm: true, confirm: { text: "OK", closeModal: false }, },
	});
}
function PayVerifiedAlert() {
	swal({
		closeOnClickOutside: false, closeOnEsc: false, timer: 6500,
		title: "Payment Verified", text: "This payment has been verified and payment processed.!",
		buttons: { confirm: true, confirm: { text: "OK", closeModal: false }, },
	});
}
function PaySuccessAlert() {
	swal({
		closeOnClickOutside: false, closeOnEsc: false, timer: 4500,
		title: "Payment Succcessful", text: "Payment for dues completed and verified!",
		buttons: { confirm: true, confirm: { text: "OK", closeModal: false }, },
	});
}










// alerts
function ActivatedAlert() {
	swal({
		closeOnClickOutside: false, closeOnEsc: false, timer: 4500,
		title: "Activated...", text: "Activation was Successful!",
		buttons: { confirm: true, confirm: { text: "OK", closeModal: false }, },
	});
}
function DeactivatedAlert() {
	swal({
		closeOnClickOutside: false, closeOnEsc: false, timer: 4500,
		title: "Deactivated...", text: "Deactivation was Successful!",
		buttons: { confirm: true, confirm: { text: "OK", closeModal: false }, },
	});
}
function ExistAlert() {
	swal({
		closeOnClickOutside: false, closeOnEsc: false, timer: 4500,
		title: "Duplicate Entry...", text: "Please check your input and try again!",
		buttons: { confirm: true, confirm: { text: "OK", closeModal: false }, },
	});
}
function SuccessAlert() {
	swal({
		closeOnClickOutside: false, closeOnEsc: false, timer: 4500,
		title: "Action Successful...", text: "Details submitted Successfully!",
		buttons: { confirm: true, confirm: { text: "OK", closeModal: false }, },
	});
}
function FailedAlert() {
	swal({
		closeOnClickOutside: false, closeOnEsc: false, timer: 4500,
		title: "Failed Action...", text: "An error occured somewhere!",
		buttons: { confirm: true, confirm: { text: "OK", closeModal: false }, },
	});
}
function ErrorAlert() {
	swal({
		closeOnClickOutside: false, closeOnEsc: false, timer: 4500,
		title: "Error...", text: "An error occurred along the line!",
		buttons: { confirm: true, confirm: { text: "OK", closeModal: false }, },
	});
}
function EmptyAlert() {
	swal({
		closeOnClickOutside: false, closeOnEsc: false, timer: 4500,
		title: "Empty Field(s)...", text: "Please fill all fields!",
		buttons: { confirm: true, confirm: { text: "OK", closeModal: false }, },
	});
}
function RequiredAlert() {
	swal({
		closeOnClickOutside: false, closeOnEsc: false, timer: 4500,
		title: "Required Field...", text: "Please fill all required fields!",
		buttons: { confirm: true, confirm: { text: "OK", closeModal: false }, },
	});
}
function DeletedAlert() {
	swal({
		closeOnClickOutside: false, closeOnEsc: false, timer: 4500,
		title: "Deleted", text: "Deleted successfully!",
		buttons: { confirm: true, confirm: { text: "OK", closeModal: false }, },
	});
}

// passwords
function npEmptyAlert() {
	swal({
		closeOnClickOutside: false, closeOnEsc: false, timer: 4500,
		title: "Empty New Password", text: "Please choose a new password!",
		buttons: { confirm: true, confirm: { text: "OK", closeModal: false }, },
	});
}
function cnpEmptyAlert() {
	swal({
		closeOnClickOutside: false, closeOnEsc: false, timer: 4500,
		title: "Empty Confirm Password", text: "Please enter new password again!",
		buttons: { confirm: true, confirm: { text: "OK", closeModal: false }, },
	});
}
function onMismatchAlert() {
	swal({
		closeOnClickOutside: false, closeOnEsc: false, timer: 4500,
		title: "Password Error", text: "Passwords do not match!",
		buttons: { confirm: true, confirm: { text: "OK", closeModal: false }, },
	});
}
function pwSuccessAlert() {
	swal({
		closeOnClickOutside: false, closeOnEsc: false, timer: 4500,
		title: "Success!", text: "Password changed Successfully!",
		buttons: { confirm: true, confirm: { text: "OK", closeModal: false }, },
	});
}
function npSameAlert() {
	swal({
		closeOnClickOutside: false, closeOnEsc: false, timer: 4500,
		title: "Password Error!", text: "Choose a different password!",
		buttons: { confirm: true, confirm: { text: "OK", closeModal: false }, },
	});
}
function opIncAlert() {
	swal({
		closeOnClickOutside: false, closeOnEsc: false, timer: 4500,
		title: "Password Error!", text: "Current Password is Incorrect!",
		buttons: { confirm: true, confirm: { text: "OK", closeModal: false }, },
	});
}


// reports
function EmptyFoundAlert() {
	swal({
		closeOnClickOutside: false, closeOnEsc: false,
		timer: 4500, title: "Nothing Found...", text: "Your query returned an empty result!",
		buttons: { confirm: true, confirm: { text: "OK", closeModal: false }, },
	});
}
