<template>
  <Page>
    <ActionBar>
      <Label text="Home"></Label>
    </ActionBar>

	<StackLayout>
		<Button text='camara' @tap='openCamera' />
		<Image :src="imgSrc" stretch="aspectFill"/>
	</StackLayout>

  </Page>
</template>

<script>
import ItemDetails from "./ItemDetails";

export default {
	data(){
		return {
			imgSrc:'https://fsm.undip.ac.id//assets/attachments/Images/default.jpg'
		}
	},
    methods: {
		async openCamera(){
			try {
				const camera = require("nativescript-camera");
				const imageModule = require("tns-core-modules/ui/image");
	
				const imageAsset = await camera.takePicture();

				this.imgSrc = imageAsset;
				
			} catch (error) {
				console.log("Error -> " + error.message);	
			}
		},
        onItemTap (args) {
            const view = args.view;
            const page = view.page;
            const tappedItem = view.bindingContext;

            this.$navigateTo(ItemDetails, {
                props: { 
                    context: tappedItem,
                    animated: true,
                    transition: {
                        name: "slide",
                        duration: 200,
                        curve: "ease"
                    }}});
        }
    }
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import "~@nativescript/theme/scss/variables/blue";
// End custom common variables

// Custom styles

</style>