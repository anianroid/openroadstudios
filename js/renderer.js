(function() {
	const partners = [
		{
			imageUrl: "images/brand-logos/akg-logo.svg",
			link: ""
		},
		{
			imageUrl: "images/brand-logos/api.png",
			link: ""
		},
		{
			imageUrl: "images/brand-logos/audio-technica.png",
			link: ""
		},
		{
			imageUrl: "images/brand-logos/heritage-audio.png",
			link: ""
		},
		{
			imageUrl: "images/brand-logos/lewitt.png",
			link: ""
		},
		{
			imageUrl: "images/brand-logos/manley.png",
			link: ""
		},
		{
			imageUrl: "images/brand-logos/pmc.png",
			link: ""
		},
		{
			imageUrl: "images/brand-logos/royer.png",
			link: ""
		},
		{
			imageUrl: "images/brand-logos/rupert-neive.png",
			link: ""
		},
		{
			imageUrl: "images/brand-logos/ssl.png",
			link: ""
		},
		{
			imageUrl: "images/brand-logos/ua.png",
			link: ""
		},
		{
			imageUrl: "images/brand-logos/warm-audio.png",
			link: ""
		}
	];

	let partnersRenderer = function() {
		let html = "";

		partners.map(partner => {
			let brand = String(partner.imageUrl)
				.split("/")[2]
				.split(".")[0];
			let classString = "";
			if (brand === "pmc") {
				classString = "pmc";
			} else if (brand === "royer") {
				classString = "royer";
			}
			html += `<li class="margin-ten-bottom sm-margin-six-bottom xs-margin-10px-bottom">
				<a href="${partner.link}" target="_blank">
					<img class="brand-logo-image ${classString}" src="${partner.imageUrl}">
				</a>
			</li>`;
		});

		$("#partners-canvas").html(html);
	};

	partnersRenderer();
})();
