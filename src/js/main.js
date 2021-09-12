Vue.config.devtools = true;

var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue!',
		images: ['./src/img/image1.jpg', './src/img/image2.jpg', ' ./	src/img/image3.jpg', './src/img/image4.jpg'],
		imageCounter: 0,
	},
	methods: {
		previousImage() {
			this.imageCounter--;
			if (this.imageCounter < 0) this.imageCounter = this.images.length - 1;
		},
		nextImage() {
			this.imageCounter++;
			if (this.imageCounter == this.images.length) this.imageCounter = 0;
		},
	},
});
