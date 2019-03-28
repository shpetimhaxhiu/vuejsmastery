var app = new Vue({
	el: '#app',
	data: {
		product: 'Socks',
		image: 'images/vmSocks-green-onWhite.jpg',
		inStock: true,
		details: ["80% cotton", "20% poyester", "Gender-neutral"],
		variants: [
		{
			variantId: 2234,
			variantImage: "images/vmSocks-blue-onWhite.jpg",
			variantColor: "green"
		},
		{
			variantId: 2235,
			variantImage: "images/vmSocks-green-onWhite.jpg",
			variantColor: "blue"
		}
		],
		cart: 0
	},

	methods: {
		addToCart: function() {
			this.cart+=1
		},

		updateProduct: function(variantImage) {
			this.image = variantImage

		}
	}


})