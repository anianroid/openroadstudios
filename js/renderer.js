(function() {
	const partners = [
		{
			imageUrl: "https://placehold.it/200x200",
			link: ""
		},
		{
			imageUrl: "https://placehold.it/200x200",
			link: ""
		},
		{
			imageUrl: "https://placehold.it/200x200",
			link: ""
		},
		{
			imageUrl: "https://placehold.it/200x200",
			link: ""
		},
		{
			imageUrl: "https://placehold.it/200x200",
			link: ""
		},
		{
			imageUrl: "https://placehold.it/200x200",
			link: ""
		}
	];

	let partnersRenderer = function() {
		let html = "";
		partners.map(partner => {
			html += `<li class="margin-ten-bottom sm-margin-six-bottom xs-margin-10px-bottom">
				<a href="${partner.link}" target="_blank">
					<img src="${partner.imageUrl}">
				</a>
			</li>`;
		});

		$("#partners-canvas").html(html);
	};

	partnersRenderer();
})();
