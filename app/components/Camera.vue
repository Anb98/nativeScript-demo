<template>
  <Page>
    <ActionBar>
      <Label text="Home"></Label>
    </ActionBar>

	<StackLayout>
		<Button text='camara' @tap='openCamera' :disabled='hasCameraAccess' />
		<Label :text='hasCameraAccess ? "Permiso de camara: Permitido" : "Permiso de camara: Denegado"' />
		<Image :src="imgSrc"/>
	</StackLayout>

  </Page>
</template>

<script>
const camera = require("nativescript-camera");
const imageModule = require("tns-core-modules/ui/image");

export default {
	mounted(){
		const hasCameraAccess = camera.isAvailable();
		this.hasCameraAccess = hasCameraAccess;

		camera.requestPermissions()
		.then( ()=>{
			this.hasCameraAccess=true;
		
		}, ()=>{
			this.hasCameraAccess=false;
		}
	);
	},
	data:()=>({
		imgSrc:'~/img/horchata.png',
		hasCameraAccess:false,
	}),
    methods: {
		async openCamera(){
			try {
	
				const imageAsset = await camera.takePicture({ cameraFacing: 'front'});

				this.imgSrc = imageAsset;
				
			} catch (error) {
				console.log("Error -> " + error.message);	
			}
		},
    }
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import "~@nativescript/theme/scss/variables/blue";
// End custom common variables

// Custom styles

</style>