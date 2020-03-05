<template lang="html">
    <Page>
        <ActionBar>
            <Label text="Browse"></Label>
        </ActionBar>

        <StackLayout class="page__content">
            <Button text='Solicitar fingerprint' @tap='verifyFinger' />
			<YoutubePlayer src="8jrN6Kz2XbU" apiKey="AIzaSyCahkiPl1spejSjlMeCSf-_0nAj5QaGsfM"/>
        </StackLayout>
    </Page>
</template>

<script>
const fingerprintAuthPlugin = require("nativescript-fingerprint-auth");
const fingerprintAuth = new fingerprintAuthPlugin.FingerprintAuth();


export default {
	mounted(){
		fingerprintAuth.available()
		.then((avail)=>{
			console.log("Available? " + avail);
		})
		.catch(err => {
			console.log('err :', err);
		})
	},
	methods:{
		verifyFinger(){
			fingerprintAuth.verifyFingerprintWithCustomFallback({
				message: 'Scan yer finger', // optional, shown in the fingerprint dialog (default: 'Scan your finger').
				fallbackMessage: 'Enter PIN', // optional, the button label when scanning fails (default: 'Enter password').
				authenticationValidityDuration: 10 // optional (used on Android, default 5)
			}).then(() => {
				console.log("Fingerprint was OK");
				
				}, error => {
				// when error.code === -3, the user pressed the button labeled with your fallbackMessage
				console.log("Fingerprint NOT OK. Error code: " + error.code + ". Error message: " + error.message);
				}
			);
		}
	}
}
</script>

<style lang="scss" scoped>
// Start custom common variables
@import "~@nativescript/theme/scss/variables/blue";
// End custom common variables

// Custom styles

</style>