<script>
	const bodyPlaceholder =
		'I would like to sponsor the Holiday Traditions market. How can I make a contribution? Thank you!';

	let sentMessage = false;
	let sendingMessage = false;

	let name = '';
	let email = '';
	let subject = '';
	let message = '';

	let errorModal = 'hidden';
	let emailModal = 'hidden';
	let missedCount = 0;
	let missedText =
		'It seems that you missed a field! Please complete all fields before submitting.';

	async function sendEmail() {
		if (name == '' || email == '' || subject == '' || message == '') {
			if (name == '') {
				missedCount++;
			}
			if (email == '') {
				missedCount++;
			}
			if (subject == '') {
				missedCount++;
			}
			if (message == '') {
				missedCount++;
			}

			if (missedCount > 1) {
				missedText = `It seems that you missed ${missedCount} fields! Please complete all fields before submitting.`;
			}
			errorModal = 'modal-open';
			return new Error('Missing Field');
		}

		let isValid = false;

		for (let i = 0; i < email.length; i++) {
			if (email.charAt(i) == '@') {
				isValid = true;
			}
		}

		if (!isValid) {
			emailModal = 'modal-open';
			return new Error('Invalid Email');
		}

		sendingMessage = true;

		const formData = new FormData();

		formData.append('name', name);
		formData.append('email', name);
		formData.append('subject', name);
		formData.append('message', name);

		await fetch('/contact', {
			method: 'POST',
			body: formData
		}).then((res) => {
			if (res.status !== 200) {
				throw console.error('Something went wrong with the request!');
			} else {
				sentMessage = true;
			}
		});
	}
</script>

<div class="max-w-screen-lg mx-auto flex flex-col justify-center px-5 text-center py-7 ">
	{#if sentMessage}<p class="text-4xl font-bold text-primary mb-4">
			Message sent succesfully!
		</p>{/if}
	{#if !sentMessage}
		<p class="text-4xl font-bold text-primary mb-4">Contact Us</p>
		<div class="flex flex-row justify-center">
			<div class="form-control max-w-sm w-full ">
				<label for="name" class="label">
					<span class="">What is your name?</span>
				</label>
				<input
					bind:value={name}
					type="text"
					name="name"
					placeholder="John Smith"
					class="input input-bordered w-full max-w-sm"
				/>

				<label for="email" class="mt-2 label">
					<span class="">What is your email?</span>
				</label>
				<input
					bind:value={email}
					type="email"
					name="email"
					placeholder="johnsmith@gmail.com"
					class="input input-bordered w-full max-w-sm"
				/>
				<label for="subject" class="mt-2 label">
					<span class="">Subject of message?</span>
				</label>
				<input
					bind:value={subject}
					type="text"
					name="subject"
					placeholder="Inquiry about sponsors"
					class="input input-bordered w-full max-w-sm"
				/>
				<label for="message" class="mt-2 label">
					<span class="">Body of Message?</span>
				</label>
				<textarea
					bind:value={message}
					name="message"
					class="textarea input-bordered h-24 w-full max-w-sm"
					placeholder={bodyPlaceholder}
				/>
				<div class="flex mt-2 justify-center">
					{#if !sendingMessage}
						<button on:click={sendEmail} class="btn btn-primary">Submit</button>{/if}
					{#if sendingMessage}<button class="btn btn-primary loading">Submitting</button>{/if}
				</div>
			</div>
		</div>
	{/if}
</div>

<input type="checkbox" id="errorModal" class="modal-toggle" />
<div class="modal {errorModal}">
	<div class="modal-box relative">
		<label
			on:click={() => {
				errorModal = 'hidden';
			}}
			for="errorModal"
			class="btn btn-sm btn-circle absolute right-2 top-2">✕</label
		>
		<h3 class="text-lg font-bold">Error Submitting Email:</h3>
		<p class="py-4">{missedText}</p>
	</div>
</div>

<input type="checkbox" id="emailModal" class="modal-toggle" />
<div class="modal {emailModal}">
	<div class="modal-box relative">
		<label
			on:click={() => {
				emailModal = 'hidden';
			}}
			for="emailModal"
			class="btn btn-sm btn-circle absolute right-2 top-2">✕</label
		>
		<h3 class="text-lg font-bold">Error Submitting Email:</h3>
		<p class="py-4">
			It seems that you have entered an invalid email! Please try again following the form
			"test123@email.com" or contact us at <a
				href="mailto:holidaytraditions@marist.com"
				class="underline hover:text-neutral">holidaytraditions@marist.com</a
			>.
		</p>
	</div>
</div>
