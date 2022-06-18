<script>
	const bodyPlaceholder =
		'I would like to sponsor the Holiday Traditions market. How can I make a contribution? Thank you!';

	let sentMessage = false;
	let sendingMessage = false;

	let name = '';
	let email = '';
	let subject = '';
	let message = '';

	async function sendEmail() {
		sendingMessage = true;
		console.log(email);

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
				console.log('Request sent succesfully!');
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
					class="input input-bordered w-full sm:max-w-sm max-w-xs"
				/>
				<div class="mt-2">
					<label for="email" class="label">
						<span class="">What is your email?</span>
					</label>
					<input
						bind:value={email}
						type="email"
						name="email"
						placeholder="johnsmith@gmail.com"
						class="input input-bordered w-full sm:max-w-sm max-w-xs"
					/>
				</div>
				<div class="mt-2">
					<label for="subject" class="label">
						<span class="">Subject of message?</span>
					</label>
					<input
						bind:value={subject}
						type="text"
						name="subject"
						placeholder="Inquiry about sponsors"
						class="input input-bordered w-full sm:max-w-sm max-w-xs"
					/>
				</div>
				<div class="mt-2">
					<label for="message" class="label">
						<span class="">Body of Message?</span>
					</label>
					<textarea
						bind:value={message}
						name="message"
						class="textarea input-bordered h-24 w-full sm:max-w-sm max-w-xs"
						placeholder={bodyPlaceholder}
					/>
				</div>
				<div class="flex justify-center">
					{#if !sendingMessage}
						<button on:click={sendEmail} class="btn btn-primary">Submit</button>{/if}
					{#if sendingMessage}<button class="btn btn-primary loading">Submitting</button>{/if}
				</div>
			</div>
		</div>
	{/if}
</div>
